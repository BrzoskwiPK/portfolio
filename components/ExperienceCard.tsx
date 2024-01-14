import { urlFor } from '../sanity'
import { Experience } from '../typings'

type Props = {
  experience: Experience
}

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article
      className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
     w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10
     hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <img
        className='w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src={urlFor(experience?.companyImage).url()}
        alt={experience?.company}
      />

      <div className='px-0 md:px-10'>
        <h4 className='text-3xl font-light'> {experience?.jobTitle} </h4>
        <p className='font-bold text-2xl my-2'>{experience?.company}</p>
        <div className='flex space-x-2 mt-4'>
          {experience?.technologies?.map(technology => (
            <img
              key={technology._id}
              className='h-8 w-8 rounded-full'
              src={urlFor(technology?.image).url()}
            />
          ))}
        </div>
        <p className='uppercase py-5 text-gray-300'>
          {new Date(experience?.dateStarted).toDateString()} -{' '}
          {experience?.isCurrentlyWorkingHere
            ? 'Present'
            : new Date(experience?.dateEnded).toDateString()}
        </p>
        <ul className='list-disc space-y-4 ml-5 text-lg h-80 pb-4'>
          {experience?.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard
