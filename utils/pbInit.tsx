import { cookies } from "next/headers";
import Pocketbase from "pocketbase";

export async function initPocketBase() {
  const pb = new Pocketbase(process.env.POCKETBASE_URL);

  // load the store data from the request cookie string
  const authCookie = cookies().get("pb_auth")?.value;
  pb.authStore.loadFromCookie(authCookie || "");

  // send back the default 'pb_auth' cookie to the client with the latest store state
  pb.authStore.onChange(() => {
    cookies().set("pb_auth", pb.authStore.token, {
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
      sameSite: "lax",
      httpOnly: true,
    });
  });

  try {
    // get an up-to-date auth store state by verifying and refreshing the loaded auth model (if any)
    pb.authStore.isValid && (await pb.collection("users").authRefresh());
  } catch (_) {
    // clear the auth store on failed refresh
    pb.authStore.clear();
  }

  return pb;
}
