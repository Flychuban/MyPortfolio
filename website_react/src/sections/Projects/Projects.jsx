import React from 'react'
import styles from './Projects.module.css'
import ProjectCard from '../../common/ProjectCard'
import projectViberrImage from '../../assets/viberr.png'
import quadpixImage from '../../assets/quad_pix.png'
import diagnosifyLogo from '../../assets/diagnosifyLogo.png'
import suscamImage from '../../assets/suscam_logo.png'
import cableUndefinedImage from '../../assets/cableUndefinedLogo.png'
import weijrnImage from '../../assets/weijrnLogo.png'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard src={diagnosifyLogo} link="https://github.com/Flychuban/Diagnosify" textH3="Diagnosify" textP="Disease detection system"/>
            <ProjectCard src={cableUndefinedImage} link="https://tuesfest.bg/projects/112" textH3="Cable = Undefined" textP="Smart jumperless breadboard"/>
            <ProjectCard src={suscamImage} link="https://github.com/Flychuban/SusCam" textH3="SusCam" textP="Suspicious activity security system"/>
            <ProjectCard src={quadpixImage} link="https://github.com/Flychuban/QuadTreeImageCompression" textH3="QuadPix" textP="Quadtree image compression"/>
            <ProjectCard src={weijrnImage} link="https://2023.tuesfest.bg/projects/365" textH3="Weijrn" textP="NFC and RFID tag manager app"/>
        </div>
    </section>
  )
}

export default Projects