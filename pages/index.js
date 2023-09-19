import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/eventList";
import EventsSearch from "../components/events/eventsSearch";
import { Fragment } from "react";

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <Fragment>
      <EventList items={featuredEvents} />
    </Fragment>
  );
}
export default HomePage;
