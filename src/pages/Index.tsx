import { useState, useEffect } from "react";
import PasswordPage from "@/components/PasswordPage";
import AnniversaryWebsite from "@/components/AnniversaryWebsite";

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if already authenticated (optional persistence)
  useEffect(() => {
    const auth = sessionStorage.getItem("anniversary-auth");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handlePasswordSuccess = () => {
    sessionStorage.setItem("anniversary-auth", "true");
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <PasswordPage onSuccess={handlePasswordSuccess} />;
  }

  return <AnniversaryWebsite />;
};

export default Index;
