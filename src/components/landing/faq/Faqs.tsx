import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { FAQType, faqs } from "./data";
import Faq from "./Faq";

const Faqs = () => {
  const [viewAll, setViewAll] = useState(false);
  const [open, setOpen] = useState<number>(0);
  const [finalFaqs, setFinalFaqs] = useState<FAQType[]>([]);

  const handleClick = () => {
    setViewAll(!viewAll); // Toggle viewAll state between true and false
  };

  useEffect(() => {
    const visibleFaqs = viewAll ? faqs : faqs.slice(0, 4);
    setFinalFaqs(visibleFaqs);
  }, [viewAll]); // Run the effect whenever viewAll state changes

  return (
    <Box
      className="container"
      sx={{
        padding: {
          xs: "3rem 0 !important",
          md: "6rem 0 !important",
        },
      }}
    >
      <Typography
        textAlign="center"
        sx={{
          WebkitTextStrokeWidth: "4px",
          WebkitTextStrokeColor: "black",
          letterSpacing: "5px",
          fontSize: {
            xs: "1.7rem",
            md: "3rem",
          },
          lineHeight: "2.5rem",
        }}
        className="font-visby"
      >
        FREQUENTLY ASKED QUESTIONS
      </Typography>
      <Box display="flex" justifyContent="center">
        <Typography
          lineHeight="30px"
          textAlign="center"
          color="gray"
          mt={4}
          sx={{
            width: {
              xs: "90%",
              md: "60%",
            },
            fontSize: {
              xs: "18px",
              md: "22px",
            },
          }}
          className="font-visby"
        >
          Interest sparks curiosity and we understand that. For any queries not
          listed in this section, please feel free to mail us on
          hello@floless.in
        </Typography>
      </Box>
      <Box
        className="features-container faq-box"
        sx={{
          marginTop: "6rem !important",
        }}
      >
        {finalFaqs?.map((each, index) => (
          <div key={index}>
            <Faq setOpen={setOpen} open={open} FAQType={each} />
          </div>
        ))}
      </Box>
      <Box textAlign="center" mt={10}>
        <button
          style={{
            border: "2px solid black",
            padding: "12px 20px",
            background: "transparent",
            fontWeight: "700",
            color: "black",
            fontSize: "16px",
            borderRadius: "50px",
            cursor: "pointer",
          }}
          className="font-visby"
          onClick={handleClick}
        >
          {viewAll ? <>View Less</> : <>View More</>}
        </button>
      </Box>
    </Box>
  );
};
export default Faqs;