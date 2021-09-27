const EventDetail = ({
  illustration,
  title,
  description,
  subDescription,
  frequency,
  day,
  frequencyHour,
  hour
}) => {
  return (
    <div className='flex flex-col '>
      <div className='w-full h-64 bg-top bg-cover rounded-t'
           style={{ backgroundImage: `url('${illustration.responsiveImage.src}')` }}
      />
      <div className='flex flex-col w-full md:flex-row'>
        <div
          className='flex flex-row justify-around p-4 font-bold leading-none text-white uppercase bg-yellow-500 md:flex-col md:items-center md:justify-center md:w-1/4'
        >
          <div className='md:text-3xl'>{frequency}</div>
          <div className='md:text-6xl'>{day}</div>
          <div className='md:text-xl'>{frequencyHour}</div>
          <div className='md:text-xl'>{hour}</div>
        </div>
        <div className='p-4 font-normal text-gray-800 md:w-3/4'>
          <h5 className='mb-4 text-4xl font-bold leading-none tracking-tight text-center text-gray-800'>
            {title}
          </h5>
          <p className='leading-normal'>
            {description}
          </p>
          <div
            className='flex flex-row items-center mt-4 text-gray-700'
          >
            <div className='w-1/2'>
              {subDescription}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventDetail