
// @ts-nocheck
import { useSession } from "next-auth/react";

function AuthHeader() {
  const session = useSession();
  const token = session.data?.accessToken;

  if (token) {
    return {
      Authorization: "Bearer " + token,
      "X-Requested-With": "XMLHttpRequest",
    };
  } else {
    return { "X-Requested-With": "XMLHttpRequest" };
  }
}

export default AuthHeader;