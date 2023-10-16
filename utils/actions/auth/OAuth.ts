import { FormattedAuthCookie } from "@/utils/functions";
import Pocketbase from "pocketbase";
export async function GoogleOAuthAction() {
  const pb = new Pocketbase(process.env.NEXT_PUBLIC_POCKETBASE_URL);
  try {
    const authData = await pb
      .collection("users")
      .authWithOAuth2({ provider: "google" });

    FormattedAuthCookie(pb.authStore.exportToCookie());
    return {
      status: 200,
    };
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function GithubOAuthAction() {
  const pb = new Pocketbase(process.env.NEXT_PUBLIC_POCKETBASE_URL);
  try {
    const authData = await pb
      .collection("users")
      .authWithOAuth2({ provider: "github" });

    FormattedAuthCookie(pb.authStore.exportToCookie());
    return {
      status: 200,
    };
  } catch (error: any) {
    throw new Error(error.message);
  }
}
