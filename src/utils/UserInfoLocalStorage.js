export const setUserIdInLs = (userId) => {
  localStorage.setItem("userId", userId);
};

export const getUserIdFromLs = () => {
  return localStorage.getItem("userId");
};
