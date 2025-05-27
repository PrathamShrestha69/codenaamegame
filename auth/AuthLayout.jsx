import React, { useEffect } from "react";
import { getUserIdFromLs } from "../src/utils/UserInfoLocalStorage";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { changeDisplayName } from "../src/store/userDataSlice";
import axios from "axios";

const getUserInfo = async (userUniqueID) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/users/getuserinfo/${userUniqueID}`
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

function AuthLayout({ children }) {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const userInfoInLs = getUserIdFromLs();
  const locate = useLocation();

  useEffect(() => {
    if (userInfoInLs) {
      async function fetchAndSetUser() {
        const userInfoFromDb = await getUserInfo(userInfoInLs);
        if (
          userInfoFromDb &&
          userInfoFromDb.displayName &&
          userInfoFromDb != ""
        ) {
          dispatch(changeDisplayName(userInfoFromDb.displayName));
          console.log(locate.pathname);

          //If in home and username and team and role is registered in db and ls
          if (
            locate.pathname === "/" &&
            userInfoFromDb.userTeam &&
            userInfoFromDb.userRole
          ) {
            navigator("/main-game");
          } else if (locate.pathname === "/") {
            navigator("/choose-team");
          }
        } else {
          navigator("/");
        }
      }
      fetchAndSetUser();
    } else {
      navigator("/");
    }
  }, [userInfoInLs]);

  return <>{children}</>;
}

export default AuthLayout;
