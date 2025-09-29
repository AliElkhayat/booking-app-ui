import Hotel_2 from "../assets/hotel_3.webp"
const Hero = () => {
    const cities = [
        "Alexandia",
        "Beirut",
        " Cairo",
        "New York",
        "London",
        "Istanbul",
    ]
    return (
        <div className='  relative flex flex-col items-center justify-center p-10  text-white bg-no-repeat bg-cover bg-center h-screen' style={{ backgroundImage: `url(${Hotel_2} )` }}>
            <div className=' absolute inset-0 bg-black opacity-60'></div>
            <div className=' relative z-10 ' >
                <div className='text-center mb-6 '>
                    <h2 className='text-[#e89755] mt-50  pt-48 md:pt-15 lg:pt-30  text-4xl mb-3 font-bold  '>Find Your Perfect Stay, Anywhere</h2>
                    <p className='text-2xl '>Discover top-rated hotels and exclusive deals around the world. Book with ease and start your journey today.</p>
                    <button className='mt-5'>Book Now</button>
                </div>
                <section className="bg-white dark:bg-[#22272B]  p-6 max-w-xl mx-auto rounded-2xl shadow-lg">
                    <h2 className="text-2xl font-bold mb-4 dark:text-[var(--title)] text-gray-800">Book Your Stay</h2>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="destination" className="block text-sm font-medium dark:text-gray-400 text-gray-700">Destination</label>
                            <input list="destination" id="destination" type="text" name="destination" placeholder="e.g., Alexandia, Paris..." required
                                className="mt-1 w-full text-black dark:text-amber-50 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            <datalist id='destination'>
                                {cities?.map((city, index) => (
                                    <option value={city} key={index} />
                                ))}

                            </datalist>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="checkin" className="block text-sm font-medium dark:text-gray-400 text-gray-700">Check-in</label>
                                <input type="date" id="checkin" name="checkin" required 
                                    className="mt-1 text-black dark:text-amber-50 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label htmlFor="checkout" className="block text-sm font-medium dark:text-gray-400 text-gray-700">Check-out</label>
                                <input type="date" id="checkout" name="checkout" required
                                    className="mt-1 text-black dark:text-amber-50 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="guests" className="block text-sm font-medium  dark:text-gray-400 text-gray-700">Guests</label>
                                <input type="number" id="guests" name="guests" min="1" max="10" required
                                    className="mt-1 text-black dark:text-amber-50 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label htmlFor="rooms" className="block text-sm font-medium dark:text-gray-400 text-gray-700">Rooms</label>
                                <input type="number" id="rooms" name="rooms" min="1" max="5" required
                                    className="mt-1 text-black dark:text-amber-50 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                        </div>


                        <div className=' text-center '>


                            <button className='mt-3' type="submit"
                            >
                                Search Hotels
                            </button>
                        </div>
                    </form>
                </section>


            </div>
        </div>
    )
}

export default Hero
