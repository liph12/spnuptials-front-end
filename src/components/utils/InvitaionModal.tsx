import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useAppContext } from "../../providers/AppProvider";
import StyledText from "./StyledText";
import StyledTextCursiveMd from "./StyledTextCursiveSm";
import StyledLineSeparator from "./StyledLineSeparator";
import { blue } from "@mui/material/colors";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const invitations = [
  {
    id: "inv-001",
    name: "Libres & Family",
  },
  {
    id: "inv-002",
    name: "Castro & Family",
  },
  {
    id: "inv-003",
    name: "Cpt. Alberto R. Vergara & Mrs. Lilibeth F. Vergara",
  },
  {
    id: "inv-004",
    name: "Sir Anthony Leuterio & Family",
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
          <StyledText variant="h6" component="h2">
            Request the pleasure of your company at our wedding celebration.
          </StyledText>
          <StyledLineSeparator width={desktop ? 200 : 150} color={blue[900]} />
          <StyledTextCursiveMd textAlign="center">
            {invitationValue?.name ?? "You are Invited"}
          </StyledTextCursiveMd>
          <Box sx={{ textAlign: "center", mt: 5 }}>
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
