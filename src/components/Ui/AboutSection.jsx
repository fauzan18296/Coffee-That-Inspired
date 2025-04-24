import AboutImg from '../../assets/Img/AboutSectionImage/aboutImg.jpg'
import Image from './Image'
import { useCoffeeProducts } from '../../hooks/useCoffeeProducts'
import Loader from './Loader'
import { Suspense, lazy } from 'react'

const CardHotCoffeeProducts  = lazy(() => import('../Element/Mappings/CardHotCoffeeProducts'))

const AboutSection = () => {
  const { coffeeHotProducts } = useCoffeeProducts()

  return (
    <div className=' flex justify-around mx-auto  items-center min-h-screen flex-col'>
    <div className="container flex justify-center mx-auto  items-center min-h-screen">
      <div className='flex items-center max-mobile:flex-col-reverse gap-10'>
        <Image classname="size-1/3  mx-3 rounded-md max-mobile:size-2/3" image={AboutImg} alt="Image" />
        <div className='flex flex-col max-mobile:mx-6 max-mobile:text-balance'>
        <h1 className='text-3xl max-mobile:text-xl text-primary font-Poppins font-bold tracking-wider'>About Coffee Inspired☕,</h1>
      <p className='text-2xl max-mobile:text-base tracking-wide'>Coffee Inspired is a coffee shop that has a variety of products and has a variety of flavors, step by step we will create a coffee flavor that can make you focus or feel enjoy. Because that`s how we can know your taste.</p>
         </div>
      </div>
      </div>
       <div className='flex items-center flex-col'>
        <h1 className='text-3xl max-mobile:text-xl text-primary font-Poppins font-bold tracking-wider'>About Products☕</h1>
        <div className=' md:grid grid-cols-3 max-mobile:flex max-mobile:justify-center max-mobile:items-center max-mobile:flex-col  gap-14 mx-4 my-8'>
          {
              coffeeHotProducts.length > 0 && coffeeHotProducts.map((product) => {
          return (
            <div key={product.id}>
              <Suspense fallback={<Loader />}>
              <CardHotCoffeeProducts product={product} />
              </Suspense>
                </div>
          )
        })}
          </div>
      </div>
      </div>
  )
}

export default AboutSection
