import { Box } from "@mui/material";
import { type ReactNode } from "react";
import BackToTop from "../utils/BackToTop";
import { useEffect } from "react";

export default function Content({ children }: { children: ReactNode }) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <Box>
      {children}
      <BackToTop />
    </Box>
  );
}
