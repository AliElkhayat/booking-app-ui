import Hero from '../components/Hero'
import HotelCards from '../components/HotelCards'
import Offers from '../components/Offers'
import Testimonials from '../components/Testimonials'


const Home = () => {
  return (
    <>
    <div className=' dark:bg-[var(--background)]'>
      <Hero/>
      <HotelCards/> 
      <Offers/>
      <Testimonials/>
      </div >
    </>
  )
}

export default Home
