import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import StyledTextNormal from "./StyledTextNormal";
import { Box } from "@mui/material";

export default function FaqsAccordion() {
  return (
    <Box>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <StyledTextNormal component="span">
            Can I bring my kids with me?
          </StyledTextNormal>
        </AccordionSummary>
        <AccordionDetails>
          <StyledTextNormal>
            Although we adore your children, due to budget constraints we ask
            that only adults attend unless we've personally confirmed otherwise.
          </StyledTextNormal>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <StyledTextNormal component="span">
            Am I allowed to bring a plus one?
          </StyledTextNormal>
        </AccordionSummary>
        <AccordionDetails>
          <StyledTextNormal>
            Unfortunately, due to budget and space limitations, we simply can't
            afford for all of our lovely guests to bring a guest of their own.
            Therefore, we regretfully our guests to please not bring a plus one.
          </StyledTextNormal>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <StyledTextNormal component="span">
            Will there be transportation provide to the wedding venue?
          </StyledTextNormal>
        </AccordionSummary>
        <AccordionDetails>
          <StyledTextNormal>
            While we won't be providing transportation from your home /
            accomodation, ceremony, and reception, we're happy to assist in
            arranging rideshares for your convenience. Thank you for
            understanding!
          </StyledTextNormal>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <StyledTextNormal component="span">
            What time does the ceremony start?
          </StyledTextNormal>
        </AccordionSummary>
        <AccordionDetails>
          <StyledTextNormal>
            The ceremony will begin promptly at 2:00 PM. We kindly ask guests to
            arrive at least 30 minutes prior for seating.
          </StyledTextNormal>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <StyledTextNormal component="span">
            What happens after the ceremony?
          </StyledTextNormal>
        </AccordionSummary>
        <AccordionDetails>
          <StyledTextNormal>
            After the ceremony, we will be taking pictures nearby for around an
            hour. Guests can head straight to the reception venue, where we will
            be serving finger foods and beverages.
          </StyledTextNormal>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <StyledTextNormal component="span">
            Can we sit anywhere at the Reception?
          </StyledTextNormal>
        </AccordionSummary>
        <AccordionDetails>
          <StyledTextNormal>
            Certainly! You're welcome to sit wherever you feel comfortable, but
            we reserved seats for our sponsors, family & close friends.
          </StyledTextNormal>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
