import { jwtDecode } from "jwt-decode";

export interface IUser {
  email?: string;
  exp?: number;
  iat?: number;
  role: "admin" | "customer" | undefined;
}

// export const verifyToken = (token: string): IUser => {
//   return jwtDecode<IUser>(token);
// };

export const verifyToken = (token: string | null | undefined): IUser | null => {
    if (!token || typeof token !== "string") {
      console.error("Invalid token received:", token);
      return null;
    }
    try {
      return jwtDecode<IUser>(token);
    } catch (error) {
      console.error("Token decoding failed:", error);
      return null;
    }
  };