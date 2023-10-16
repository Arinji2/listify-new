"use server";
import { cookies } from "next/headers";

export async function FormattedAuthCookie(token: string) {
  cookies().set("pb_auth", token);
}
