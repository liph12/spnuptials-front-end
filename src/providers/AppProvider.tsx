import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

type AppContextType = {
  isSectionVisible: boolean;
  sectionRef: React.RefObject<HTMLDivElement | null>;
  desktop: boolean;
};

const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up("lg"));
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  const checkVisibility = () => {
    if (!sectionRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();

    const visible = rect.top <= 0;

    setIsSectionVisible(visible);
  };

  useEffect(() => {
    checkVisibility();
    window.addEventListener("scroll", checkVisibility);
    window.addEventListener("resize", checkVisibility);

    return () => {
      window.removeEventListener("scroll", checkVisibility);
      window.removeEventListener("resize", checkVisibility);
    };
  }, []);

  return (
    <AppContext.Provider value={{ isSectionVisible, sectionRef, desktop }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useAppContext must be used inside AppProvider");
  return ctx;
};
