import { motion } from 'framer-motion'
import { urlFor } from '../sanity'
import { Project } from '../typings'

type Props = {
  projects: Project[]
}

const Projects = ({ projects }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-32 sm:top-36 md:top-28 lg:top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projects
      </h3>

      <div className='relative w-full h-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
        {projects?.map((project, index) => (
          <div
            key={index}
            className='w-full flex-shrink-0 overflow-hidden snap-center flex flex-col space-y-5 items-center justify-center p-4 md:p-24 lg:p-44 h-screen'>
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={urlFor(project?.image)?.url()}
              alt='Project'
              className='min-w-[250px] !min-h-[250px] sm:min-w-[280px] sm:h-[280px] md:min-w-[300px] md:h-[300px] lg:min-w-[350px] lg:h-[350px] object-cover sm:object-contain mt-40 min-sm:mt-24 lg:mt-24 flex-shrink-0'
            />
            <div className='sm:mt-0 space-y-8 lg:space-y-6 xl:space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-4xl font-semibold text-center'>
                <span className='underline decoration-[#F7AB0A]/50'>Name:</span> {project?.title}
              </h4>
              <div className='flex items-center space-x-2 justify-center !mt-4 md:!mt-6 xl:!mt-10'>
                {project?.technologies?.map(technology => (
                  <img
                    className='h-8 w-8'
                    key={technology._id}
                    src={urlFor(technology.image)?.url()}
                    alt={technology.title}
                  />
                ))}
              </div>
              <p className='text-lg text-center !mt-4 md:!mt-6 xl:!mt-10'>{project?.summary}</p>
              <p className='w-full text-lg text-center'>
                GitHub repo:{' '}
                <a className='font-bold text-[#F7AB0A]' href={project?.linkToBuild}>
                  LINK
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12' />
    </motion.div>
  )
}

export default Projects
