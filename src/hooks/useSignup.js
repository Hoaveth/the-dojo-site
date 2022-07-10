import { useState } from "react";
import { projectAuth, projectStorage } from "../config/firebaseConfig";
import { LOGIN_ACTION, SIGN_UP_ERROR } from "../utils/constants";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, displayName, thumbnail) => {
    setError(null);
    setIsPending(true);

    try {
      //signup the user
      const response = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );

      if (!response) {
        throw new Error(SIGN_UP_ERROR);
      }

      //upload user thumbnail
      const uploadPath = `thumbnails/${response.user.uid}/${thumbnail.name}`;
      const image = await projectStorage.ref(uploadPath).put(thumbnail);
      const imageURL = await image.ref.getDownloadURL();

      //add display name to the user
      await response.user.updateProfile({ displayName, photoURL: imageURL });

      //dispatch login action
      dispatch({ type: LOGIN_ACTION, payload: response.user });

      setError(null);
      setIsPending(false);
    } catch (err) {
      setError(err.message);
      setIsPending(false);
    }
  };
  return { error, isPending, signup };
};
