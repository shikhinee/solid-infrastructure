//Next, React (core node_modules) imports must be placed here

//Fetchers must be imported here
//import useFETCHER from 'tools/useFETCHER'

//Layout must be imported here
//import LAYOUT from 'layouts/LAYOUT'
import DashboardLayout from "layouts/Dashboard";

//Component must be imported here
//import COMPONENT from 'components/COMPONENT'

const DashboardPage = (props) => {
  return <main>this is dashboard</main>;
};

DashboardPage.Layout = DashboardLayout;

// DashboardPage.getLayout = (page) => {
//   return <DashboardLayout>{page}</DashboardLayout>;
// };

export default DashboardPage;
