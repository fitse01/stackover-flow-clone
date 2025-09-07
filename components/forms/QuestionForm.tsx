"use client";
import { AskQuestionSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { Form } from "../ui/form";

const QuestionForm = () => {
  const form = useForm({
    resolver: zodResolver(AskQuestionSchema),
    defaultValues: {
      title: "",
      content: "",
      tags: [],
    },
  });
  const handleCreateQuestion = () => {};
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleCreateQuestion)}>
        <div>Question Form</div>
      </form>
    </Form>
  );
};

export default QuestionForm;
