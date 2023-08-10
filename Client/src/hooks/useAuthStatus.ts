import { useEffect, useState } from "react";
import { useAppSelector } from "./useRedux";

export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [loading, setloading] = useState<boolean>(true);
  const { user } = useAppSelector((state) => state.auth);
  useEffect(() => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
    setloading(false);
  }, [user]);
  return { loggedIn, loading };
};
