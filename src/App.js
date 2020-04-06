import React, { useState, useEffect } from "react";

import Header from "./components/Header";

import "./App.css";

import api from "./services/api";

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("projects").then((response) => setProjects(response.data));
  }, []);

  async function handleAddProject() {
    const response = await api.post("projects", {
      title: `Novo projeto: ${Date.now()}`,
      owner: "Alisson Santos",
    });
    setProjects([...projects, response.data]);
  }

  return (
    <Header title="PROJECTS">
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>

      <button onClick={handleAddProject}>ADD PROJECT</button>
    </Header>
  );
}
