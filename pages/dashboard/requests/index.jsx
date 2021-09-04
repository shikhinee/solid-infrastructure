//Next, React (core node_modules) imports must be placed here

//Fetchers must be imported here
//import useFETCHER from 'tools/useFETCHER'
import { useRequests } from "@/tools/useRequests";

//Layout must be imported here
//import LAYOUT from 'layouts/LAYOUT'
import DashboardLayout from "@/layouts/Dashboard";

//Component must be imported here
//import COMPONENT from 'components/COMPONENT'

const RequestsPage = (props) => {
  const { data, isLoading, isError } = useRequests();

  if (isLoading) return null;

  console.log(data.data);

  return (
    <main>
      {data.data.map((request, index) => {
        return (
          <div key={index} style={{margin: "5em"}}>
            <div>{request.fullname}</div>
            <div>{request.username}</div>
            <div>{request.phoneNumber}</div>
          </div>
        );
      })}
    </main>
  );
};

RequestsPage.Layout = DashboardLayout;

// RequestsPage.getLayout = (page) => {
//   return <DashboardLayout>{page}</DashboardLayout>;
// };

export default RequestsPage;
