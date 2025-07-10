import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { socket } from "../utils/socket";
import { useState, useEffect } from "react"; 

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
      alert(`Match found! Match ID: ${match.id}`);
    });

  }

  return (
    <div className="relative bg-brand min-h-screen">
      <button
        onClick={handleLogout}
        className="absolute top-4 right-4 px-2 bg-gray-500 text-brand rounded hover:bg-gray-600 transition"
      >
        Logout
      </button>

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
