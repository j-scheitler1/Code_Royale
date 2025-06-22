import { Navigate } from "react-router-dom";
import { useAuth } from "./index";
import type { JSX } from "react/jsx-runtime";

export const RedirectIfAuth = ({ children }: { children: JSX.Element }) => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;
  if (user) return <Navigate to="/dashboard" replace />;

  return children;
};