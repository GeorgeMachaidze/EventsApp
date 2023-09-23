import { getAllEvents } from "../../helpers/api-util";
import EventList from "../../components/events/eventList";
import { Fragment } from "react";
import { useRouter } from "next/router";
import EventsSearch from "../../components/events/eventsSearch";

function AllEventsPage(props) {
  const router = useRouter();
  const { events } = props;

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

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
}
export default AllEventsPage;
