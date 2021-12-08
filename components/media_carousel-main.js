import Image from 'next/image'
import CarouselButtons from './media_carousel-buttons'

const Carousel = (items) => {
    return (
        <div style={{
            maxWidth: 1280,
            marginLeft: 'auto',
            marginRight: 'auto'
        }}
        >

            <CarouselButtons show={1} infiniteLoop={true}>
                {items.items.map((item) => (
                    < Image
                        key={item.id}
                        src={item.responsiveImage}
                        alt={item.responsiveImage.alt}
                        width={1280}
                        height={800}
                    />)
                )}
            </CarouselButtons>
        </div>
    )
}

export default Carousel
