//Next, React (core node_modules) imports must be placed here

//Fetchers must be imported here
//import useFETCHER from 'tools/useFETCHER'

//Layout must be imported here
//import LAYOUT from 'layouts/LAYOUT'

//Component must be imported here
//import COMPONENT from 'components/COMPONENT'

import Menu from "@/composites/Menu";
import NestedList from "@/components/NestedList";

const Routes = {
  profile: {
    title: "Хувийн Мэдээлэл",
    route: "/user",
    subRoutes: [
      {
        title: "Нууц үг солих",
        route: "/change-pass",
      },
      {
        title: "Банкны мэдээлэл",
        route: "/bank-information",
      },
    ],
  },

  request: {
    title: "Хэрэглэгчийн хүсэлтүүд",
    route: "/requests",
  },

  project: {
    title: "Төсөл",
    route: "/project",
    subRoutes: [
      {
        title: "Төсөл нэмэх",
        route: "/add",
      },
      {
        title: "Төсөл жагсаалт",
        route: "/list",
      },
    ],
  },
};

const TestPage = (props) => {
  return (
    <main>
      <Menu routes={Routes} />
      <NestedList head="NESTED LIST 1">
        <li>NESTED LIST ITEM 1</li>
        <li>NESTED LIST ITEM 1</li>
        <NestedList head="NESTED LIST 2">
          <li>NESTED LIST ITEM 2</li>
          <li>NESTED LIST ITEM 2</li>
        </NestedList>
        <li>NESTED LIST ITEM 1</li>
      </NestedList>
    </main>
  );
};

export default TestPage;
