import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodString, zodEmail, zodPassword } from '@lib/zod-utils.ts'
import { zodResolver } from "@hookform/resolvers/zod";
import { registerUser, signInUser } from "@/store/actions/users";
import PreventSignIn from "../hoc/PreventSignIn.tsx";
//ui
import { Loader } from "@components/common/utils";
import { useToast } from "../ui/use-toast";

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const baseSchema = z.object({
  email: zodEmail(),
  password: zodPassword(),
});

function Auth() {
  const [registered, setRegistered] = useState<boolean>(false);
  let navigate = useNavigate();
  //reducx
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: RootState) => state.users);
  const notifications = useSelector((state: RootState) => state.notifications);
  const [schema, setSchema] = useState(
    baseSchema.merge(
      z.object({
        firstname: z.string().min(1).max(255).optional(),
        lastname: z.string().min(1).max(255).optional(),
      })
    )
  );

  useEffect(() => {
    setSchema(
      baseSchema.merge(
        z.object({
          firstname: z.string().min(1, { message: "Required" }).max(255).optional(!registered, { message: "Required" }),
          lastname: z.string().min(1, { message: "Required" }).max(255).optional(!registered, { message: "required" }),
        })
      )
    );
  }, [registered]);
  type FormFields = z.infer<typeof schema>;
  
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  //making the firstname and lastname required on isRegisterd

  const onSubmit: SubmitHandler<FormFields> = async (values) => {
    console.log("submited")
    try {
      if (registered) {
        console.log("signinfunction")
        dispatch(registerUser(values) as any);
      } else {
        dispatch(signInUser(values) as any);
      }
      toast({
        title: "Success",
        description: "Login successful",
        variant: "success",
      });
      console.log(values);
    } catch (error) {
      setError("root", {
        message: "This email is already taken ",
      });
    }
  };

  //use effect for toast
  const { toast } = useToast();
  useEffect(() => {
    if (errors.email || errors.password ||errors.firstname || errors.lastname) {
      toast({
        title: "Error",
        description:
          (errors.email?.message || "") +
          " " +
          (errors.password?.message || "")
          +
          " " +
          (errors.firstname?.message || "")+
          " " +
          (errors.lastname?.message || ""),
        variant: "destructive",
      });
    }
  }, [errors.email, errors.password]);

  return (
    <PreventSignIn users={users}>
      <div className="flex flex-col justify-center items-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Card className="mx-auto max-w-lg p-6">
            <CardHeader>
              <CardTitle className="text-xl ">
                {registered ? "Sign Up" : "Sign In"}
              </CardTitle>
              <CardDescription>
                Enter your information to create an account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {registered && (
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="first-name">First name</Label>
                      <Input
                        id="first-name"
                        placeholder="First name"
                        required
                        {...register("firstname")}
                      />{errors.firstname && (
                        <div className="text-red-500">{errors.firstname.message}</div>
                      )}
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="last-name">Last name</Label>
                      <Input
                        id="last-name"
                        placeholder="Last name"
                        required
                        {...register("lastname")}
                      />
                      {errors.lastname && (
                    <div className="text-red-500">{errors.lastname.message}</div>
                  )}
                    </div>
                  </div>
                )}
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    {...register("email", {
                      required: true,
                    })}
                  />
                  {errors.email && (
                    <div className="text-red-500">{errors.email.message}</div>
                  )}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    {...register("password")}
                  />
                  {errors.password && (
                    <div className="text-red-500">
                      {errors.password.message}
                    </div>
                  )}
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    <Loader />
                  ) : registered ? (
                    "Sign up"
                  ) : (
                    "Login"
                  )}
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {registered ? "Sign up with Google" : "Sign in with Google"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </form>
        <Button
          variant="link"
          className="text-primary"
          onClick={() => setRegistered(!registered)}
        >
          {registered ? "Already have an account?" : "Create a new account"}
        </Button>
      </div>
    </PreventSignIn>
  );
}

export default Auth;
