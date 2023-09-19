import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import { Fragment } from "react";
import EventSummary from "../../components/eventDetail/event-summary";
import EventLogistics from "../../components/eventDetail/event-logistics";
import EventContent from "../../components/eventDetail/event-content";
import ErrorAlert from "../../components/ui/ErrorAlert";

function EventsDetailPage() {
  const router = useRouter();

  const eventsId = router.query.eventsId;
  const event = getEventById(eventsId);
  console.log(router.query);
  if (!event) {
    return (
      <ErrorAlert>
        <p>No Event Found</p>
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>{<p>{event.description}</p>}</EventContent>
    </Fragment>
  );
}
export default EventsDetailPage;
