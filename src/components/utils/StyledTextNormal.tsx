import type { ReactNode } from "react";
import type { TypographyProps } from "@mui/material";
import { Typography } from "@mui/material";
import { useAppContext } from "../../providers/AppProvider";

export default function StyledTextNormal({
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
        fontFamily: "Red Hat Display",
        fontWeight: 500,
        fontOpticalSizing: "auto",
        fontStyle: "normal",
        letterSpacing: desktop ? "0.1rem" : "none",
        ...(props.sx || {}),
      }}
      {...props}
    >
      {children}
    </Typography>
  );
}
