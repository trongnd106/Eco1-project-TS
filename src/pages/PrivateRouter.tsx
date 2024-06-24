import React from "react";
import { Navigate } from "react-router-dom";
type Props = {
  user: boolean;
  children: React.ReactNode;
};
const PrivateRouter = ({ user, children }: Props) => {
  return user ? <>{children}</> : Navigate({ to: "/sign-in" });
};

export default PrivateRouter;
