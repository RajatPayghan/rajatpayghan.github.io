import { MenuContent } from "@/components/menu-content";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { ScrollArea } from "@/components/ui/scroll-area"
import Link from "next/link";
import { Suspense } from "react";




export default function Home() {
  return (
    <ScrollArea className="max-w-screen-md min-h-full">
      <div className="pt-24">
        <div className="text-lg font-thin">
          Hi 👋🏼 I'm Rajat Payghan, a product engineer, designer, .I <HoverCard><HoverCardTrigger className="underline underline-offset-2">
          manage</HoverCardTrigger><HoverCardContent>I have managed digital products for Saas, B2B, B2C, marketing etc</HoverCardContent></HoverCard>, <HoverCard><HoverCardTrigger className="underline underline-offset-2">
          design</HoverCardTrigger><HoverCardContent>I have worked with multiple startups to bring to life their 0 to 1 product</HoverCardContent></HoverCard> and sometimes <HoverCard><HoverCardTrigger className="underline underline-offset-2">
          develop</HoverCardTrigger><HoverCardContent>I have a B.Tech degree in Computer Science, and have developed multiple applications for BITS Pilani student community</HoverCardContent></HoverCard> engaging digital experiences. I 
          Nulla adipisicing tempor est commodo commodo minim in magna qui. Elit nulla velit anim ex anim aliqua. Aute aute laboris duis culpa ut. Ullamco fugiat ex ad cillum sit qui veniam aliquip veniam esse occaecat pariatur pariatur.
        </div>
      </div>
    </ScrollArea>
  );
}
