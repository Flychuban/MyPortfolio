import styles from './Hero.module.css'
import heroImg from '../../assets/hero-img.png'
import themeIcon from '../../assets/sun.svg'
import instagramIconLight from '../../assets/instagram-icon-light.svg'
import githubIconLight from '../../assets/github-light.svg'
import linkedinIconLight from '../../assets/linkedin-light.svg'
import CV from '../../assets/cv.pdf'

function Hero() {
  return (
    <section id='hero' className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={heroImg} alt="Kaloyan Anastasov's profiles picture" />
            <img className={styles.colorMode} src={themeIcon} alt="Color switch icon" />
        </div>
        <div className={styles.info}>
            <h1>Kaloyan
                <br />
                Anastasov
            </h1>
            <h2>Machine Learning Developer</h2>
            <span>
                <a href="https://www.instagram.com/flychuban/" target='_blank'>
                    <img src={instagramIconLight} alt="Instagram icon" />
                </a>
                <a href="https://github.com/Flychuban" target='_blank'>
                    <img src={githubIconLight} alt="Github icon" />
                </a>
                <a href="https://www.linkedin.com/in/kaloyan-anastasov/" target='_blank'>
                    <img src={linkedinIconLight} alt="LinkedIn icon" />
                </a>
            </span>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem perspiciatis, repudiandae distinctio fugiat sunt quam? Quos nisi incidunt quasi magnam distinctio enim illo natus nihil cumque illum nam, atque unde.</p>
            <a href={CV} download>
                <button className='hover'>Resume</button>
            </a>
        </div>
    </section>
  )
}

export default Hero