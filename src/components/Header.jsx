import React from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase.jsx";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, supported_languages } from "../utils/constants";
import { toggleGptSearch } from "../utils/GptSlice.jsx";
import { changeLanguage } from "../utils/configSlice.jsx";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        // ...
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
    //Unsubscribe when the component is unmount
    return () => unsubscribe();
  }, []);

  const handleGptSearch = () => {
    //Toggle GPT Search button
    dispatch(toggleGptSearch());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  return (
    <div className="absolute px-8 py-2  bg-gradient-to-b from-black to-transparent w-full  z-10 flex justify-between items-center bg-opacity-40">
      <img className="w-40" src={LOGO} alt="logo" />
      {user && (
        <div className="flex items-center px-2">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-600 text-white rounded-lg bg-opacity-60"
              onChange={handleLanguageChange}
            >
              {supported_languages.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="cursor-pointer inline-flex items-center rounded-full px-7 py-2 text-xl font-mono font-semibold text-rose-600 hover:text-white border-2 border-rose-600
hover:bg-rose-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-75  duration-300  focus:bg-transparent"
            onClick={handleGptSearch}
          >
            {showGptSearch ? "Home" : "Search"}
          </button>

          <img
            className="w-10 h-10 mx-1"
            src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
            alt="usericon"
          />
          <button className="font-bold text-white" onClick={handleSignOut}>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
