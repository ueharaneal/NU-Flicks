import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodString, zodEmail, zodPassword } from "@lib/zod-utils.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInUser } from "@/store/actions/users";

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
import { LogIn } from "lucide-react";

const baseSchema = z.object({
  email: zodEmail(),
  password: zodPassword(),
});

function Login({ onIsRegisterChange }) {
  //reducx
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: RootState) => state.users);
  type FormFields = z.infer<typeof baseSchema>;

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(baseSchema),
  });

  //making the firstname and lastname required on isRegisterd

  const onSubmit: SubmitHandler<FormFields> = async (values) => {
    try {
      console.log("submitted sigin");
      dispatch(signInUser(values) as any);
      toast({
        title: "Success",
        description: "Login successful",
        variant: "success",
      });
      console.log(values);
    } catch (error) {
      setError("root", {
        message: error.data.message,
      });
    }
  };

  //use effect for toast
  const { toast } = useToast();
  useEffect(() => {
    if (
      errors.email ||
      errors.password
    ) {
      toast({
        title: "Error",
        description:
          (errors.email?.message || "") +
          " " +
          (errors.password?.message || ""),
        variant: "destructive",
      });
    }
  }, [errors.email, errors.password]);

  return (
    <div className="flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card className="mx-auto max-w-lg p-6">
          <CardHeader>
            <CardTitle className="text-xl ">Login</CardTitle>
            <CardDescription>
              Enter your information to sign in 
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
            
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
                  <div className="text-red-500">{errors.password.message}</div>
                )}
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? <Loader /> : "Sign in"}
              </Button>
              <Button
                variant="outline"
                className="w-full"
                disabled={isSubmitting}
              >
                Sign in with Google
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
      <Button
        variant="link"
        className="text-primary"
        onClick={() => onIsRegisterChange()}
      >
        Create a new account
      </Button>
    </div>
  );
}

export default Login;