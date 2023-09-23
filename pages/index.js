import EventList from "../components/events/eventList";
import EventsSearch from "../components/events/eventsSearch";
import { Fragment } from "react";
import { getFeaturedEvents } from "../helpers/api-util";

function HomePage(props) {
  return (
    <Fragment>
      <EventList items={props.events} />
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}
export default HomePage;
