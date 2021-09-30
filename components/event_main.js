import TopComponent from './main_top-component'
import MiddleComponent from './main_middle-component'
import EventDetail from './event_details'

const EventsContainers = ({ allEvents }) => {
  const firstEvent = allEvents[0]
  const otherEvents = allEvents.slice(1)
  return (
    <>
      <TopComponent>
        <EventDetail event={firstEvent} />
      </TopComponent>

      {otherEvents.map((otherEvent) => (
        <MiddleComponent key={otherEvent.id}>
          <EventDetail event={otherEvent} />
        </MiddleComponent>
      ))
      }
    </>
  )
}

export default EventsContainers