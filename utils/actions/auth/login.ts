"use server";

import { ILoginUser } from "../../types";
import { pb } from "../../pocketbase";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginUser({ user, password, nextPath }: ILoginUser) {
  try {
    const authData = await pb
      .collection("users")
      .authWithPassword(user, password);
    const cookieStore = cookies();
    cookieStore.set("pb-token", authData.token);
    if (nextPath) redirect(`/dash/${authData.record.id}/${nextPath}`);
    else redirect(`/dash/${authData.record.id}`);
  } catch (error) {
    throw error;
  }
}
