import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodString, zodEmail, zodPassword } from "@lib/zod-utils.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerUser } from "@/store/actions/users";

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
  firstname: zodString({ minLen: 1 }),
  lastname: zodString({ minLen: 1 }),
});

function Register({ onIsRegisterChange }) {
  //reducx
  const dispatch = useDispatch<AppDispatch>();

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
    console.log("submited");
    try {
      console.log("submitted Register");
      dispatch(registerUser(values) as any);
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
      errors.password ||
      errors.firstname ||
      errors.lastname
    ) {
      toast({
        title: "Error",
        description:
          (errors.email?.message || "") +
          " " +
          (errors.password?.message || "") +
          " " +
          (errors.firstname?.message || "") +
          " " +
          (errors.lastname?.message || ""),
        variant: "destructive",
      });
    }
  }, [errors.email, errors.password]);

  return (
    <div className="flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card className="mx-auto max-w-lg p-6">
          <CardHeader>
            <CardTitle className="text-xl ">Sign Up</CardTitle>
            <CardDescription>
              Enter your information to create an account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input
                      id="first-name"
                      placeholder="First name"
                      required
                      {...register("firstname")}
                    />
                    {errors.firstname && (
                      <div className="text-red-500">
                        {errors.firstname.message}
                      </div>
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
                      <div className="text-red-500">
                        {errors.lastname.message}
                      </div>
                    )}
                  </div>
                </div>
              
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
                {isSubmitting ? <Loader /> : "Sign up"}
              </Button>
              <Button
                variant="outline"
                className="w-full"
                disabled={isSubmitting}
              >
                Sign up with Google
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
        Already have an account?
      </Button>
    </div>
  );
}

export default Register;
