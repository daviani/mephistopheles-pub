const EventDetail = ({ event }) => {
  return (
    <div className='flex flex-col '>
      <div className='w-full h-64 bg-top bg-cover rounded-t'
           style={{ backgroundImage: `url('${event.illustration.responsiveImage.src}')` }}
      />
      <div className='flex flex-col w-full md:flex-row'>
        <div
          className='flex flex-row justify-around p-4 font-bold leading-none text-white uppercase bg-yellow-500 md:flex-col md:items-center md:justify-center md:w-1/4'
        >
          <p className='md:text-2xl'>{event.frequency}</p>
          <p className='md:text-5xl'>{event.day}</p>
          <p className='md:text-xl'>{event.frequencyHour}</p>
          <p className='md:text-5xl'>{event.hour}</p>
        </div>
        <div className='p-4 font-normal text-gray-800 md:w-3/4'>
          <h5 className='mb-4 text-4xl font-bold leading-none tracking-tight text-center text-gray-800'>
            {event.title}
          </h5>
          <p className='leading-normal'>
            {event.description}
          </p>
          <div
            className='flex flex-row items-center mt-4 text-gray-700'
          >
            <div className='w-1/2'>
              {event.subDescription}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventDetail