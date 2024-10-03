import SplineHome from "@/components/spline-home";
import TableRow from "@/components/table-rows";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { ScrollArea } from "@/components/ui/scroll-area"
import Link from "next/link";
import {WORKS} from '@/lib/constants'

export default function Home() {
  return (
      <div className="relative overflow-hidden max-w-screen-sm h-full overflow-y-auto no-scrollbar">
        <div className="pt-24 flex flex-col gap-8">
          <div className="text-lg text-neutral-600">
          Hi there! 👋 I'm <span className="text-neutral-800">Rajat Payghan</span>, a product engineer passionate about crafting digital experiences. I <HoverCard><HoverCardTrigger className="underline underline-offset-2 text-neutral-800">manage</HoverCardTrigger><HoverCardContent className="text-sm">I lead product teams, prioritize features, and drive development from concept to successful launch.</HoverCardContent></HoverCard>, <HoverCard><HoverCardTrigger className="underline underline-offset-2 text-neutral-800">
            design</HoverCardTrigger><HoverCardContent className="text-sm">I create user-centered interfaces, prototype interactions, and transform complex ideas into intuitive experiences.</HoverCardContent></HoverCard>, and sometimes <HoverCard><HoverCardTrigger className="underline underline-offset-2 text-neutral-800">
            develop</HoverCardTrigger><HoverCardContent className="text-sm">I write clean, efficient code to build robust features and optimize performance</HoverCardContent></HoverCard> engaging digital products that make a difference.
          </div>
          <SplineHome/>
          <div className="text-lg font-thin text-neutral-600">
            When I'm not <Link href={"https://www.reddit.com/r/Piracy/"} className="cursor-default hover:text-neutral-700">sailing around the high seas</Link> of the internet, you'll find me grooving to EDM, savoring a perfect cup of coffee or tinkering with various personal code & design projects. I thrive on bringing ideas to life and creating solutions that delight users.
          </div>
          <div className="text-lg font-thin text-neutral-600">
            Currently, I'm collaborating with various global units, optimizing global pricing processes, and developing cross platform tools to improve efficiency as a Process Intern at <Link href={"https://www.adeccogroup.com/"} className="text-lg hover:bg-neutral-200 text-neutral-600 hover:underline underline-offset-2">The Adecco Group</Link>
          </div>
          <div className="text-lg font-thin text-neutral-600">
          I have managed multiple digital products at <Link href={"https://sellersetu.in/"} className="text-lg hover:bg-neutral-200 text-neutral-600 hover:underline underline-offset-2">SellerSetu,</Link> where we were shaping the future of E-Commerce in India via ONDC. I have also built web dashboards and core operating software for <Link href={"https://imdpune.gov.in/"} className="text-lg hover:bg-neutral-200 text-neutral-600 hover:underline underline-offset-2">Indian Meteorological Department</Link> in Pune.
          </div>
          <div className="text-lg font-thin text-neutral-600">
            At BITS Pilani, I led the products built at Students' Union Tech Team as the <span className="text-neutral-800">Head of Product</span>, bringing campus life into the digital age with apps like <Link href={"https://bits-sutechteam.org/suapp.html"} className="text-lg hover:bg-neutral-200 text-neutral-600 hover:underline underline-offset-2">SU App</Link> and <Link href={"https://studydeck.bits-sutechteam.org/"} className="text-lg hover:bg-neutral-200 text-neutral-600 hover:underline underline-offset-2">StudyDeck</Link>. Whether I'm managing high stakes products or building community tools, I'm all about creating impact through innovation.
          </div>
          <div className="text-lg font-thin text-neutral-600">
          TO BE CHANGED
            {WORKS.map((job) => (
                      <TableRow
                        href={job.href}
                        title={job.title}
                        subtitle={job.subtitle}
                        date={job.date}
                        key={job.href}
                      />
                    ))}
          </div>
        </div>
      </div>
  );
}
