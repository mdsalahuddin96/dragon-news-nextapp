"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";

import { FaCheck } from "react-icons/fa6";
import { toast } from "react-toastify";
const SignInPage = () => {
  const onSubmit =async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData);
    const {data,error}=await authClient.signIn.email({
        email:userData.email,
        password:userData.password,
        rememberMe:true,
        callbackURL:'/'
    })
    if(data){
        toast.success('SignIn Successful')
    }
    if(error){
        toast.error(error.message);
    }
  };
  return (
    <div className="min-h-80 flex flex-col justify-center items-center bg-slate-100 pt-10">
      <h1 className="text-2xl font-semibold text-gray-600 mb-4">
        Please SignIn
      </h1>
      <Form
        className="flex w-96 flex-col gap-4 border border-gray-300 p-4 rounded-2xl shadow-2xl"
        onSubmit={onSubmit}
      >
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="Enter your email" />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>
        <div className="flex gap-2">
          <Button type="submit" className="w-full rounded-sm bg-gray-900">
            <FaCheck />
            SignIn
          </Button>
        </div>
        <div className="text-center">
          <p>
            Don&apos;t have account? <Link href={'/signup'} className="text-blue-500">Register</Link>
          </p>
        </div>
      </Form>
    </div>
  );
};

export default SignInPage;
