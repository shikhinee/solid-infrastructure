//Next, React (core node_modules) imports must be placed here

import PrimaryButton from "@/components/PrimaryButton";
import StyledForm from "@/components/StyledForm";

//Fetchers must be imported here
//import useFETCHER from 'tools/useFETCHER'
import { useProject } from "@/tools/useProject";
import { useState } from "react";

//Layout must be imported here
//import LAYOUT from 'layouts/LAYOUT'

//Component must be imported here
//import COMPONENT from 'components/COMPONENT'

const CreateTaskPage = (props) => {
  const { data, isLoading, isError } = useProject();
  const [formData, setFormData] = useState({
    projectID: "",
    userID: "6131ef7ff5380cdd9559572c",
    username: "gbgawd",
    fullname: "Gelegbalsan Boldbaatar",
    content: null,
  });

  if (isLoading) return null;

  const handleInput = (e) => {
    console.log(e);
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <main>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="projectID">Project</label>
        <select
          style={{ width: "200px", height: "50px" }}
          name="projectID"
          id="projectID"
		  value={formData.projectID}
          onChange={handleInput}
          required
        >
          <option value="" disabled selected>DUDE CHOOSE STH</option>
          {data.data.map((project) => {
            return (
              <option key={project._id} value={project._id}>
                {project.projectName}
              </option>
            );
          })}
        </select>
        <label htmlFor="content">TASK</label>
        <input type="text" name="content" id="content" onChange={handleInput} />
        <PrimaryButton>Шаана</PrimaryButton>
      </StyledForm>
    </main>
  );
};

export default CreateTaskPage;
