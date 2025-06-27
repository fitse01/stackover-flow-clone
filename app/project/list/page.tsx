import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen ">
      <h1>Project List</h1>
      <p>Here you can find a list of projects.</p>
      {/* You can add more content or components related to the project list here */}

      <ul className="bg-gray-400 p-20 text-2xl border gap-10 rounded-2 ">
        <Link href="/project/list/carrent">
          <li className="py-3 text-gray-700">Project 1 carrent</li>
        </Link>
        <Link href="/project/list/mindset">
          <li>Project 2 mindset</li>
        </Link>

        <Link href="/project/list/dev-overflow">
          <li>Project 3 dev overflow</li>
        </Link>

        <Link href="/project/list/project-4">
          <li>Project 4</li>
        </Link>
      </ul>
    </div>
  );
};

export default page;
