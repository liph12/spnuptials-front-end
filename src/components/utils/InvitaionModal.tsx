import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { useAppContext } from "../../providers/AppProvider";
import StyledText from "./StyledText";
import StyledLineSeparator from "./StyledLineSeparator";
import { blue } from "@mui/material/colors";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const invitations = [
  {
    id: "inv-001",
    nameA: "Libres Family",
    nameB: "",
    combined: false,
  },
  {
    id: "inv-002",
    nameA: "Castro Family",
    nameB: "",
    combined: false,
  },
  {
    id: "inv-003",
    nameA: "Mr. and Mrs. Alberto Vergara ",
    nameB: "",
    combined: false,
  },
  {
    id: "inv-004",
    nameA: "Sir Anthony Leuterio",
    nameB: "Family",
    combined: true,
  },
  {
    id: "inv-115",
    nameA: "Sir Anthony Leuterio",
    nameB: "Family",
    combined: true,
  },
  {
    id: "inv-116",
    nameA: "Sir Anthony Leuterio",
    nameB: "Family",
    combined: true,
  },
];

export default function InvitationModal() {
  const [searchParams] = useSearchParams();
  const invId = searchParams.get("id");
  const invitationValue = invitations.find((v) => v.id === invId);
  const { desktop } = useAppContext();
  const [open, setOpen] = React.useState(true);
  const isOpened = (localStorage.getItem("opened") || "no") === "yes";

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem("opened", "yes");
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: desktop ? 400 : "75%",
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: 3,
    p: 4,
  };

  useEffect(() => {
    setOpen(!isOpened);
  }, []);

  return (
    <div>
      <Modal open={open}>
        <Box sx={style}>
          <StyledText variant="body1" component="h2" textAlign="center">
            You are invited to share the moment we become one.
          </StyledText>
          <StyledLineSeparator width={desktop ? 200 : 150} color={blue[900]} />
          {invitationValue?.nameA && (
            <>
              {invitationValue.combined ? (
                <>
                  <Typography
                    variant={desktop ? "h3" : "h4"}
                    textAlign="center"
                    sx={{ fontFamily: "Kapakana", lineHeight: 0.8 }}
                  >
                    {invitationValue.nameA}
                  </Typography>
                  <Typography
                    variant={desktop ? "h3" : "h4"}
                    textAlign="center"
                    sx={{ fontFamily: "Kapakana", lineHeight: 0.8 }}
                  >
                    &
                  </Typography>
                  <Typography
                    variant={desktop ? "h3" : "h4"}
                    textAlign="center"
                    sx={{ fontFamily: "Kapakana", lineHeight: 0.8 }}
                  >
                    {invitationValue.nameB}
                  </Typography>
                </>
              ) : (
                <>
                  <Typography
                    variant={desktop ? "h3" : "h4"}
                    textAlign="center"
                    sx={{ fontFamily: "Kapakana", lineHeight: 0.8 }}
                  >
                    {invitationValue.nameA}
                  </Typography>
                </>
              )}
            </>
          )}
          <Box sx={{ textAlign: "center", mt: 3 }}>
            <Button
              disableElevation
              variant="contained"
              size="medium"
              startIcon={<ArrowOutwardIcon />}
              onClick={handleClose}
              sx={{
                borderRadius: 0,
                fontFamily: "Red Hat Display",
                letterSpacing: "0.2rem",
              }}
            >
              Open Invitation
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
