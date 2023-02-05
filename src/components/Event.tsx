import { Accordion, Table } from "react-bootstrap";
interface IEvent {
  time: string;
  name: string;
  location: string;
  round1?: string;
  round2?: string;
  round3?: string;
}

interface EventProps {
  event: IEvent;
  ld?: boolean;
}

const Event = ({ event, ld }: EventProps) => {
  return (
    <>
      <Accordion flush className="tw-py-2">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            {event.time} {event.name}
          </Accordion.Header>
          <Accordion.Body className="tw-text-white tw-bg-gis-blue">
            <p className="last:tw-mb-0">{event.location}</p>
            {ld ? (
              <Table striped className="table tw-bg-[#e7f1ff]">
                <tbody>
                  <tr>
                    <td>Round 1</td>
                    <td>{event.round1!}</td>
                  </tr>
                  <tr>
                    <td>Round 2</td>
                    <td>{event.round2!}</td>
                  </tr>
                  <tr>
                    <td>Round 3</td>
                    <td>{event.round3!}</td>
                  </tr>
                </tbody>
              </Table>
            ) : (
              <></>
            )}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default Event;
export { type IEvent };
