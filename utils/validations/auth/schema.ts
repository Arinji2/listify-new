import z from "zod";
import { CONSTRAINTS } from "../../constraints";

export const RegisterFormSchema = z
  .object({
    email: z.string().email(),
    username: z
      .string()
      .min(
        CONSTRAINTS.USERNAME.MIN_LENGTH,
        `Username must be ${CONSTRAINTS.USERNAME.MIN_LENGTH} long`,
      )
      .max(
        CONSTRAINTS.USERNAME.MAX_LENGTH,
        `Username must be ${CONSTRAINTS.USERNAME.MAX_LENGTH} long`,
      ),
    password: z
      .string()
      .min(
        CONSTRAINTS.PASSWORD.MIN_LENGTH,
        `Password must be ${CONSTRAINTS.PASSWORD.MIN_LENGTH} long`,
      )
      .max(
        CONSTRAINTS.PASSWORD.MAX_LENGTH,
        `Password must be ${CONSTRAINTS.PASSWORD.MAX_LENGTH} long`,
      ),
    confirmPassword: z
      .string()
      .min(
        CONSTRAINTS.PASSWORD.MIN_LENGTH,
        `Password must be ${CONSTRAINTS.PASSWORD.MIN_LENGTH} long`,
      )
      .max(
        CONSTRAINTS.PASSWORD.MAX_LENGTH,
        `Confirm Password must be ${CONSTRAINTS.PASSWORD.MAX_LENGTH} long`,
      ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
