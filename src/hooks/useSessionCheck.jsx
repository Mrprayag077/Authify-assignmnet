import { useEffect } from "react";

function useSessionCheck() {
  useEffect(() => {
    function handleStorageChange() {
      const authToken = localStorage.getItem("authToken");
      if (!authToken) {
        window.location.reload();
      }
    }

    window.addEventListener("storage", handleStorageChange);

    handleStorageChange();

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);
}

export default useSessionCheck;
