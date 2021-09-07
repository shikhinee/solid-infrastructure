//Next, React (core node_modules) imports must be placed here
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

//Fetchers must be imported here
//import useFETCHER from 'tools/useFETCHER'
import { useProjectById } from "@/tools/useProject";

//Layout must be imported here
//import LAYOUT from 'layouts/LAYOUT'
import DashboardLayout from "@/layouts/Dashboard";
import StyledForm from "@/components/StyledForm";
import PrimaryButton from "@/components/PrimaryButton";

//Component must be imported here
//import COMPONENT from 'components/COMPONENT'

const ProjectDetailPage = (props) => {
  const router = useRouter();

  const { id } = router.query;
  const { data, isLoading, isError } = useProjectById(id);
  const [formData, setFormData] = useState({});

  if (isLoading) return null;

  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      ...data.data,
      ...formData,
    });

    axios.put(`/api/project/${id}`, formData);
  };

  return (
    <main>
      <StyledForm onSubmit={handleSubmit}>
        <div>
          <label htmlFor="projectName">projectName</label>
          <input
            type="text"
            name="projectName"
            id="projectName"
            onChange={handleInput}
            defaultValue={data.data.projectName}
            required
          />
        </div>
        <div>
          <label htmlFor="companyName">companyName</label>
          <input
            type="text"
            name="companyName"
            id="companyName"
            checked={data.data.isOn}
            onChange={handleInput}
            defaultValue={data.data.companyName}
            required
          />
        </div>
        <div>
          <label htmlFor="isComplete">isComplete</label>
          <input
            type="checkbox"
            id="isComplete"
            name="isComplete"
            onChange={handleInput}
            defaultChecked={data.data.isComplete}
          />
        </div>
        <div>
          <label htmlFor="isOn">isOn</label>
          <input
            type="checkbox"
            id="isOn"
            name="isOn"
            defaultChecked={data.data.isOn}
            onChange={handleInput}
          />
        </div>
        <div>
          <label htmlFor="lead">lead</label>
          <input
            type="text"
            name="lead"
            id="lead"
            onChange={handleInput}
            defaultValue={data.data.lead}
            required
          />
        </div>
        <div>
          <label htmlFor="deadline">Deadline</label>
          <input
            type="date"
            name="deadline"
            id="deadline"
            onChange={handleInput}
            defaultValue={
              data.data.deadline
                ? new Date(data.data.deadline).toISOString().substring(0, 10)
                : null
            }
            required
          />
        </div>
        <div>
          <label htmlFor="dateCompleted">dateCompleted</label>
          <input
            type="date"
            name="dateCompleted"
            id="dateCompleted"
            onChange={handleInput}
            defaultValue={
              data.data.dateCompleted
                ? new Date(data.data.dateCompleted).toISOString().substring(0, 10)
                : null
            }
          />
        </div>
        <PrimaryButton>Хадгалах</PrimaryButton>
      </StyledForm>
    </main>
  );
};

ProjectDetailPage.Layout = DashboardLayout;

export default ProjectDetailPage;
