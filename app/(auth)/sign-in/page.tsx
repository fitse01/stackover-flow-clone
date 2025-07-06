"use client";
import AuthForm from "@/components/forms/AuthForm";
import { SignInSchema } from "@/lib/validations";
import React from "react";
import { _success } from "zod/v4/core";

const page = () => {
  return (
    <div>
      <AuthForm
        formType="SIGN_IN"
        schema={SignInSchema}
        defaultValues={{ email: "", password: "" }}
        onSubmit={(data) => Promise.resolve({ success: true, data })}
      />
    </div>
  );
};

export default page;
