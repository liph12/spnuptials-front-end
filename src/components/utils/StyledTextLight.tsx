import type { ReactNode } from "react";
import type { TypographyProps } from "@mui/material";
import { Typography } from "@mui/material";
import { useAppContext } from "../../providers/AppProvider";

export default function StyledTextLight({
  children,
  ...props
}: {
  children: ReactNode;
} & TypographyProps) {
  const { desktop } = useAppContext();

  return (
    <Typography
      variant="body1"
      component="div"
      sx={{
        color: "#f5fdff",
        fontFamily: "Red Hat Display",
        fontWeight: 500,
        fontOpticalSizing: "auto",
        fontStyle: "normal",
        letterSpacing: desktop ? "0.2rem" : "none",
        ...(props.sx || {}),
      }}
      {...props}
    >
      {children}
    </Typography>
  );
}
