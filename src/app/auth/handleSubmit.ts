import { axiosFetch } from "@/utils/axiosService";
import Cookie from "js-cookie";

export async function Login(email: string, password: string) {
  try {
    const req = await axiosFetch.post("api/auth/login", {
      email: email,
      password: password,
    });
    const token = (await req.data.token) as string;
    Cookie.set("jwt", token, { path: "/" });
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}
