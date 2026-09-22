import { ReactNode } from "react";
import z from "zod";
import { studentLoginSchema } from "./zodSchema";

export type LayoutProps = Readonly<{
  children: ReactNode;
}>;

export type StudentLoginSchemaType = z.infer<typeof studentLoginSchema>;
