//Next, React (core node_modules) imports must be placed here

//Fetchers must be imported here
//import useFETCHER from 'tools/useFETCHER'

//Layout must be imported here
//import LAYOUT from 'layouts/LAYOUT'
import DashboardLayout from "@/layouts/Dashboard";

//Component must be imported here
//import COMPONENT from 'components/COMPONENT'

const AddPage = (props) => {
  return <main>THIS IS THE PROJECT ADD PAGE</main>;
};

AddPage.Layout = DashboardLayout;

// AddPage.getLayout = (page) => {
//   return <DashboardLayout>{page}</DashboardLayout>;
// };

export default AddPage;