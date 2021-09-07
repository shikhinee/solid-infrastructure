//Next, React (core node_modules) imports must be placed here

import StyledForm from "@/components/StyledForm";

//Fetchers must be imported here
//import useFETCHER from 'tools/useFETCHER'

//Layout must be imported here
//import LAYOUT from 'layouts/LAYOUT'

//Component must be imported here
//import COMPONENT from 'components/COMPONENT'

const TaskPage = (props) => {
  const { data, isLoading, isError } = useProject();

  if (isLoading) return null;

  console.log(data);

  return (
    <main>
    </main>
  );
};

export default TaskPage;
