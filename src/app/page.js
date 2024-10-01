import { MenuContent } from "@/components/menu-content";
import { Button } from "@/components/ui/button";
import { ALargeSmall, HomeIcon, Icon } from "lucide-react";


export default function Home() {
  return (
    <>
    <div className="w-96">
    </div>
    <Button variant="outline">
      <Button size="icon" variant="ghost">
        <HomeIcon size={20}></HomeIcon>
      </Button>
      <div className="w-48 flex justify-start">
        Home
      </div>
    </Button>
    </>
  );
}
