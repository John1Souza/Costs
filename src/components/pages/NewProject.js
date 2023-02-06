import React from 'react'
import ProjectForm from '../Project/ProjectForm'
import styles from './NewProject.module.css'
import { useNavigate } from "react-router-dom";

export default function NewProject() {

  const navigate = useNavigate()

  function createPost(project) {
    // Initialize cost and services
    project.cost = 0
    project.services = []  

    fetch("http://localhost:5000/projects", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    }).then(
      ((resp) => resp.json())
    ).then(
      (data) => {
      console.log(data)
      // Redirect
      navigate('/projects', { message: 'Projeto criado com sucesso!' })
    })
    .catch((err) => console.log(err))
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Make Project</h1>
      <p>Make your project to add at your services</p>
      <ProjectForm handleSubmit={createPost} btnText="Create a Project"/>
    </div>
  )
}
