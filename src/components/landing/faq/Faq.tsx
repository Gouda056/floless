import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import { useState } from "react";

const Faq = ({ FAQType, open, setOpen }: any) => {
  return (
    <Accordion
      expanded={open === FAQType?.id}
      onClick={() => {
        if (open !== FAQType) {
          setOpen(FAQType.id);
        } else {
          setOpen();
        }
      }}
      style={{
        backgroundColor: "rgb(248 250 252)",
        marginTop: "3vh",
        marginBottom: "3vh",
        borderRadius: "50px",
        paddingTop: "2vh",
        paddingBottom: "2vh",
      }}
      defaultExpanded={FAQType?.expanded}
    >
      <AccordionSummary
        expandIcon={
          open === FAQType?.id && open !== null ? <RemoveIcon /> : <AddIcon />
        }
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h4">
          <Box
            className="faq-number"
            component="span"
            sx={{
              backgroundColor: "black",
              borderRadius: "50%",
              textAlign: "center",
              padding: {
                xs: "22px 15px 22px 15px",
                lg: "15px 15px 15px 18px",
              },
              marginRight: "2vw",
              fontSize: "25px",
              color: "white",
              width: FAQType?.id === 9 ? "70px" : "60px",
            }}
          >
            {FAQType?.num}.
          </Box>
          <Box
            component="span"
            sx={{
              lineHeight: "40px",

              WebkitTextStrokeWidth: "1.1px",
              WebkitTextStrokeColor: "black",
              letterSpacing: "1px",
            }}
            className="font-visby"
          >
            {FAQType?.question}
          </Box>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography
          variant="subtitle1"
          sx={{
            padding: {
              xs: "0 1rem",
              lg: "0 5rem",
            },
          }}
          className="font-visby"
        >
          {FAQType?.summary}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default Faq;