import * as z from "zod";

export const loginInputSchema = z.object({
  email: z
    .string()
    .email({ message: "Please enter a valid email address" })
    .nonempty({ message: "Email is required" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(16, { message: "Password must be at most 16 characters long" })
    .regex(/^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {
      message:
        "Password must contain at least one uppercase letter and one special character",
    }),
});

export type inputTypes = z.infer<typeof loginInputSchema>;
