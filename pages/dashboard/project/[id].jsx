//Next, React (core node_modules) imports must be placed here
import { useRouter } from "next/router";

//Fetchers must be imported here
//import useFETCHER from 'tools/useFETCHER'

//Layout must be imported here
//import LAYOUT from 'layouts/LAYOUT'
import DashboardLayout from "@/layouts/Dashboard";

//Component must be imported here
//import COMPONENT from 'components/COMPONENT'

const ProjectDetailPage = (props) => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id)
  return <main>THIS IS THE PROJECT DETAIL PAGE OF {id}</main>;
};

ProjectDetailPage.Layout = DashboardLayout;

export default ProjectDetailPage;
