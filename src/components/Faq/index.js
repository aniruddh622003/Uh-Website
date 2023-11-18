"use client";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { faq } from "@/resources/faq";
import { Box } from "@mui/material";

export default function Faq() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="body1" color="secondary.main">
          FAQs
        </Typography>
        <Typography variant="h4" color="primary.main">
          Have Some Questions?
        </Typography>
      </Box>
      {faq.map((ele, idx) => (
        <Accordion
          expanded={expanded === `panel${idx + 1}`}
          onChange={handleChange(`panel${idx + 1}`)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            sx={{ bgcolor: "primary.light" }}
          >
            <Typography variant="body1">{ele.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">{ele.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
