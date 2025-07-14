import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Pricing from './Pricing';

// Simulate minimal routing without react-router
const getCurrentRoute = () => {
  if (window.location.hash === "#/pricing") return "pricing";
  return "home";
};

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');
  const [route, setRoute] = useState(getCurrentRoute());

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // Routing: listen to hash change
  useEffect(() => {
    const onHashChange = () => setRoute(getCurrentRoute());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // Minimal navigation bar for modern, light-themed look
  function Navigation() {
    return (
      <nav
        style={{
          width: "100%",
          padding: "0.7rem 3vw 0.7rem 3vw",
          background: "#fff",
          boxShadow: "0 3px 15px rgba(0,0,0,0.06)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "sticky",
          top: 0,
          zIndex: 9,
          borderBottom: "1.5px solid #F3F3F3",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <img src={logo} alt="logo" style={{ width: 40, marginRight: 12 }} />
          <span style={{
            fontWeight: 700,
            fontSize: "1.38rem",
            color: "#4CAF50",
            letterSpacing: "0.4px"
          }}>Foodie Dash</span>
        </div>
        <div style={{ display: "flex", gap: "28px", alignItems: "center" }}>
          <a
            href="#/"
            style={{
              color: route === "home" ? "#4CAF50" : "#333",
              fontWeight: route === "home" ? 700 : 500,
              textDecoration: "none",
              fontSize: "1.08rem",
              letterSpacing: 0.2,
              borderBottom: route === "home" ? "2.5px solid #4CAF50" : "2.5px solid transparent",
              paddingBottom: "3px",
              transition: "color 0.2s"
            }}
            aria-current={route === "home" ? "page" : undefined}
          >
            Home
          </a>
          <a
            href="#/pricing"
            style={{
              color: route === "pricing" ? "#FF5722" : "#333",
              fontWeight: route === "pricing" ? 700 : 500,
              textDecoration: "none",
              fontSize: "1.08rem",
              letterSpacing: 0.2,
              borderBottom: route === "pricing" ? "2.5px solid #FF5722" : "2.5px solid transparent",
              paddingBottom: "3px",
              transition: "color 0.2s"
            }}
            aria-current={route === "pricing" ? "page" : undefined}
          >
            Pricing
          </a>
        </div>
        <button 
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </nav>
    );
  }

  // Home/Landing section
  function HomeSection() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{ fontSize: "2.6rem", fontWeight: 800, margin: "12px 0 8px", color: "#4CAF50" }}>
          Welcome to Foodie Dash!
        </h1>
        <p style={{ color: "#444", fontSize: "1.15rem" }}>
          Browse restaurants, order your favorite meals, and track deliveries seamlessly.
        </p>
        <p>
          Current theme: <strong>{theme}</strong>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    );
  }

  return (
    <div className="App">
      <Navigation />
      {route === "pricing" ? <Pricing /> : <HomeSection />}
    </div>
  );
}

export default App;
