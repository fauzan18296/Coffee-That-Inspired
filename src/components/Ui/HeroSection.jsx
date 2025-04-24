import Image from './Image'
import HeroImg from '../../assets/Img/HeroSectionImage/coffee-time.avif'

const HeroSection = () => {
  return (
    <div className={`container flex justify-around max-tablet:justify-evenly  items-center min-h-dvh w-full mx-auto max-mobile:flex-col`
}>
    <div className='text-balance mx-6'>
        <h1 className='text-3xl max-tablet:text-xl font-bold tracking-wider font-Poppins'>Welcome To <span className='text-primary'>Coffee Inspired,</span></h1>
        <p className='tracking-wide text-2xl max-tablet:text-base'>Discover the perfect blend of aroma and taste in every sip. Let our coffee awaken your senses and spark your inspiration, cup after cup.</p>
          </div>
      <Image classname='mx-7 size-2/6 max-mobile:size-8/12 basis-1/2' 
        image={HeroImg} alt="coffee"></Image>
        </div>
  )
}

export default HeroSection
