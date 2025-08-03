import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { socket } from "../utils/socket";
import { useState, useEffect } from "react"; 
import { Link } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const user = auth.currentUser;
  const [showMatchButton, setShowMatchButton] = useState(false);

  useEffect(() => {
    setShowMatchButton(true);
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  const handleJumpToMatch = () => {
    if(!user) {
      console.log("No user logged in");
      return;
    }

    setShowMatchButton(false);
    console.log("Jumping into match...");
    const userData = {
      uid: user.uid,
      username: user.email || "Anonymous",
    }

    console.log("User Data:", userData);
    socket.emit("join_queue", {
      uid: userData.uid,
      username: userData.username,
    });

    socket.on("match_found", (match) => {
      console.log("Match found:", match);

      navigate(`/game/${match.matchId}`, {
        state: {
          matchId: match.matchId,
          player1: match.player1,
          player2: match.player2,
          problem: match.problem,
          timer: match.timer,
        }
      });

    });

  }

  return (
    <div className="relative bg-brand min-h-screen">
      <div className="flex items-center">
        <Link to="/" className="text-brand px-4 py-4">
          {'{ Home }'}
        </Link>
        <Link to="/" onClick={handleLogout} className="text-brand py-4">
          {`{ Logout }`}
        </Link>
        <Link to="/profile" className="text-brand px-4 py-4">
          {`{ Profile }`}
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen text-brand">
        <div className="text-xlg font-bold">
          {user ? `Welcome, ${user.email}` : "No user logged in"}
        </div>
        {showMatchButton && (
          <div>
            <button onClick={handleJumpToMatch}>
              {'{ Jump into a match }'}
            </button>
          </div>
        )}
        {!showMatchButton && (
          <div className="text-brand-secondary">
            Finding a Match...
          </div> 
        )}
      </div>
    </div>
  );
}

export default Dashboard;
