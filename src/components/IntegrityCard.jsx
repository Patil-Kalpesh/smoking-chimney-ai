import { cn } from "@/lib/utils";
import React from "react";
import Marquee from "@/components/ui/marquee";
import Image from 'next/image'

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },

  {
    icon: "/images/Icon-1.svg",
    title: "Integrity",
    description: "Doing what's right, Always striving!",
    background: "#ED5729"
  },
  {
    icon: "@/images/Icon-2.svg",
    title: "Authenticity",
    description: "Truthfulness, honesty, and accuracy.",
    background: "#ED57291F"
  },
  {
    icon: "/images/Icon-2.svg",
    title: "Reliability",
    description: "Let us do best for you, Anytime!",
    background: "#ED57291F"
  },
  {
    icon: "/images/Icon-2.svg",
    title: "Integrity",
    description: "Doing what's right, Always striving!",
    background: "#ED57291F"
  },
  {
    icon: "/images/Icon-2.svg",
    title: "Integrity",
    description: "Doing what's right, Always striving!",
    background: "#ED57291F"
  }
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard  = ({
  img,
  name,
  username,
  body,
  icon,
  title
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>

       <div className="card p-7 w-[358px] h-[205px] bg-[#ED5729] rounded-lg flex-shrink-0">
                  <div className='h-[48px] w-[48px] '>
                  <Image src={icon} width={48} height={48} alt="icon" />
                  </div>
                  <p className='text-[26.72px] font-normal lg:pt-3 pt-1 text-white'>{title}</p>
                  <p className='text-white text-[14px] lg:pt-3 pt-2'>Doing what&apos;s right, Always striving!</p>
                </div>
    </figure>
  );
};

export function IntegrityCard() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
