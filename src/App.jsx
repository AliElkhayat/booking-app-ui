import { Route, Routes, useLocation, matchRoutes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'
import Hotels from './pages/Hotels'
import RoomDetails from './pages/RoomDetails'
import MyBooking from './pages/MyBooking'
import AddHotel from './pages/Dashboard/AddHotel'
import HotelList from './pages/Dashboard/HotelList'
import Layout from './pages/Dashboard/Layout'
import Dashboard from './pages/Dashboard/Dashboard'
import About from './pages/About'

const App = () => {
  const location = useLocation();

// Definition of all the routes that actually exist
  const routes = [
    { path: "/" },
    { path: "/hotels" },
    { path: "/dashboard" },
    { path: "/rooms/:id" },
    { path: "/my-bookings" },
    { path: "/about" }

  ];

  const matched = matchRoutes(routes, location);
  const isNotFound = !matched;

  const isDashboard = location.pathname.includes("dashboard");

  return (
    <>
      {(!isDashboard && !isNotFound) && <Navbar />}

      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />

          <Route path='/hotels' element={<Hotels />} />
          <Route path='/about' element={<About />} />
          <Route path='/my-bookings' element={<MyBooking />} />
          <Route path='/rooms/:id' element={<RoomDetails />} />
          <Route path='/dashboard' element={<Layout />} >
            <Route index element={<Dashboard />} />
            <Route path='add-hotel' element={<AddHotel />} />
            <Route path='hotel-list' element={<HotelList />} />


          </Route>
        </Routes>
      </div >

      {(!isDashboard && !isNotFound) && <Footer />
      }
    </>
  )
}

export default App
