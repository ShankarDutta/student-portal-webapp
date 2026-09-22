import StudentLoginForm from "@/components/Forms/StudentLoginForm";
import { Button } from "@/components/shadcnui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Student Login - Mars Academy",
  description:
    "Log in to your Mars Academy student account to access your courses, learning resources, and student services.",
};

const page = () => {
  return (
    <section className="grid h-[90dvh] place-items-center px-6 lg:h-[86dvh]">
      <Card className="w-full max-w-85">
        <CardHeader>
          <CardTitle className="text-xl">Welcome back</CardTitle>
          <CardDescription>
            Log in to your Mars Academy student account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <StudentLoginForm />
          <CardDescription className="text-center">
            Don&apos;t have an account?
            <Button
              className="px-1 py-0"
              variant="link"
              nativeButton={false}
              render={
                <Link href="/student-zone/online-registration">Join Now</Link>
              }
            />
          </CardDescription>
        </CardContent>
      </Card>
    </section>
  );
};

export default page;
