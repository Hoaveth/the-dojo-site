import { useEffect, useState } from "react";
import { projectAuth, projectFirestore } from "../config/firebaseConfig";
import { LOGOUT_ACTION } from "../utils/constants";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [isCancelled, setIsCancelled] = useState(false);
  const { dispatch, user } = useAuthContext();

  const logout = async () => {
    setError(null);
    setIsPending(true);

    try {
      //change the online status
      const { uid } = user;

      await projectFirestore.collection("users").doc(uid).update({
        online: false,
      });

      //sign out the user
      const response = await projectAuth.signOut();

      //dispatch
      dispatch({ type: LOGOUT_ACTION });
      //update state
      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        setError(err);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);
  return { logout, error, isPending };
};
