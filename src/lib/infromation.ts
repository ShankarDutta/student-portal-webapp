import { Clock9Icon, GraduationCap, User } from "lucide-react";
import { CourseListType, DurationType, RegistrationStepType } from "./types";

export const registrationSteps: RegistrationStepType[] = [
  {
    id: 1,
    icon: User,
    title: "Step 01",
    description: "Fill out the form with your personal and course infromation.",
  },
  {
    id: 2,
    icon: Clock9Icon,
    title: "Step 02",
    description:
      "Wait for our team to verify your details and contact you by phone.",
  },
  {
    id: 3,
    icon: GraduationCap,
    title: "Step 03",
    description:
      "Complete verification and start your learning  with Mars Academy.",
  },
];

export const duration: DurationType[] = [
  {
    id: 1,
    value: "3 months",
  },
  {
    id: 2,
    value: "6 months",
  },
  {
    id: 3,
    value: "1 year",
  },
  {
    id: 4,
    value: "2 year",
  },
];

export const courseList: CourseListType[] = [
  {
    id: 1,
    subject: "certification in basic Computer",
  },
  {
    id: 2,
    subject: "basic computer with spoken english",
  },

  {
    id: 3,
    subject: "java script",
  },
  {
    id: 4,
    subject: "python",
  },

  {
    id: 5,
    subject: "web with Ui/Ux Design",
  },
  {
    id: 6,
    subject: "professional Web Design",
  },
  {
    id: 7,
    subject: "Ui/Ux Design",
  },

  {
    id: 8,
    subject: "frontend development",
  },
  {
    id: 9,
    subject: "backend development",
  },
  {
    id: 10,
    subject: "full stack development",
  },
  {
    id: 11,
    subject: "mern stack development",
  },

  {
    id: 12,
    subject: "professional graphic designing",
  },
  {
    id: 13,
    subject: "professional video editing",
  },
  {
    id: 14,
    subject: "master in animation",
  },
  {
    id: 15,
    subject: "spoken English",
  },
];
