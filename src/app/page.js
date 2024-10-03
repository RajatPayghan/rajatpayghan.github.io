import Spline from '@splinetool/react-spline/next';
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { ScrollArea } from "@/components/ui/scroll-area"
import Link from "next/link";




export default function Home() {
  return (
    // max-w-screen-md
      <ScrollArea className="max-w-screen-md h-full overflow-y-auto hide-scrollbar">
        <div className="pt-24 flex flex-col gap-8">
          <div className="text-lg text-neutral-600">
          Hi there! 👋 I'm <span className="text-neutral-800">Rajat Payghan</span>, a product engineer passionate about crafting digital experiences. I <HoverCard><HoverCardTrigger className="underline underline-offset-2 text-neutral-800">manage</HoverCardTrigger><HoverCardContent className="text-sm">I lead product teams, prioritize features, and drive development from concept to successful launch.</HoverCardContent></HoverCard>, <HoverCard><HoverCardTrigger className="underline underline-offset-2 text-neutral-800">
            design</HoverCardTrigger><HoverCardContent className="text-sm">I create user-centered interfaces, prototype interactions, and transform complex ideas into intuitive experiences.</HoverCardContent></HoverCard>, and sometimes <HoverCard><HoverCardTrigger className="underline underline-offset-2 text-neutral-800">
            develop</HoverCardTrigger><HoverCardContent className="text-sm">I write clean, efficient code to build robust features and optimize performance</HoverCardContent></HoverCard> engaging digital products that make a difference.
          </div>
          <div className="text-lg font-thin text-neutral-600">
            When I'm not swimming around the vast ocean of the internet, you'll find me grooving to EDM, playing football, or savoring a perfect cup of coffee. I thrive on bringing ideas to life and creating solutions that delight users.
          </div>
          <div className="text-lg font-thin text-neutral-600">
            Currently, I'm optimizing global pricing processes as a Process Intern at <Link href={"https://www.adeccogroup.com/"} className="text-lg hover:bg-neutral-200 text-neutral-600 hover:underline underline-offset-2">The Adecco Group</Link>. Previously, I've worn multiple hats at innovative startups to establisged organisations; from shaping the future of E-Commerce in India as a Designer and Product Manager at <Link href={"https://sellersetu.in/"} className="text-lg hover:bg-neutral-200 text-neutral-600 hover:underline underline-offset-2">SellerSetu</Link>, to developing dashboards for the <Link href={"https://imdpune.gov.in/"} className="text-lg hover:bg-neutral-200 text-neutral-600 hover:underline underline-offset-2">Indian Meteorological Department</Link> in Pune.
          </div>
          <div className="text-lg font-thin text-neutral-600">
            My passion for innovation extends beyond my professional life. I've had the privilege of giving back to my alma mater, BITS Pilani, as the <span className="text-neutral-800">Head of Product</span> for the Students' Union Technical Team. There, I led a talented group of designers and developers in creating impactful applications. We brought to life projects like the SU App and Studydeck, which enhance the quality of campus life and education for a 6000+ growing community of students.
          </div>

        </div>
        {/* <SplineHome className="w-full h-auto bg-neutral-300" /> */}
        <div className="w-full aspect-video relative overflow-hidden my-8 bg-neutral-100">
          <Spline 
          scene="https://prod.spline.design/MWg7T9pvG4cTrW9r/scene.splinecode"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
          />
        </div>
      </ScrollArea>
  );
}
