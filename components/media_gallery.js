import Image from 'next/image'

const Gallery = () => {
  const img_1 = {
    url: '/images/media/gallery/img_1.jpg',
    alt: 'image 1',
  }

  const img_2 = {
    url: '/images/media/gallery/img_2.jpg',
    alt: 'image 2',
  }
  const img_3 = {
    url: '/images/media/gallery/img_3.jpg',
    alt: 'image 3',
  }
  const img_4 = {
    url: '/images/media/gallery/img_4.jpg',
    alt: 'image 4',
  }
  const img_5 = {
    url: '/images/media/gallery/img_5.jpg',
    alt: 'image 5',
  }
  const img_6 = {
    url: '/images/media/gallery/img_6.jpg',
    alt: 'image 6',
  }

  return (
    <div className='grid-cols-3 lg:grid lg:grid-rows-3'>
      <div className='w-full rounded'>
        <Image
          src={img_1.url}
          alt={img_1.alt}
          layout='responsive'
          height={300}
          width={500}
        />
      </div>
      <div className='w-full col-span-2 row-span-2 rounded'>
        <Image
          src={img_2.url}
          alt={img_2.alt}
          layout='responsive'
          height={600}
          width={1000}
        />
      </div>
      <div className='w-full rounded'>
        <Image
          src={img_3.url}
          alt={img_3.alt}
          layout='responsive'
          height={300}
          width={500}
        />
      </div>
      <div className='w-full rounded'>
        <Image
          src={img_4.url}
          alt={img_4.alt}
          layout='responsive'
          height={300}
          width={500}
        />
      </div>
      <div className='w-full rounded'>
        <Image
          src={img_5.url}
          alt={img_5.alt}
          layout='responsive'
          height={300}
          width={500}
        />
      </div>
      <div className='w-full rounded'>
        <Image
          src={img_6.url}
          alt={img_6.alt}
          layout='responsive'
          height={300}
          width={500}
        />
      </div>
    </div>
  )
}

export default Gallery