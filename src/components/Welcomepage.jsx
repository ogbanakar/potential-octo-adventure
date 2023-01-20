import React, { useState } from "react";
import "./navba.css";

const WelcomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} />
      <div className="welcome-content">
        <h1>Welcome!</h1>
        {isLoggedIn ? (
          <p>You are logged in</p>
        ) : (
          <LoginButton handleLogin={handleLogin} />
        )}
      </div>
    </div>
  );
};

const Navbar = ({ isLoggedIn }) => {
  return (
    <nav className="navbar">
      <button>Home</button>
      <button>About</button>
      <button>Contact</button>
      {isLoggedIn && <button>Profile</button>}
    </nav>
  );
};

const LoginButton = ({ handleLogin }) => {
  return (
    <div className="login">
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default WelcomePage;
