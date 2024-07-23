import styles from './SkillsStyles.module.css'
import checkMarkIconDark from '../../assets/checkmark-dark.svg'
import checkMarkIconLight from '../../assets/checkmark-light.svg'
import SkillList from "../../common/SkillList"

function Skills() {
  return (
    <section id='skills' className={styles.container}>
        <h1>Skills</h1>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIconLight} skill='Machine Learning' />
          <SkillList src={checkMarkIconLight} skill='Data Science' />
          <SkillList src={checkMarkIconLight} skill='Python' />
          <SkillList src={checkMarkIconLight} skill='TensorFlow' />
          <SkillList src={checkMarkIconLight} skill='PyTorch' />
        </div>
        <hr />
        <div className={styles.skillList}>
          <SkillList src={checkMarkIconLight} skill='Teamwork' />
          <SkillList src={checkMarkIconLight} skill='Problem Solving' />
          <SkillList src={checkMarkIconLight} skill='Communication' />
          <SkillList src={checkMarkIconLight} skill='Project management' />
        </div>
    </section>
  )
}

export default Skills;