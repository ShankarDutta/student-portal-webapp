import { Badge } from "@/components/shadcnui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/shadcnui/card";
import { registrationSteps } from "@/lib/infromation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Registration - Mars Academy",
  description:
    "Register online for professional computer training and career development courses at Mars Academy.",
};

const page = () => {
  return (
    <section className="grid place-items-center px-6 py-20">
      {/* text section  */}
      <section className="space-y-4 text-center lg:max-w-4xl">
        <Badge className="p-3.5 text-sm">
          Admission Open {new Date().getFullYear()}
        </Badge>

        <h1 className="text-xl font-bold tracking-wider md:text-2xl lg:text-3xl">
          Start Your Learning Journey with Mars Academy
        </h1>

        <p className="text-sm tracking-wider text-black/70">
          Take the next step toward your career with Mars Academy. Explore
          practical, industry-focused courses designed to help you learn, grow
          with confidence, and prepare for real-world opportunities.
        </p>

        {/* Cards Section  */}
        <section className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-3">
          {registrationSteps.map((item) => (
            <Card key={item.id}>
              <CardContent className="flex-row items-start">
                <div className="">
                  <item.icon size={24} />
                </div>
                <div className="text-left">
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>
      </section>
    </section>
  );
};

export default page;
