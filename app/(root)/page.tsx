import { auth } from "@/auth";
import QuestionCards from "@/components/cards/QuestionCards";
import HomeFilter from "@/components/filters/HomeFilter";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import handleError from "@/lib/handlers/error";
import { ValidationError } from "@/lib/http-errors";
import Link from "next/link";
import React, { use } from "react";

const questions = [
  {
    _id: "q1",
    title: "How to learn React?",
    description: "I am new to React and I want to learn it. Any suggestions?",
    tags: [
      { _id: "t1", name: "react" },
      { _id: "t2", name: "javascript" },
    ],
    author: {
      _id: "u1",
      name: "John Doe",
      image:
        "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png",
    },
    upvotes: 10,
    answers: 2,
    views: 100,
    createdAt: new Date(),
  },
  {
    _id: "q2",
    title: "What is Next.js?",
    description: "Can someone explain what Next.js is and its benefits?",
    tags: [
      { _id: "t3", name: "nextjs" },
      { _id: "t2", name: "javascript" },
    ],
    author: {
      _id: "u2",
      name: "Jane Smith",
      image:
        "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png",
    },
    upvotes: 5,
    answers: 1,
    views: 50,
    createdAt: new Date(),
  },
  {
    _id: "q3",
    title: "How to manage state in React?",
    description: "What are the best practices for state management in React?",
    tags: [
      { _id: "t1", name: "react" },
      { _id: "t4", name: "state-management" },
    ],
    author: {
      _id: "u3",
      name: "Alice Johnson",
      image:
        "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png",
    },
    upvotes: 8,
    answers: 3,
    views: 80,
    createdAt: new Date(),
  },
];

const test = async () => {
  try {
    throw new ValidationError({
      title: ["Required"],
      tags: ['"JavaScript" is not a valid tag.'],
    });
  } catch (error) {
    return handleError(error);
  }
};

// query = 'react'
interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const Home = async ({ searchParams }: SearchParams) => {
  await test();
  const { query = "", filter = "" } = await searchParams;

  const filteredQuestions = questions.filter((question) => {
    const matchesQuery = question.title
      .toLowerCase()
      .includes(query.toLowerCase());
    const matchesFilter = filter
      ? question.tags[0].name.toLowerCase() === filter.toLowerCase()
      : true;
    return matchesQuery && matchesFilter;
  });
  return (
    <>
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Question</h1>
        <Button
          className="primary-gradient min-h-[48px] px-4 py-3 !text-light-900 "
          asChild
        >
          <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
        </Button>
      </section>

      <section className="mt-11">
        <LocalSearch
          route="/"
          imgSrc="/icons/search.svg"
          placeholder="Search questions..."
          oterClass="flex-1"
        />
      </section>
      <HomeFilter />
      <div className="mt-10 flex w-full flex-col gap-6">
        {filteredQuestions.map((question) => (
          <QuestionCards key={question._id} question={question} />
        ))}
      </div>
    </>
  );
};

export default Home;
