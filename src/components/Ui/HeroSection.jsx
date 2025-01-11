import coffee from '../../assets/Img/HeroSectionImage/coffee-time.avif'
const HeroSection = () => {
  return (
    <div className='flex justify-evenly  items-center min-h-screen w-full max-mobile:flex-col'>
    <div className='text-balance mx-6'>
        <h1 className='text-3xl max-mobile:text-xl font-bold tracking-wider'>Welcome To <span className='text-primary'>Coffee Inspired,</span></h1>
        <p className='tracking-wide text-xl max-mobile:text-base'>Discover the perfect blend of aroma and taste in every sip. Let our coffee awaken your senses and spark your inspiration, cup after cup.</p>
          </div>
        <img className='mx-7 max-mobile:w-2/4  w-3/12' src={coffee} alt="coffee" />
        </div>
  )
}

export default HeroSection
