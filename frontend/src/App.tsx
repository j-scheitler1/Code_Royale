import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import About from "./pages/About"; 
import Register from "./pages/Register"; 
import Dashboard from "./pages/Dashboard";
import WorkSpace from "./pages/WorkSpacePage";
import ProblemPage from "./pages/problem/ProblemPage";
import { useAuth } from "./pages/auth";
import Loading from "./pages/Loading";
import { RequireAuth } from "./pages/auth/RequireAuth";

const App = () => {
  const { loading } = useAuth();

  if (loading) return <Loading></Loading>;

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
        <Route path="/workspace" element={<WorkSpace />} /> 
        {/* ADD AUTH BACK WHEN DONE WITH BRANCH */}
        <Route path="/problem/:pid" element={<ProblemPage />} />
      </Routes>
    </>
  );
};

export default App;
