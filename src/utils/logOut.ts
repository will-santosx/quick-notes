import Cookie from "js-cookie";

export const logOut = () => {
  Cookie.remove("jwt");
};
