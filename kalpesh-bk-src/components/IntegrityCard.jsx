import { cn } from "@/lib/utils";
import React from "react";
import Marquee from "@/components/ui/marquee";
import Image from 'next/image'

const reviews = [
  
  {
    name: "Integrity",
    username:"@Integrity",
    body: "Doing what's right, Always striving!",
    img: "/images/Icon-1.svg",
  },
  {
    name: "Authenticity",
    username: "@Authenticity",
    body: "Truthfulness, honesty, and accuracy.",
    img: "/images/Icon-2.svg",
  },
  {
    name: "Reliability",
    username: "@Reliability",
    body: "Let us do best for you, Anytime!",
    img: "/images/Icon-2.svg",
  },

];

const firstRow = reviews.slice(0, reviews.length / 3);
// const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard  = ({
  username,
  img,
  name,
  body
}) => {
  return (
    <figure
      className={cn(
        "relative w-full cursor-pointer overflow-hidden rounded-lg",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-[#ED5729] hover:text-white",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
          <div className="card p-7 w-[358px] h-[205px] bg-[#ED57291F] rounded-lg flex-shrink-0">
            <div className='h-[48px] w-[48px] '>
                <img className="rounded-full" width="48" height="48" alt="" src={img} />
            </div>
            <p className='text-[26.72px] font-normal lg:pt-3 pt-1 '>{name} </p>
            <p className='text-[14px] lg:pt-3 pt-2'>{body}</p>
          </div>
      </div>
      {/* <blockquote className="mt-2 text-sm">{body}</blockquote> */}
    </figure>
  );
};

export function IntegrityCard() {
  return (
    <div className="relative flex  w-full flex-col items-center justify-center overflow-hidden bg-white ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {reviews.map((review,index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
