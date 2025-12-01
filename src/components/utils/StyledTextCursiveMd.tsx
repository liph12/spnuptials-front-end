import type { ReactNode } from "react";
import type { TypographyProps } from "@mui/material";
import { Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

export default function StyledTextCursiveMd({
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
        color: blue[900],
        fontFamily: "Kapakana",
        fontSize: 60,
        fontWeight: 500,
        lineHeight: 0.8,
        fontOpticalSizing: "auto",
        fontStyle: "normal",
        ...(props.sx || {}),
      }}
      {...props}
    >
      {children}
    </Typography>
  );
}
