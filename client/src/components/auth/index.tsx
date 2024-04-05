import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

//ui
import {Loader} from '@components/common/utils'
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

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type FormFields = z.infer<typeof schema>;

function Auth() {
  const [registered, setRegistered] = useState<boolean>(false);
  let navigate = useNavigate();
  //reducx
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: RootState) => state.users);
  const notifications = useSelector((state: RootState) => state.notifications);


  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });
  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
    } catch (error) {
      setError("root", {
        message: "This email is already taken ",
      });
    }
  };

    //use effect for toast 
    const { toast } = useToast()
    useEffect(() => {
      if (errors.email || errors.password) {
        toast({
          title: "Error",
          description: (errors.email?.message || "") + " " + (errors.password?.message || ""),
          variant: "destructive",
        });
      }
    }, [errors.email,errors.password, toast]);

  return (
    <div className="flex flex-col justify-center items-center">
      <Card className="mx-auth max-w-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>
            Enter your email and password to login to your account
          </CardDescription>
        </CardHeader>

        {users.loading ? (
          <Loader />
        ) : (
          <CardContent className="">
            {errors.root && 
              <div className="text-red-500">{errors.root.message}</div>
            }

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="py-3">
                <Label>Email:</Label>
                <Input
                  placeholder="Email"
                  type="text"
                  {...register("email")}
                ></Input>
                {errors.email && (
                  <div className="text-red-500">{errors.email.message}</div>
                )}
              </div>
              <div className="py-3">
                <Label>Password:</Label>
                <Input
                  placeholder="Password"
                  type="password"
                  {...register("password")}
                ></Input>
                {errors.password && (
                  <div className="text-red-500">{errors.password.message}</div>
                )}
              </div>
              <Button disabled={isSubmitting} type="submit" className="w-full">
                {isSubmitting ? (
                  <Loader />
                ) : registered ? (
                  "Login"
                ) : (
                  "Register"
                )}
              </Button>
            </form>
          </CardContent>
        )}
      </Card>
      <Button className="mt-4 " variant="outline" onClick={() => setRegistered(!registered)}>
       {!registered ? "Already have an an account?" : "Register"}
      </Button>
    </div>
  );
}

export default Auth;
