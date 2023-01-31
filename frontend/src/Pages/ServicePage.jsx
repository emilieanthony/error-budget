import { useParams } from "react-router-dom";

function ServicePage() {
  const { serviceId } = useParams();
  return <h1>{serviceId}</h1>;
}

export default ServicePage;
