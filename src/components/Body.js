import React from "react";
import Login from "./login";
import Browse from "./Browse";
import { auth } from "../utils/firebase.mjs";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
const Body = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        // ...
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
      }
    });
  }, []);
  return (
    <div>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </div>
  );
};

export default Body;
