import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// css
import "./styles/App.css";
import "./styles/normalize.css";

// sidebar provider
import SidebarProvider from "./contexts/SidebarContext";
// Context provider
import CartProvider from "./contexts/CartContext";
// Auth provider
import AuthContextProvider from "./contexts/AuthContext";
// userinfo provider
import UserInfoProvider from "./contexts/UserInfoContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserInfoProvider>
      <AuthContextProvider>
        <CartProvider>
          <SidebarProvider>
            <App />
          </SidebarProvider>
        </CartProvider>
      </AuthContextProvider>
    </UserInfoProvider>
  </React.StrictMode>
);
