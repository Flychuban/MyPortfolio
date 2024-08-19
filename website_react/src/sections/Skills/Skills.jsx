import styles from './SkillsStyles.module.css'
import checkMarkIconDark from '../../assets/checkmark-dark.svg'
import checkMarkIconLight from '../../assets/checkmark-light.svg'
import SkillList from "../../common/SkillList"
import { useTheme } from '../../common/ThemeContext'

function Skills() {
    const { theme, toggleTheme } = useTheme()
    const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark
  return (
    <section id='skills' className={styles.container}>
        <h1 className="sectionTitle">Skills</h1>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill='Machine Learning' />
          <SkillList src={checkMarkIcon} skill='Data Science' />
          <SkillList src={checkMarkIcon} skill='Python' />
          <SkillList src={checkMarkIcon} skill='TensorFlow' />
          <SkillList src={checkMarkIcon} skill='PyTorch' />
        </div>
        <hr />
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill='Teamwork' />
          <SkillList src={checkMarkIcon} skill='Problem Solving' />
          <SkillList src={checkMarkIcon} skill='Communication' />
          <SkillList src={checkMarkIcon} skill='Project management' />
          <SkillList src={checkMarkIcon} skill='Time management' />
        </div>
    </section>
  )
}

export default Skills;