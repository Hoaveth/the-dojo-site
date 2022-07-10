import React, { useState } from "react";
import {
  EMPTY_FILE_ERR,
  FILE_SIZE_ERR,
  NOT_IMAGE_ERR,
} from "../../utils/errorMessages";

import "./Signup.css";
import { useSignup } from "../../hooks/useSignup";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(null);

  const { signup, isPending, error } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName, thumbnail);
  };

  const handleFileChange = (e) => {
    setThumbnail(null);

    let imageThumbnail = e.target.files[0];

    if (!imageThumbnail) {
      setThumbnailError(EMPTY_FILE_ERR);
      return;
    }
    if (!imageThumbnail.type.includes("image")) {
      setThumbnailError(NOT_IMAGE_ERR);
      return;
    }
    if (imageThumbnail.size > 100000) {
      setThumbnailError(FILE_SIZE_ERR);
      return;
    }

    setThumbnailError(null);
    setThumbnail(imageThumbnail);
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Welcome to The Dojo.</h2>
      <h4 className="header-label">Create your account by signing up.</h4>
      <label>
        <span>Email:</span>
        <input
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <label>
        <span>Display Name:</span>
        <input
          type="text"
          required
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>
      <label>
        <span>Avatar:</span>
        <input type="file" required onChange={handleFileChange} />
        {thumbnailError && <div className="error">{thumbnailError}</div>}
      </label>
      {!isPending && <button className="btn">Sign Up</button>}
      {isPending && <button className="btn">Signing up...</button>}
      {error && <div className="error">{error}</div>}
    </form>
  );
}
