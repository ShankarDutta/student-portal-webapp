import z from "zod";

export const studentLoginSchema = z.object({
  studentId: z
    .string()
    .min(8, {
      error: "The Student Id  isn't Valid",
    })
    .max(32, {
      error: "The Student Id  isn't Valid",
    }),

  password: z
    .string()
    .min(8, {
      error: "The password  is incorrect.",
    })
    .max(128, {
      error: "The password  is incorrect.",
    }),
});
