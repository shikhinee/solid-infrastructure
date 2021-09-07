//Next, React (core node_modules) imports must be placed here
import axios from "axios";
//Fetchers must be imported here
//import useFETCHER from 'tools/useFETCHER'
import { useProject } from "@/tools/useProject";

//Layout must be imported here
//import LAYOUT from 'layouts/LAYOUT'
import DashboardLayout from "@/layouts/Dashboard";
import PrimaryLink from "@/components/PrimaryLink";
import SecondaryButton from "@/components/SecondaryButton";

//Component must be imported here
//import COMPONENT from 'components/COMPONENT'

const ListPage = (props) => {
  const { data, mutate, isLoading, isError } = useProject();

  if (isLoading) return null;

  return (
    <main>
      {data.data.map((project, index) => {
        return (
          <div key={index} style={{ margin: "5em" }}>
            <div>COMPANY NAME: {project.companyName}</div>
            <div>PROJECT NAME: {project.projectName}</div>
            <div>ISON: {project.isOn}</div>
            <div>DATE STARTED: {project.dateStarted}</div>
            <div>DATE COMPLETED: {project.dateCompleted}</div>
            <div>DATE DEADLINE: {project.deadline}</div>
            <div>PROJECT LEAD: {project.lead}</div>
            <div>
              USERS:
              {project.users.map((user, index) => {
                return <span key={index}>{user}</span>;
              })}
            </div>
            <div>{project.isOn}</div>
            <div>{project.isOn}</div>
            <PrimaryLink href={`/dashboard/project/${project._id}`}>
              Edit
            </PrimaryLink>
            <SecondaryButton
              onClick={() => {
                axios.delete(`/api/project/${project._id}`);
                mutate();
              }}
            >
              DELETE HAHAHAH
            </SecondaryButton>
          </div>
        );
      })}
    </main>
  );
};

ListPage.Layout = DashboardLayout;

export default ListPage;
