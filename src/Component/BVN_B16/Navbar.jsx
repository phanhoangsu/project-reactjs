import React from "react";
import { useAuth } from "./AuthaContext";

const Navbar = () => {
  const { user, login, logout } = useAuth();
  return (
    <div>
      <h1>My App</h1>
      <div>
        {user ? (
          <>
            <div>
              <span>Welcome, {user.name}!</span>
            </div>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <button onClick={() => login("Hello Phan Hoang Su")}>Login</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
