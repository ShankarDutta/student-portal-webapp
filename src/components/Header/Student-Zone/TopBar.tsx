import { AuroraText } from "@/components/shadcnui/aurora-text";
import { Button } from "@/components/shadcnui/button";
import { Separator } from "@/components/shadcnui/separator";
import {
  AwardIcon,
  MailIcon,
  PhoneIcon,
  StarIcon,
  UserGroupIcon,
} from "lucide-react";

const TopBar = () => {
  return (
    <section className="hidden bg-blue-400/4 px-6 py-2 lg:flex lg:items-center lg:justify-between">
      {/* Contact */}
      <div className="flex shrink-0 items-center gap-4">
        <a
          href="tel:+918017564029"
          className="flex items-center gap-1.5 text-sm whitespace-nowrap">
          <PhoneIcon className="size-4 text-blue-600" />
          +91 8017564029
        </a>

        <Separator
          orientation="vertical"
          className="h-5"
        />

        <a
          href="mailto:mars.academy.official@gmail.com"
          className="flex items-center gap-1.5 text-sm whitespace-nowrap">
          <MailIcon className="size-4 text-blue-600" />
          mars.academy.official@gmail.com
        </a>
      </div>

      {/* Center */}
      <AuroraText
        colors={["#833AB4", "#C13584", "#E1306C", "#FD1D1D", "#FCAF45"]}
        className="mx-4 text-xl font-semibold whitespace-nowrap lg:hidden xl:block"
        speed={0}>
        Build Skills Build Future
      </AuroraText>

      {/* Stats */}
      <div className="flex shrink-0 items-center gap-2">
        <Button
          size="sm"
          className="rounded-full bg-white px-3 text-blue-600 shadow hover:bg-white">
          <StarIcon className="size-4" />
          <span className="font-semibold text-black">4.9 Google Rating</span>
        </Button>

        <Button
          size="sm"
          className="rounded-full bg-white px-3 text-blue-600 shadow hover:bg-white">
          <AwardIcon className="size-4" />
          <span className="font-semibold text-black">20+ Courses</span>
        </Button>

        <Button
          size="sm"
          className="rounded-full bg-white px-3 text-blue-600 shadow hover:bg-white">
          <UserGroupIcon className="size-4" />
          <span className="font-semibold text-black">500+ Learners</span>
        </Button>
      </div>
    </section>
  );
};

export default TopBar;
