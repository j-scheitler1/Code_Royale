import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import About from "./pages/About"; 
import Register from "./pages/Register"; 
import Dashboard from "./pages/Dashboard";
// import ProblemPage from "./pages/problem/ProblemPage";
import Loading from "./pages/Loading";
import Game from "./pages/Game";
import Outcome from "./pages/Outcome";
import Profile from "./pages/Profile";
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
        
        {/* If no outcome -> redirect to home */}
        <Route path="/outcome" element={<Outcome />} />
        
        <Route path='/game/:matchId' element={
          <RequireAuth>
            <Game />
          </RequireAuth>
          } 
        />
        
        <Route path='/profile' element={
          <RequireAuth>
            <Profile/>
          </RequireAuth>
          } 
        />
      </Routes>
    </>
  );
};

export default App;
