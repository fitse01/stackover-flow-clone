"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { Input } from "../ui/input";

import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { formUrlQuery, removeKeysFromUrlQuery } from "@/lib/url";

interface Props {
  route: string;
  imgSrc: string;
  placeholder: string;
  oterClass?: string;
}

const LocalSearch = ({ route, imgSrc, placeholder, oterClass }: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParam = useSearchParams();
  const query = searchParam.get("query") || "";
  const [searchQuery, setSearchQuery] = useState(query);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery) {
        const newUrl = formUrlQuery({
          params: searchParam.toString(),
          key: "query",
          value: searchQuery,
        });
        router.push(newUrl, { scroll: false });
      } else {
        if (pathname === route) {
          const newUrl = removeKeysFromUrlQuery({
            params: searchParam.toString(),
            keysToRemove: ["query"],
          });
          router.push(newUrl, { scroll: false });
        }
      }
      //   alert("Debounced");
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery, router, route, searchParam, pathname]);

  return (
    <div
      className={`background-light800_darkgradient flex min-h-[54px] items-center gap-4 grow rounded-[10px] px-4 ${oterClass}`}
    >
      {/* {searchParam.toString()} */}
      <Image
        src={imgSrc}
        alt="Search"
        width={24}
        height={24}
        className="cursor-pointer"
      />
      <Input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="paragraph-regular no-focus placeholder text-dark400_light700 border-none outline-none shadow-none "
      />
    </div>
  );
};

export default LocalSearch;
