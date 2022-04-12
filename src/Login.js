import React, { useState } from "react";
// import useFetch from "./useFetch";
import "./Login.css";
import axios from "axios";

export default function TaskEdit() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/v1/login", {
        username: username,
        password: password,
      });
      alert(response.data.msg);
      localStorage.setItem("token", response.data.token);
    } catch (error) {}
  };

  const getData = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("/api/v1/dashboard", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert(response.data.msg);
    } catch (error) {}
  };

  return (
    <div id="app-container">
      <form id="login-register-area" className="card" onSubmit={login}>
        <h2 id="title">Login/Register</h2>
        <div className="form-row">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-input"
            id="username"
            onInput={(e) => {
              setUsername(e.target.value);
            }}
            value={username}
          />
        </div>
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            Name
          </label>
          <input
            type="password"
            className="form-input"
            id="password"
            onInput={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
        </div>
        <div className="d-grid">
          <button
            type="submit"
            className="btn login-btn"
            style={{ backgroundColor: "purple", color: "white" }}
          >
            Login
          </button>
        </div>
      </form>
      <div id="dashboard-container">
        <h1 className="text-center">Dashboard</h1>
        <div className="text-center" id="response-area">
          <p id="response-text"></p>
        </div>
        <div className="d-grid">
          <button
            type="button"
            className="btn"
            id="get-data-btn"
            style={{ backgroundColor: "purple", color: "white" }}
            onClick={getData}
          >
            Get Data
          </button>
        </div>
      </div>
    </div>
  );
}
