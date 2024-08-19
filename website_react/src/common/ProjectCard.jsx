import React from 'react'

function ProjectCard({src, link, textH3, textP}) {
  return (
    <a href={link} target='_blank'>
        <img className='hover' src={src} alt={`${textH3} Logo`} />
        <h3>{textH3}</h3>
        <p>{textP}</p>
    </a>
  )
}

export default ProjectCard