import { Stack } from "@mui/material";
import React from "react";
import TopBlogs from "./topBlogs";
import LatestBlogs from "./latestBlogs";

const blogs = ({ blogs }: any) => {
  return (
    <Stack className="container" gap={10} flexDirection="row">
      <TopBlogs />
      <LatestBlogs blogs={blogs} />
    </Stack>
  );
};

export default blogs;
