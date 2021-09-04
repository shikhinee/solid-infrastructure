import { useState, Fragment, useEffect } from "react";
import axios from "axios";

import TimeLogLayout from "layouts/TimeLog";

import PrimaryButton from "components/PrimaryButton";
import PrimaryLink from "components/PrimaryLink";
import TimeLog from "composites/TimeLog";

import { useTimeLog } from "@/tools/useTimeLog";

const RootPage = (props) => {
  const [registerInitiated, setRegisterInitiated] = useState(false);

  const {
    data: initialData,
    isLoading: initialLoading,
    isError: initialIsError,
  } = useTimeLog("6131f2c3f5380cdd95595760");

  if (initialLoading) return null;

  const handleRegistration = () => {
    axios.post("/api/timelog/6131f2c3f5380cdd95595760");

    setRegisterInitiated(true);
  };

  return (
    <TimeLogLayout>
      <main>
        <h1>
          <span>Solid</span>
          <span>Infrastructure</span>
        </h1>
        {((initialData.isRegistered || registerInitiated) && (
          <Fragment>
            <TimeLog />
            <PrimaryLink href="/dashboard">Dashboard</PrimaryLink>
          </Fragment>
        )) || (
          <PrimaryButton onClick={handleRegistration}>
            Цаг Бүртгүүлэх
          </PrimaryButton>
        )}
      </main>
    </TimeLogLayout>
  );
};

export default RootPage;
