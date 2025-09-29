import roomsData from '../../data/allRooms.js'

const HotelList = () => {
      const hotel = roomsData

  return (
    <>
      <div className='dark:bg-[#1D2125]' style={{
      maxWidth: '900px',
      margin: '20px auto',
      fontFamily: 'Arial, sans-serif',
      padding: '10px'
    }}>

      <h1 className='dark:text-amber-50' style={{textAlign:'center', marginBottom: '30px'}}>Available Hotels</h1>
      {hotel.map((room)=> (
        <div style={{
          display: 'flex',
          gap:"20px",
           marginBottom: '25px',
          padding: '15px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            borderRadius: '8px',
            backgroundColor:room.isAvailable? '#e0ffe0':'#ffe0e0',
              alignItems: 'center'

        }}>

          <img src={room.images}  style={{width: '150px', height: '100px', borderRadius: '8px', objectFit: 'cover'}}/>

          <div style={{flexGrow: 1}}>
          
           <h2 style={{margin: '0 0 8px 0'}}>{room.hotel}</h2>
           
            <p style={{margin: '4px 0'}}><strong>City:</strong> {room.city}</p>

            <p style={{margin: '4px 0'}}><strong>Room Type:</strong> {room.roomType}</p>
            <p style={{margin: '4px 0'}}><strong>Price Per Night:</strong> ${room.pricePerNight}</p>

            <p style={{margin: '4px 0'}}>
              <strong>Rating:</strong> {room.rating} 
            </p>

          </div>
         </div>
      ))}
    </div>
    </>
  )
}

export default HotelList
