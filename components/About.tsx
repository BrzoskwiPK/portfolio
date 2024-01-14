import { motion } from 'framer-motion'
import { urlFor } from '../sanity'
import { PageInfo } from '../typings'

type Props = {
  pageInfo: PageInfo
}

const About = ({ pageInfo }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col h-screen text-center md:text-left max-w-7xl px-10 justify-center mx-auto items-center max-sm:pt-12'>
      <h3 className='uppercase tracking-[20px] text-gray-500 text-2xl max-sm:mb-10'>About</h3>
      <div className='w-full flex max-md:flex-col items-center justify-center h-4/5 md:h-2/3'>
        <motion.img
          className='-mb-20 md:mb-0 min-w-[14rem] flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-[500px] xl:w-[500px] xl:h-[600px] md:mt-24 lg:mt-12'
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          src={urlFor(pageInfo?.profilePic).url()}
          alt={pageInfo?.name}
        />

        <div className='w-[100vw] space-y-10 px-8 md:px-10 md:mt-24 lg:mt-0 pt-2 md:pt-24 mt-24 min-sm:mt-24'>
          <h4 className='text-4xl font-semibold'>
            Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> background
          </h4>
          <p className='text-base max-sm:text-sm'>{pageInfo?.backgroundInformation}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default About
