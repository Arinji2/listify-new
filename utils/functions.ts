"use server";
import { cookies } from "next/headers";

export async function FormattedAuthCookie(token: string) {
  cookies().set("pb_auth", token, {
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
    sameSite: "lax",
    httpOnly: true,
  });
}
