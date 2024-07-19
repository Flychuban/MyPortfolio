import React from 'react'
import styles from './Projects.module.css'
import ProjectCard from '../../common/ProjectCard'
import projectViberrImage from '../../assets/viberr.png'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard src={projectViberrImage} link="https://github.com/Flychuban/Diagnosify" textH3="Viberr" textP="Streaming app"/>
            <ProjectCard src={projectViberrImage} link="https://github.com/Flychuban/Diagnosify" textH3="Viberr" textP="Streaming app"/>
            <ProjectCard src={projectViberrImage} link="https://github.com/Flychuban/Diagnosify" textH3="Viberr" textP="Streaming app"/>
            <ProjectCard src={projectViberrImage} link="https://github.com/Flychuban/Diagnosify" textH3="Viberr" textP="Streaming app"/>
        </div>
    </section>
  )
}

export default Projects