import Router from "next/router";
import { useState, Fragment } from "react";

import TimeLogLayout from "layouts/TimeLog";

// import TestField from "components/TestField";

import PrimaryButton from "components/PrimaryButton";
import PrimaryLink from "components/PrimaryLink";
import TimeLog from "composites/TimeLog";

const RootPage = (props) => {
  const [isUser, setIsUser] = useState(true);
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegistration = () => {
    if (!isUser) {
      Router.push("/login");
    }

    if (!isRegistered) {
      setIsRegistered(true);
    }
  };

  return (
    <TimeLogLayout>
      <main>
        {/* <TestField>
          <div>isUser: {`${isUser}`}</div>
          <div>isRegistered: {`${isRegistered}`}</div>
        </TestField> */}

        <h1>
          <span>Solid</span>
          <span>Infrastructure</span>
        </h1>
        {!isRegistered && (
          <PrimaryButton onClick={handleRegistration}>
            Цаг бүртгүүлэх
          </PrimaryButton>
        )}

        {isRegistered && (
          <Fragment>
            <TimeLog />
            <PrimaryLink href="/dashboard">Dashboard</PrimaryLink>
          </Fragment>
        )}
      </main>
    </TimeLogLayout>
  );
};

export default RootPage;
