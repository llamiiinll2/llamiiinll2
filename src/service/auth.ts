import api from "./api";

interface RegisterParams {
  username: any;
  password: any;
  name: any;
  family: any;
}

export const register = async (data: RegisterParams) => {
  return await api.post("api/auth/signup", data);
};

interface LoginParams {
  username: any;
  password: any;
}
export const login = async (data: LoginParams) => {
  return await api.post("api/Auth/Login", data);
};
