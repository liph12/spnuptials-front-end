import type { ReactNode } from "react";
import type { TypographyProps } from "@mui/material";
import { Typography } from "@mui/material";

export default function StyledText({
  children,
  ...props
}: {
  children: ReactNode;
} & TypographyProps) {
  return (
    <Typography
      variant="body1"
      component="div"
      sx={{
        color: "#000",
        fontFamily: "Red Hat Display",
        fontWeight: 500,
        fontOpticalSizing: "auto",
        fontStyle: "normal",
        letterSpacing: "0.2rem",
        ...(props.sx || {}),
      }}
      {...props}
    >
      {children}
    </Typography>
  );
}
