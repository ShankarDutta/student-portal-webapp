import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";
import z from "zod";
import { onlineRegistrationFormSchema, studentLoginSchema } from "./zodSchema";

export type LayoutProps = Readonly<{
  children: ReactNode;
}>;

export type StudentLoginSchemaType = z.infer<typeof studentLoginSchema>;

export type OnlineRegistrationFormSchemaType = z.infer<
  typeof onlineRegistrationFormSchema
>;

export type RegistrationStepType = {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
};

export type DurationType = {
  id: number;
  value: string;
};

export type CourseListType = {
  id: number;
  subject: string;
};
