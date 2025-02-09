import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  // eslint-disable-next-line no-unused-vars
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
  Navigate,
} from "react-router-dom";
import "./App.css";
import PlayerForm from "./components/PlayerForm";
import PlayerDetail from "./components/PlayerDetail";
import RegisterForm from "./components/RegisterForm";

function App() {
  const [players, setPlayers] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:5500/players", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        setPlayers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPlayers();
  }, []);

  const logout = async (e) => {
    e.preventDefault();

    try {
      localStorage.removeItem("token");
      setIsLoggedIn(false);
    } catch (error) {
      console.error(error);
    }
  };

  const location = useLocation();

  if (!isLoggedIn && location.pathname !== "/register") {
    return <Navigate to="/register" />;
  }

  return (
    <div>
      {location.pathname === "/" && (
        <>
          <div className="logout-wrapper">
            <div class="headers-generic">
              <h1>DnD Character Manager</h1>
            </div>
            <div className="logout-button">
              <button className="cButton" onClick={logout}>
                Logout
              </button>
            </div>
          </div>

          <PlayerForm />
          <div class="headers-generic">
            <h1>Players</h1>
          </div>
          <div className="player-buttons">
            <ul className="horizontal-ul" style={{ listStyle: "none" }}>
              {players.map((player) => (
                <li key={player._id}>
                  <Link
                    className="non-standard-links cButton"
                    to={`/players/${player._id}`}
                  >
                    {player.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
      <Routes>
        <Route path="/players/:id" element={<PlayerDetail />} />
        <Route
          path="/register"
          element={<RegisterForm setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/login"
          element={<RegisterForm setIsLoggedIn={setIsLoggedIn} />}
        />
      </Routes>
    </div>
  );
}

export default App;
