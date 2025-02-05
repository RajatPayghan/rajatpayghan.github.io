import SplineHome from "@/components/spline-home";
import TableRow from "@/components/table-rows";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { ScrollArea } from "@/components/ui/scroll-area"
import Link from "next/link";
import {WORKS} from '@/lib/constants'
import { WHATSNEW, SONG } from "@/lib/one-place-changer";
import { SectionContainer, SectionContent, SectionTitle } from "@/components/sections";

export default function Home() {
  return (
    <div className="container-wrapper">
      {/* Container for scroll */}

      {/* Container for central width */}
      <div className="container-md">
        <div className="flex flex-col gap-8 lg:gap-12">
          {/* First About Me section */}
          <SectionContainer>
            <SectionTitle></SectionTitle>
            <SectionContent>
              Hi there! 👋 I'm <span className="text-neutral-800">Rajat Payghan</span>, a product engineer passionate about crafting digital experiences. I <HoverCard><HoverCardTrigger className="underline underline-offset-2 text-neutral-800">manage</HoverCardTrigger><HoverCardContent className="text-sm">I lead product teams, prioritize features, and drive development from concept to successful launch.</HoverCardContent></HoverCard>, <HoverCard><HoverCardTrigger className="underline underline-offset-2 text-neutral-800">
              design</HoverCardTrigger><HoverCardContent className="text-sm">I create user-centered interfaces, prototype interactions, and transform complex ideas into intuitive experiences.</HoverCardContent></HoverCard>, and sometimes <HoverCard><HoverCardTrigger className="underline underline-offset-2 text-neutral-800">
              develop</HoverCardTrigger><HoverCardContent className="text-sm">I write clean, efficient code to build robust features and optimize performance</HoverCardContent></HoverCard> engaging digital products that make a difference.
            </SectionContent>
          </SectionContainer>

          {/* Spline Section */}
          <SectionContainer>
            <SectionTitle/>
            <SectionContent>
              <SplineHome sceneLink={"https://prod.spline.design/MWg7T9pvG4cTrW9r/scene.splinecode"}/>
            </SectionContent>
          </SectionContainer>

          {/* Casual Info */}
          <SectionContainer>
            <SectionTitle></SectionTitle>
            <SectionContent>
              When I'm not <Link href={"https://www.reddit.com/r/Piracy/"} className="cursor-default hover:text-neutral-700">sailing around the high seas</Link> of the internet, you'll find me grooving to EDM, savoring a perfect cup of coffee or tinkering with various personal code & design projects. I thrive on bringing ideas to life and creating solutions that delight users.
            </SectionContent>
          </SectionContainer>

          {/* Work Section */}
          <SectionContainer>
            <SectionTitle>My Work</SectionTitle>
            <SectionContent>
            {WORKS.map((job) => (
                        <TableRow
                          // href={job.href}
                          title={job.title}
                          subtitle={job.subtitle}
                          date={job.date}
                          key={job.href}
                        />
                      ))}
            </SectionContent>
          </SectionContainer>

          {/* Currently */}
          <SectionContainer>
            <SectionTitle>What's New</SectionTitle>
            <SectionContent>
              {WHATSNEW.text}
            </SectionContent>
          </SectionContainer>
          
          {/* Spotify Song Link */}
          <SectionContainer>
            <SectionTitle>Recent Fav</SectionTitle>
            <SectionContent>
              <iframe
                style={{ borderRadius: "12px" }}
                src={SONG.src}
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </SectionContent>
          </SectionContainer>

          {/* Spacer */}
          <div className="h-24 lg:h-36 w-full"></div>
        </div>
      </div>
    </div>
  );
}
