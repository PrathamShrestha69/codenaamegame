import React, { useEffect } from "react";
import { getUserIdFromLs } from "../src/utils/UserInfoLocalStorage";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
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

  useEffect(() => {
    if (userInfoInLs) {
      async function fetchAndSetUser() {
        const userInfoFromDb = await getUserInfo(userInfoInLs);
        console.log(userInfoFromDb);
        if (userInfoFromDb && userInfoFromDb.displayName) {
          dispatch(changeDisplayName(userInfoFromDb.displayName));
        } else {
          navigator("/");
        }
      }
      fetchAndSetUser();
    }
  }, [userInfoInLs]);

  return <>{children}</>;
}

export default AuthLayout;
