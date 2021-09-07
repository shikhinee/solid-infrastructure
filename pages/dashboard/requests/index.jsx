//Next, React (core node_modules) imports must be placed here
import { useEffect, useState } from "react";
import axios from "axios";
//Fetchers must be imported here
//import useFETCHER from 'tools/useFETCHER'
import { useRequests } from "@/tools/useRequests";

//Layout must be imported here
//import LAYOUT from 'layouts/LAYOUT'
import DashboardLayout from "@/layouts/Dashboard";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";

//Component must be imported here
//import COMPONENT from 'components/COMPONENT'

const RequestsPage = (props) => {
  const [actionTriggerCount, setActionTriggerCount] = useState(0);
  const { data, isLoading, isError } = useRequests();

  if (isLoading) return null;

  const handleAccept = (id) => {
    axios.put(`/api/request/${id}`, {
      role: {
        name: "Developer",
        isFounder: false,
      },
    });
    setActionTriggerCount(actionTriggerCount + 1);
  };

  const handleDeny = (id) => {
    axios.delete(`/api/request/${id}`);
    setActionTriggerCount(actionTriggerCount + 1);
  };

  return (
    <main>
      {actionTriggerCount}
      {data.data.map((request, index) => {
        return (
          <div key={index} style={{ margin: "5em" }}>
            <div>{request.fullname}</div>
            <div>{request.username}</div>
            <div>{request.phoneNumber}</div>
            <PrimaryButton onClick={() => handleAccept(request._id)}>
              Accept
            </PrimaryButton>
            <SecondaryButton onClick={() => handleDeny(request._id)}>
              Deny
            </SecondaryButton>
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
