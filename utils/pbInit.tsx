import { cookies } from "next/headers";
import Pocketbase from "pocketbase";
import { FormattedAuthCookie } from "./functions";

export async function initPocketBase() {
  const pb = new Pocketbase(process.env.NEXT_PUBLIC_POCKETBASE_URL);

  const authCookie = cookies().get("pb_auth")?.value;
  pb.authStore.loadFromCookie(authCookie || "");

  pb.authStore.onChange(() => {
    FormattedAuthCookie(pb.authStore.token);
  });

  try {
    pb.authStore.isValid && (await pb.collection("users").authRefresh());
  } catch (_) {
    pb.authStore.clear();
  }

  return pb;
}
