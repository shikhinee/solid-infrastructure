//Next, React (core node_modules) imports must be placed here
import { useState } from "react";

import styled from "styled-components";

//Styles must be imported here
import styles from "./Dashboard.module.scss";

//Components must be imported here
import SideNavigation from "@/views/Dashboard/SideNavigation";
import Header from "@/views/Dashboard/Header";

import { User } from "@styled-icons/boxicons-solid/User";
import { Edit } from "@styled-icons/boxicons-solid/Edit";
import { Bank } from "@styled-icons/boxicons-solid/Bank";
import { UserDetail } from "@styled-icons/boxicons-solid/UserDetail";
import { Folder } from "@styled-icons/boxicons-solid/Folder";
import { FolderPlus } from "@styled-icons/boxicons-solid/FolderPlus";
import { FolderOpen } from "@styled-icons/boxicons-solid/FolderOpen";

const IconWrapper = (Icon) => {
  const StyledIcon = styled(Icon)`
    color: inherit;
    width: 100%;
    max-width: 2em;
    min-width: 2em;
    height: 100%;
    max-height: 2em;
    min-height: 2em;
    margin-right: 1em;
  `;

  return <StyledIcon />;
};

const rootPath = "/dashboard"

const Routes = {
  profile: {
    title: "Хувийн Мэдээлэл",
    icon: IconWrapper(User),
    route: `${rootPath}/user`,
    subRoutes: [
      {
        title: "Нууц үг солих",
        icon: IconWrapper(Edit),
        route: `${rootPath}/user/change-pass`,
      },
      {
        title: "Банкны мэдээлэл",
        icon: IconWrapper(Bank),
        route: `${rootPath}/user/bank-info`,
      },
    ],
  },

  request: {
    title: "Хэрэглэгчийн хүсэлтүүд",
    icon: IconWrapper(UserDetail),
    route: `${rootPath}/requests`,
  },

  project: {
    title: "Төсөл",
    icon: IconWrapper(Folder),
    route: `${rootPath}/project`,
    subRoutes: [
      {
        title: "Төсөл жагсаалт",
        icon: IconWrapper(FolderOpen),
        route: `${rootPath}/project/list`,
      },
      {
        title: "Төсөл нэмэх",
        icon: IconWrapper(FolderPlus),
        route: `${rootPath}/project/add`,
      },
    ],
  },
};

const DashboardLayout = ({ children }) => {
  const [menuIsCollapsed, setMenuIsCollapsed] = useState(false);
  const handleCollapse = () => {
    setMenuIsCollapsed(!menuIsCollapsed);
  };
  return (
    <div className={styles.container}>
      <SideNavigation
        isCollapsed={menuIsCollapsed}
        routes={Routes}
        role="manager"
      />

      <div className={styles.content}>
        <Header handleCollapse={handleCollapse} routes={Routes} isCollapsed={menuIsCollapsed}/>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
