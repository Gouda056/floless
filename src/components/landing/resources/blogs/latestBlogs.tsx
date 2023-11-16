import {
  Autocomplete,
  Box,
  Card,
  CardMedia,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CustomTextField from "../../../forms/theme-elements/customTextField";
import { IconSearch } from "@tabler/icons-react";
import Link from "next/link";

const latestBlogs = ({ blogs }: any) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [value, setValue] = useState<string | null>(null);

  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const filteredBlogs = blogs?.filter((blog: any) =>
    blog.heading.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box
      sx={{
        flexBasis: {
          xs: "100%",
          xl: "70%",
        },
      }}
    >
      <Stack
        justifyContent="space-between"
        sx={{
          gap: {
            xs: "2rem",
            sm: "0",
          },
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          marginX: {
            xs: "1rem",
            md: "6rem",
            xl: "0rem",
          },
        }}
      >
        <Typography
          className="font-visby"
          sx={{
            color: "var(--gray-900, #101828)",
            fontSize: "2rem",
            fontStyle: "bolder",
            fontWeight: "900",
            lineHeight: "2.75rem",
            letterSpacing: "-0.04rem",
            textAlign: "center",
          }}
        >
          Blogs
        </Typography>
        <Box display="flex" justifyContent="center">
          <TextField
            id="outlined-search"
            placeholder="Search"
            size="small"
            type="search"
            value={searchTerm}
            onChange={handleSearchChange}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconSearch size="16" />
                </InputAdornment>
              ),
            }}
            sx={{
              width: "100%",
            }}

            // onChange={(e) => dispatch(SearchProduct(e.target.value))}
          />
        </Box>
      </Stack>

      <Box
        sx={{
          marginTop: "2.5rem",
        }}
      >
        <Grid container spacing={3}>
          {filteredBlogs.length > 0 ? (
            filteredBlogs?.map((each: any, index: number) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  display="flex"
                  justifyContent="center"
                >
                  <Blog blog={each} idx={index} />
                </Grid>
              );
            })
          ) : (
            <Typography
              sx={{
                color: "var(--gray-900, #101828)",
                fontSize: "2rem",
                fontStyle: "bolder",
                fontWeight: "900",
                lineHeight: "2.75rem",
                letterSpacing: "-0.04rem",
                mx: "auto",
                textAlign: "center",
                mt: 10,
              }}
              textAlign="center"
              className="font-visby"
            >
              No search results
            </Typography>
          )}
          {}
        </Grid>
      </Box>
    </Box>
  );
};

const Blog = ({ blog, idx }: any) => {
  return (
    <Card
      sx={{
        padding: "1.5rem",
        backgroundColor: "#F9FAFB",
        borderRadius: "0 !important",
        // boxShadow: "none !important",
        width: {
          xs: "86vw",
          md: "25rem",
        },
      }}
    >
      <Box component={Link} href={`resources/${idx}`}>
        <Stack>
          <CardMedia
            component="img"
            src={blog.img}
            sx={{
              borderRadius: "0 !important",
              height: "12rem",
            }}
          />
          <Typography
            className="font-visby"
            sx={{
              color: "#2970FF",
              fontFamily: "sans-serif",
              fontSize: "0.875rem",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "1.25rem",
              marginTop: "1.5rem",
            }}
          >
            {blog.category}
          </Typography>
          <Typography
            className="font-visby"
            sx={{
              color: "var(--gray-900, #101828)",
              fontFamily: "sans-serif",
              fontSize: "1.5rem",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "2rem",
              marginTop: "0.5rem",
            }}
          >
            {blog.heading}
          </Typography>
          <Typography
            className="font-visby"
            sx={{
              color: "var(--gray-600, #475467)",
              fontFamily: "sans-serif",
              fontSize: "1rem",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "1.5rem",
              marginTop: "0.5rem",
            }}
          >
            {blog.body}
          </Typography>
          <Stack
            direction="row"
            gap={3}
            sx={{
              marginTop: "1.5rem",
            }}
          >
            <img
              src={blog.authorImg}
              alt=""
              style={{
                width: "2.5rem",
                height: "2.5rem",
                borderRadius: "12.5rem",
              }}
            />
            <Stack>
              <Typography
                className="font-visby"
                sx={{
                  color: "var(--gray-900, #101828)",
                  fontFamily: "sans-serif",
                  fontSize: "0.875rem",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "1.25rem",
                }}
              >
                {blog.authorName}
              </Typography>
              <Typography
                className="font-visby"
                sx={{
                  color: "var(--gray-600, #475467)",
                  fontFamily: "sans-serif",
                  fontSize: "0.875rem",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "1.25rem",
                }}
              >
                {blog.createdAt}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Card>
  );
};

export default latestBlogs;
