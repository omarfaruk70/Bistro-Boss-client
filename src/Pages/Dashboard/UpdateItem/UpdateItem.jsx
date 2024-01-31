import { useLoaderData} from "react-router-dom";
import Sectiontitle from "../../../components/SectionTitle/SectionTitle";

const UpdateItem = () => {
  const data = useLoaderData();
  console.log(data);
   
    return (
        <div>
           <Sectiontitle heading={'Update An Item'} subheading='Need Modify  ? '></Sectiontitle>
        </div>
    );
};

export default UpdateItem;