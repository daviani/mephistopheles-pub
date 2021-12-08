import Image from 'next/image'

const Gallery = (items) => {
    return (
        <div className='grid-cols-3 lg:grid lg:grid-rows-3'>
            <div className='w-full rounded'>
                <Image
                    src={items.items[0].item.responsiveImage}
                    alt={items.items[0].item.alt}
                    layout='responsive'
                    height={300}
                    width={500}
                />
            </div>
            <div className='w-full col-span-2 row-span-2 rounded'>
                <Image
                    src={items.items[1].item.responsiveImage}
                    alt={items.items[1].item.alt}
                    layout='responsive'
                    height={600}
                    width={1000}
                />
            </div>
            <div className='w-full rounded'>
                <Image
                    src={items.items[2].item.responsiveImage}
                    alt={items.items[2].item.alt}
                    layout='responsive'
                    height={300}
                    width={500}
                />
            </div>
            <div className='w-full rounded'>
                <Image
                    src={items.items[3].item.responsiveImage}
                    alt={items.items[3].item.alt}
                    layout='responsive'
                    height={300}
                    width={500}
                />
            </div>
            <div className='w-full rounded'>
                <Image
                    src={items.items[4].item.responsiveImage}
                    alt={items.items[4].item.alt}
                    layout='responsive'
                    height={300}
                    width={500}
                />
            </div>
            <div className='w-full rounded'>
                <Image
                    src={items.items[5].item.responsiveImage}
                    alt={items.items[5].item.alt}
                    layout='responsive'
                    height={300}
                    width={500}
                />
            </div>
        </div>
    )
}

export default Gallery
