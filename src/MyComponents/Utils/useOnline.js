import { useState, useEffect } from "react";

const useOnline = () => {
  const [isOnline, setOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => {
      setOnline(true);
    };
    const handleOffline = () => {
      setOnline(false);
    };
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      console.log("eventListenterremoved");
    };
  }, []);

  return isOnline;
};

export default useOnline;
