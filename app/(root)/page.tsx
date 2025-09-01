import { auth } from "@/auth";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
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
    },
    upvotes: 8,
    answers: 3,
    views: 80,
    createdAt: new Date(),
  },
];

// query = 'react'
interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const Home = async ({ searchParams }: SearchParams) => {
  const { query = "" } = await searchParams;

  const filteredQuestions = questions.filter((question) =>
    question.title.toLowerCase().includes(query?.toLowerCase())
  );
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
      <section className="mt-5">HomeFilter</section>
      <div className="mt-10 flex w-full flex-col gap-6">
        {filteredQuestions.map((question) => (
          <div
            key={question._id}
            className="background-light800_darkgradient rounded-lg p-6 cursor-pointer"
          >
            <h2 className="h2-medium text-dark100_light900">
              {question.title}
            </h2>
            <p className="mt-2 text-dark500_light700">{question.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {question.tags.map((tag) => (
                <span
                  key={tag._id}
                  className="background-light300_dark700 text-dark600_light400 rounded-full px-3 py-1 text-sm"
                >
                  {tag.name}
                </span>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between text-sm text-dark500_light700">
              <span>Asked by {question.author.name}</span>
              <span>{question.createdAt.toDateString()}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
