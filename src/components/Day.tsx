import { Accordion } from "react-bootstrap";
import Event, { IEvent } from "./Event";

interface DayProps {
  day: number;
  events: IEvent[];
}

const Day = ({ day, events }: DayProps) => {
  return (
    <Accordion className="tw-py-2 tw-w-full">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Your Day {day} Schedule</Accordion.Header>
        <Accordion.Body>
          {events.map((event, index) =>
            event.name === "Leaders Dialogue" ? (
              <Event event={event} key={index} ld={true} />
            ) : (
              <Event event={event} key={index} />
            )
          )}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Day;
