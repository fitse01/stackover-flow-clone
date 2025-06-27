import React from "react";

interface PageProps {
  params: {
    name: string;
  };
}

const page = ({ params }: PageProps) => {
  return (
    <div>
      <h1>Project: {params.name}</h1>
      {/* You can add more content or components related to the project here */}
    </div>
  );
};

export default page;
