import { motion } from 'framer-motion'
import { Skill as SkillType } from '../typings'
import Skill from './Skill'

type Props = {
  skills: SkillType[]
}

const Skills = ({ skills }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
      <h3 className='absolute top-36 sm:top-52 md:top-48 xl:top-40 uppercase tracking-[20px] text-gray-500 text-2xl'>
        fav stack
      </h3>
      <div className='grid sm:grid-cols-4 gap-2 md:gap-8 grid-cols-2 md:!mt-48 !mt-44'>
        {skills?.map((skill, index) => (
          <Skill key={skill._id} skill={skill} directionLeft={index % 2 !== 0} />
        ))}
      </div>
    </motion.div>
  )
}

export default Skills
