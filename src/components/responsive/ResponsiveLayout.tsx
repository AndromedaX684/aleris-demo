import React, { useState, useMemo } from "react";
import { useMediaQuery } from "react-responsive";
import MobileLayout from "./MobileLayout";
import DesktopLayout from "./DesktopLayout";

const ResponsiveLayout: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"active" | "history" | "analytics">("active");

  const isMobile = useMediaQuery(
    { query: "(max-width: 768px)" },
    undefined,
    (matches) => matches
  );

  const layout = useMemo(() => {
    const isSSR = typeof window === "undefined";
    const showMobile = isSSR ? false : isMobile;

    return showMobile ? (
      <MobileLayout activeTab={activeTab} setActiveTab={setActiveTab} />
    ) : (
      <DesktopLayout />
    );
  }, [isMobile, activeTab]);

  return layout;
};

export default React.memo(ResponsiveLayout);
