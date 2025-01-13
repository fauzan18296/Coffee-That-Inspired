import AboutImg from '../../assets/Img/AboutSectionImage/aboutImg.jpg'
import Image from './Image'

const AboutSection = () => {
  return (
    <div className="container flex  justify-around mx-auto  items-center min-h-screen">
      <div className='flex items-center gap-10'>
        <Image classname="size-2/5  rounded-md" image={AboutImg} alt="Image" />
        <h1></h1>
      <p className='text-xl'>Coffee Inspired is a coffee shop, 
         that has a variety of products and has a variety of flavors</p>
         </div>
    </div>
  )
}

export default AboutSection
