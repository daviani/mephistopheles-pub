import Link from 'next/link'

const EventDetail = ({ event }) => {
    const paragraphs = event.description.value.document.children
    return (
        <div className="flex flex-col ">
            <div className="w-full h-96 bg-top bg-cover rounded-t"
                style={{ backgroundImage: `url('${event.illustration.responsiveImage.src}')` }}
            />
            <div className="flex flex-col w-full md:flex-row">
                <div
                    className="flex flex-row justify-center p-4 font-bold leading-none text-white uppercase bg-yellow-500 md:flex-col md:items-center md:justify-center md:w-1/4"
                >
                    <p className="text-center text-lg lg:text-2xl mx-1 sm:mx-0">{event.frequency}</p>
                    <p className="text-center text-lg lg:text-5xl mx-1 sm:mx-0">{event.day}</p>
                    <p className="text-center text-lg lg:text-2xl mx-1 sm:mx-0">{event.frequencyHour}</p>
                    <p className="text-center text-lg lg:text-5xl mx-1 sm:mx-0">{event.hour}</p>
                </div>
                <div className="p-4 font-normal text-gray-800 md:w-3/4">
                    <h5 className="mb-4 text-4xl font-bold leading-none tracking-tight text-center text-gray-800">
                        {event.title}
                    </h5>
                    
                    {paragraphs.map((paragraph) => {
                        const item = paragraph.children[0].value
                        const id = item.length + Math.random(10, 2)
                        return (
                            <p key={id} className="leading-normal text-center p-1">
                                {item}
                            </p>
                        )
                    })}
                    
                    <div
                        className="text-center mx-auto w-36 mt-6 mb-2 p-2.5 rounded-xl font-medium focus:outline-none border-2 border-yellow-500 text-yellow-500 hover:text-white bg-white hover:bg-yellow-500 leading-none cursor-pointer">
                        <Link
                            href="https://www.facebook.com/events/2080428022116525?acontext=%7B%22event_action_history%22%3A[%7B%22surface%22%3A%22notifications_tab%22%7D%2C%7B%22mechanism%22%3A%22your_upcoming_events_unit%22%2C%22surface%22%3A%22bookmark%22%7D]%2C%22ref_notif_type%22%3A%22plan_user_invited%22%2C%22source%22%3A%2229%22%7D"
                        
                        >
                            {event.titreDuBouton}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventDetail
