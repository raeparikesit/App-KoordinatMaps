import { Card } from "react-bootstrap";
import AddressTable from "../components/address/AddressTable";

const Home = () => {
  return (
    <section>
      <h2 className="text-center">List Koordinat</h2>
      <Card>
        <Card.Header>Alamat</Card.Header>
        <Card.Body>
          <div className="row">
            <div className="col-md-12">
              <AddressTable />
            </div>
          </div>
        </Card.Body>
      </Card>
    </section>
  );
};

export default Home;
