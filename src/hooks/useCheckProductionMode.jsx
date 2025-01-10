import { useEffect } from "react";

const useCheckProductionMode = () => {
  useEffect(() => {
    const isProduction = import.meta.env.VITE_NODE_ENV === "production";

    if (!isProduction) {
      console.error("This application can only run in production mode.");
      // If not in production, you can stop further execution or redirect.
      process.exit(1); // Terminate the application immediately
    }
  }, []);
};

export default useCheckProductionMode;
