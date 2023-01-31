import { Accordion } from "react-bootstrap";
interface IEvent {
  time: string;
  name: string;
  location: string;
}

interface EventProps {
  event: IEvent;
}

const Event = ({ event }: EventProps) => {
  return (
    <>
      <Accordion flush className="tw-py-2">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            {event.time} {event.name}
          </Accordion.Header>
          <Accordion.Body className="tw-text-white tw-bg-gis-blue">
            {event.location}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default Event;
export { type IEvent };
