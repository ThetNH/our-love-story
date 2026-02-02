import { useState } from "react";
import PasswordPage from "@/components/PasswordPage";
import AnniversaryWebsite from "@/components/AnniversaryWebsite";

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // No persistence - always show password page on refresh

  const handlePasswordSuccess = () => {
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <PasswordPage onSuccess={handlePasswordSuccess} />;
  }

  return <AnniversaryWebsite />;
};

export default Index;
