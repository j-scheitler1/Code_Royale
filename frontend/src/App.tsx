import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import About from "./pages/About"; 
import Register from "./pages/Register"; 
import Dashboard from "./pages/Dashboard";
// import ProblemPage from "./pages/problem/ProblemPage";
import TestProblemPage from "./pages/problem/TestProblemPage";
import Loading from "./pages/Loading";
import Game from "./pages/Game";
import { useAuth } from "./pages/auth";
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
        {/* ADD AUTH BACK WHEN DONE WITH BRANCH */}
        <Route path="/testProblem" element={<TestProblemPage />} />
        <Route path='/game/:matchId' element={<Game />} />
      </Routes>
    </>
  );
};

export default App;
