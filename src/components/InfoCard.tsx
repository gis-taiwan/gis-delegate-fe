import { Card, Table } from "react-bootstrap";

interface InfoCardProps {
  giscode: string;
  first_name: string;
  last_name: string;
  team?: string;
  dietary_requirement: string;
}

const InfoCard = ({
  giscode,
  first_name,
  last_name,
  dietary_requirement,
}: InfoCardProps) => {
  return (
    <Card body className="tw-w-full">
      <Table striped bordered hover>
        <thead className="tw-font-bold">
          <tr>
            <td>GIS Code</td>
            <td>{giscode}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>First Name</td>
            <td>{first_name}</td>
          </tr>
          <tr>
            <td>Last Name</td>
            <td>{last_name}</td>
          </tr>
          <tr>
            <td>Team</td>
            <td>Placeholder</td>
          </tr>
          <tr>
            <td>Dietary Restrictions</td>
            <td>{dietary_requirement}</td>
          </tr>
        </tbody>
      </Table>
    </Card>
  );
};

export default InfoCard;
