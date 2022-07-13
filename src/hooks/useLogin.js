import { useEffect, useState } from "react";
import { projectAuth, projectFirestore } from "../config/firebaseConfig";
import { LOGIN_ACTION, LOGIN_ERROR } from "../utils/constants";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [isCancelled, setIsCancelled] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setError(null);
    setIsPending(true);

    try {
      //login the user
      const response = await projectAuth.signInWithEmailAndPassword(
        email,
        password
      );

      //set online status
      await projectFirestore.collection("users").doc(response.user.uid).update({
        online: true,
      });

      //dispatch the login action
      if (response.user) {
        dispatch({ type: LOGIN_ACTION, payload: response.user });
      } else {
        throw Error(LOGIN_ERROR);
      }
      console.log(!isCancelled);
      //update state
      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        setError(LOGIN_ERROR);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);
  return { login, error, isPending };
};
