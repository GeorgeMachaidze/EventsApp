import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/eventList";
import { Fragment } from "react";
import { useRouter } from "next/router";
import EventsSearch from "../../components/events/eventsSearch";

function AllEventsPage() {
  const router = useRouter();
  const events = getAllEvents();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    console.log("hello");
    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}
export default AllEventsPage;
