import { useParams } from "react-router-dom";

const Resume = () => {
  const { id } = useParams();

  return <div>Resume {id}</div>;
};

export default Resume;
