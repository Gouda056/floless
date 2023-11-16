// @ts-nocheck
import { useEffect } from "react";
import axios from "axios";
import { getSession } from "next-auth/react";
import { signOut } from "next-auth/react";

interface props {
  page: string;
}
function AxiosConfig({ page }: props) {
  useEffect(() => {
    axios.interceptors.request.use(async (request) => {
      const session = await getSession();
      if (session)
        request.headers.Authorization = `Bearer ${session.accessToken}`;
      return Promise.resolve(request);
    });

    axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.response.status === 401) {
          if (page === "video-gallery" || page === "reels-gallery") return;
          else {
              signOut({callbackUrl: "/login"});
          }
        }
        return Promise.reject(error);
      }
    );
  }, []);

  return "";
}

export default AxiosConfig;
