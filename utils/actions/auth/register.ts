"use server";

import { initPocketBase } from "@/utils/pbInit";
import { RegisterFormSchema } from "@/utils/validations/auth/schema";
import { redirect } from "next/navigation";

export async function RegisterAction(prevState: any, formData: FormData) {
  const form = {
    email: formData.get("email"),
    username: formData.get("username"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirm"),
  };

  const parsedForm = RegisterFormSchema.safeParse(form);
  if (!parsedForm.success) {
    return {
      type: "error",
      message: parsedForm.error.issues[0].message,
    };
  }
  const pb = await initPocketBase();
  try {
    pb.collection("users").create({
      email: parsedForm.data.email,
      username: parsedForm.data.username,
      password: parsedForm.data.password,
      passwordConfirm: parsedForm.data.confirmPassword,
    });
  } catch (error) {
    if (error) {
      return {
        type: "error",
        message: error ?? "Something went wrong",
      };
    }
  }
  const res = await pb
    .collection("users")
    .authWithPassword(parsedForm.data.email, parsedForm.data.password);

  if (res.record.verified === false) redirect("/verify");
  else redirect("/dash");
}
