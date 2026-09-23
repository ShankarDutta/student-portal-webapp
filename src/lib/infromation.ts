import { Clock9Icon, GraduationCap, User } from "lucide-react";
import { RegistrationStepType } from "./types";

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
