"use client";
import AuthForm from "@/components/forms/AuthForm";
import { SignUpSchema } from "@/lib/validations";
import React from "react";

const SignUp = () => {
  return (
    <div>
      <AuthForm
        formType="SIGN_OUT"
        schema={SignUpSchema}
        defaultValues={{ email: "", password: "", userName: "", name: "" }}
        onSubmit={(data) => Promise.resolve({ success: true, data })}
      />
    </div>
  );
};

export default SignUp;
