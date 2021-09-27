import TopComponent from './main_top-component'
import MiddleComponent from './main_middle-component'
import { Image } from 'react-datocms'
import EventDetail from './event_details'

const EventsContainers = ({ allEvents }) => {
  const firstEvent = allEvents[0]
  const otherEvents = allEvents.slice(1)
  console.log(allEvents)
  return (
    <>

      <TopComponent>
        <EventDetail illustration={firstEvent.illustration}
                     title={firstEvent.title}
                     description={firstEvent.description}
                     subDescription={firstEvent.subDescription}
                     frequency={firstEvent.frequency}
                     day={firstEvent.day}
                     frequencyHour={firstEvent.frequencyHour}
                     hour={firstEvent.hour}
        />
      </TopComponent>


      {otherEvents.map((even) => (
        <MiddleComponent key={even.id}>
          <EventDetail illustration={even.illustration}
                       title={even.title}
                       description={even.description}
                       subDescription={even.subDescription}
                       frequency={even.frequency}
                       day={even.day}
                       frequencyHour={even.frequencyHour}
                       hour={even.hour}
          />
        </MiddleComponent>
      ))}

    </>
  )
}

export default EventsContainers