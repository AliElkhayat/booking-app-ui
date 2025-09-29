import React, { useState } from 'react'
import allrooms_1 from "../assets/allrooms_1.webp"
import allrooms_2 from "../assets/allrooms_5.webp"
import allrooms_3 from "../assets/allrooms_3.webp"
import allrooms_4 from "../assets/allrooms_4.webp"
import { FaLocationArrow, FaStar } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Hotels = () => {

  //  Function for clearing all checked checkboxes and radios
  const clearFilters = () => {
    document.querySelectorAll('input[type="checkbox"]').forEach((el) => {
      el.checked = false;
    });

    document.querySelectorAll('input[type="radio"]').forEach((el) => {
      el.checked = false;
    });
  }

  const CheckBox = ({ label }) => {
    return (
      <label className='flex gap-3 items-center cursor-pointer dark:text-gray-300 text-sm mt-2'>
        <input type='checkbox' onChange={(e) => (e.target.checked, label)} />
        <span className='font-light select-none'>{label}</span>
      </label>
    )
  }

  // eslint-disable-next-line no-unused-vars
  const RadioButton = ({ label, onChange = () => { } }) => {
    return (
      <label className='flex gap-3 items-center cursor-pointer dark:text-gray-300 text-sm mt-2'>
        <input type='radio' name='sortOption' onChange={() => (label)} />
        <span className='font-light select-none'>{label}</span>
      </label>
    )
  }

  const navigate = useNavigate()
  const roomFilter = [
    "Single Room",
    "Double Room",
    "Swimming Pool",
    "Family Suite"
  ]

  const priceFilter = [
    "0 to 500",
    "500 to 1000",
    "1000 to 2000",
    "2000 to 3000",
  ]

  const sortOption = [
    "Price Low To High",
    "Price High To Low",
    "Newest"
  ]
  const [openFiter, setOpenFilter] = useState(false)

  const roomsData = [
    {
      _id: "a1f64c7197bc1234abcd9012",
      hotel: "Alpine View Lodge",
      city: "USA",
      address: "112 Mountain Rd, Aspen, Colorado, USA",
      roomType: "King Suite",
      pricePerNight: 450,
      rating: 2,
      amenities: ["Balcony", "Sea View", "High-Speed WiFi"],
      images: allrooms_1,
      isAvailable: true,
    },
    {
      _id: "b2e75d8298cd2345bcde0123",
      hotel: "Garden Luxe Hotel",
      roomType: "Standard Twin",
      address: "45 Emirgan St, Sariyer, Istanbul, Türkiye",
      city: "Istanbul",
      pricePerNight: 280,
      amenities: ["TV", "City View", "Breakfast Included"],
      images: allrooms_2,
      rating: 4,
      isAvailable: false,
    },
    {
      _id: "c3d86e93a9de3456cdef1234",
      hotel: "UrbanStay Central",
      roomType: "Luxury Single",
      pricePerNight: 320,
      address: "210 Lexington Ave, Manhattan, New York, USA",
      city: "New York",
      amenities: ["Work Desk", "Garden Access", "Air Conditioning"],
      images: allrooms_3,
      rating: 5,
      isAvailable: true,
    },
    {
      _id: "d4f97fa4b0ef4567defa2345",
      hotel: "King Suite",
      roomType: "Deluxe Family Room",
      pricePerNight: 390,
      address: "88 Lotus Lake Rd, Guilin, Guangxi, China",
      amenities: ["Mini Bar", "Mountain View", "Free Parking"],
      images: allrooms_4,
      rating: 3,
      city: "China",
      isAvailable: true,
    }
  ];

  return (
    <>
      <div className='px-10 lg:px-30 flex flex-col-reverse lg:flex-row  justify-between pt-30 lg:pt-50 items-start dark:bg-[var(--background)]'>
        <div className=''>
          <div className='flex flex-col items-center text-left '>
            <h1 className='text-[#e89755] text-4xl md:text-2xl dark:text-[var(--title)]'>Hotel Rooms</h1>
            <p className='text-gray-500 md:text-base text-sm max-w-170 mt-2 text-center dark:text-gray-400 '>
              Discover comfortable and stylish rooms tailored to every traveler’s needs — from cozy singles to luxurious suites.
            </p>
          </div>

          {roomsData.map((roomData, index) => (
            <div className='flex flex-col md:flex-row items-start py-10 gap-6 border-gray-300 border-b ' key={index}>
              <img
                onClick={() => navigate(`/rooms/${roomData._id}`)}
                className='max-h-65 rounded-xl shadow-lg object-cover cursor-pointer'
                src={roomData.images}
              />

              <div>
                <p className='dark:text-gray-300'>{roomData.hotel}</p>
                <p className='dark:text-amber-50'>{roomData.city}</p>

                <div className="flex items-center text-yellow-400 mb-2">
                  {Array.from({ length: roomData.rating }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                <div className='text-gray-500 flex items-center gap-3'>
                  <FaLocationArrow />
                  <p>{roomData.address}</p>
                </div>

                <div className='mt-3'>
                  {roomData.amenities.map((items, index) => (
                    <small key={index} className='p-2 rounded-lg bg-gray-200 mr-2 dark:bg-[#1F1F21] dark:text-amber-50'>{items}</small>
                  ))}
                </div>
                <p className='text-[#e89755] mt-3 font-bold dark:text-[var(--title)]'>{roomData.pricePerNight}$/Night</p>
              </div>
            </div>
          ))}
        </div>

        {/* filter */}
        <div className='w-80 border lg:ml-10 border-gray-300 text-gray-600 dark:bg-[#1F1F21] '>
          <div className={`flex items-center justify-between border-b px-5 border-gray-500 ${openFiter && "border-b"}`}>
            <p className='dark:text-amber-50'>FILTERS</p>
            <div>
              <span className='lg:hidden cursor-pointer dark:text-amber-50' onClick={() => setOpenFilter(!openFiter)}>
                {openFiter ? "Hide" : "Show"}
              </span>
              <span className='hidden lg:block cursor-pointer dark:text-amber-50' onClick={clearFilters}>
                Clear
              </span>
            </div>
          </div>

          <div className={`${openFiter ? "h-auto" : "h-0 lg:h-auto"} overflow-hidden transition-all duration-700`}>
            {/*     clear func for mobile     */}
            <div className="px-5 py-4 lg:hidden">
              <button
                onClick={clearFilters}
                className="w-full bg-gray-200  rounded-lg py-2 text-sm font-medium hover:bg-gray-300"
              >
                Clear Filters
              </button>
            </div>
            <div className='px-5 pt-6'>
              <p className='text-gray-500 pb-2 dark:text-amber-50'>Popular Filters</p>
              {roomFilter.map((room, index) => (
                <CheckBox label={room} key={index} />
              ))}
            </div>

            <div className='px-5 pt-6'>
              <p className='text-gray-500 pb-2 dark:text-amber-50'>Price Range</p>
              {priceFilter.map((price, index) => (
                <CheckBox label={price} key={index} />
              ))}
            </div>

            <div className='px-5 py-6 '>
              <p className='text-gray-500 pb-2 dark:text-amber-50'>Sort By</p>
              {sortOption.map((sort, index) => (
                <RadioButton key={index} label={sort} />
              ))}
            </div>


          </div>
        </div>
      </div>
    </>
  )
}

export default Hotels
