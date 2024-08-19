import styles from './HeroStyles.module.css'
import heroImg from '../../assets/heroImg.png'
import sunIcon from '../../assets/sun.svg'
import moonIcon from '../../assets/moon.svg'
import instagramIconLight from '../../assets/instagram-icon-light.svg'
import instagramIconDark from '../../assets/instagram-icon-dark.svg'
import githubIconLight from '../../assets/github-light.svg'
import githubIconDark from '../../assets/github-dark.svg'
import linkedinIconLight from '../../assets/linkedin-light.svg'
import linkedinIconDark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext'


function Hero() {

    const { theme, toggleTheme } = useTheme()
    const themeIcon = theme === 'light' ? sunIcon : moonIcon
    const instagramIcon = theme === 'light' ? instagramIconLight : instagramIconDark
    const githubIcon = theme === 'light' ? githubIconLight : githubIconDark
    const linkedinIcon = theme === 'light' ? linkedinIconLight : linkedinIconDark


    return (
    <section id='hero' className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={heroImg} alt="Kaloyan Anastasov's profiles picture" />
            <img className={styles.colorMode} src={themeIcon} alt="Color switch icon" onClick={toggleTheme}/>
        </div>
        <div className={styles.info}>
            <h1>Kaloyan
                <br />
                Anastasov
            </h1>
            <h2>Machine Learning Developer</h2>
            <span>
                <a href="https://www.instagram.com/kaloyan_anastasov07/" target='_blank'>
                    <img src={instagramIcon} alt="Instagram icon" />
                </a>
                <a href="https://github.com/Flychuban" target='_blank'>
                    <img src={githubIcon} alt="Github icon" />
                </a>
                <a href="https://www.linkedin.com/in/kaloyan-anastasov/" target='_blank'>
                    <img src={linkedinIcon} alt="LinkedIn icon" />
                </a>
            </span>
            <p className={styles.description}>Hey! I’m Kaloyan Anastasov, a student at TUES - Sofia. I love coding and building challenging projects to improve my skills. My main interests are Machine Learning and Software Development. I'm eager to participate in Hackathons and Internships to gain practical experience and apply my knowledge to real-world projects.</p>
            {/* <a href={CV} download>
                <button className='hover'>Resume</button>
            </a> */}
        </div>
    </section>
  )
}

export default Hero