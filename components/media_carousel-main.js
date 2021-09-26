import Image from 'next/image'
import CarouselButtons from './media_carousel-buttons'

const carouselItems = [
  {
    id: '1',
    img: '/images/media/carousel/img_1.jpg',
    text: 'Slide 1'
  },
  {
    id: '2',
    img: '/images/media/carousel/img_2.jpg',
    text: 'Slide 2'
  },
  {
    id: '3',
    img: '/images/media/carousel/img_3.jpg',
    text: 'Slide 3'
  },
  {
    id: '4',
    img: '/images/media/carousel/img_4.jpg',
    text: 'Slide 4'
  }
]

const Carousel = () => {
  return (
    <div style={{
      maxWidth   : 1280,
      marginLeft : 'auto',
      marginRight: 'auto',
    }}
    >

      <CarouselButtons show={1} infiniteLoop={true}>
        {carouselItems.map( (item) => (
            <Image key={item.id}
                   src={item.img}
                   alt={item.text}
                   width={1280}
                   height={800}/>
          )
        )}
      </CarouselButtons>
    </div>
  )
}

export default Carousel