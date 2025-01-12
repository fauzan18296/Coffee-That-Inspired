import Image from './Image'
import { DarkModeContext } from '../../context/DarkMode'
import { useContext } from 'react'
const HeroSection = () => {
    const { darkMode } = useContext(DarkModeContext)
  return (
    <div className={`container flex justify-around max-tablet:justify-evenly  items-center min-h-screen w-full mx-auto max-mobile:flex-col ${darkMode ? 'bg-neutral-900 text-white' : 'bg-white'}`
}>
    <div className='text-balance mx-6'>
        <h1 className='text-3xl max-tablet:text-xl font-bold tracking-wider'>Welcome To <span className='text-primary'>Coffee Inspired,</span></h1>
        <p className='tracking-wide text-2xl max-tablet:text-base'>Discover the perfect blend of aroma and taste in every sip. Let our coffee awaken your senses and spark your inspiration, cup after cup.</p>
          </div>
      <Image classname='mx-7 md:size-2/6 w-3/5' 
        image="/src/assets/Img/HeroSectionImage/coffee-time.avif" alt="coffee"></Image>
        </div>
  )
}

export default HeroSection
