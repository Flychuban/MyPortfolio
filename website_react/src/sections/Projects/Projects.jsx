import React from 'react'
import styles from './Projects.module.css'
import projectViberrImage from '../../assets/viberr.png'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            <a href="https://github.com/Flychuban/Diagnosify" target='_blank'>
                <img className='hover' src={projectViberrImage} alt="Viber Logo" />
                <h3>Viberr</h3>
                <p>Streaming app</p>
            </a>
        </div>
    </section>
  )
}

export default Projects