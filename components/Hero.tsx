import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'

type Props = {
  pageInfo: PageInfo
}

const Hero = ({ pageInfo }: Props) => {
  const [text] = useTypewriter({
    words: [
      `Hi, I'm ${pageInfo?.name?.split(' ')[0]}`,
      'Guy-who-loves-Coffee.tsx',
      '<ButLovesToCodeMore />',
    ],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <div className='h-screen pt-40 sm:pt-0 flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <img
        className='relative rounded-full my-[60px] h-32 w-32 mx-auto object-cover center'
        src={urlFor(pageInfo?.heroImage).url()}
        alt={pageInfo?.name}
      />
      <div className='z-20 w-full flex flex-col items-center justify-center'>
        <h2 className='text-smuppercase text-gray-500 pb-2 tracking-[12px] md:tracking-[15px]'>
          {pageInfo?.role}
        </h2>
        <h1 className='text-3xl md:text-5xl lg:text-6xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#F7AB0A' />
        </h1>

        <div className='pt-5 flex flex-col sm:flex-row'>
          <Link href='#about'>
            <button className='heroButton my-4 sm:my-0'>About</button>
          </Link>
          <Link href='#experience'>
            <button className='heroButton my-4 sm:my-0'>Experience</button>
          </Link>
          <Link href='#skills'>
            <button className='heroButton my-4 sm:my-0'>Skills</button>
          </Link>
          <Link href='#projects'>
            <button className='heroButton my-4 sm:my-0'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
