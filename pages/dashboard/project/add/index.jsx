//Next, React (core node_modules) imports must be placed here
import { useState } from "react";
import axios from "axios";
//Fetchers must be imported here
//import useFETCHER from 'tools/useFETCHER'

//Layout must be imported here
//import LAYOUT from 'layouts/LAYOUT'
import DashboardLayout from "@/layouts/Dashboard";
import StyledForm from "@/components/StyledForm";
import PrimaryButton from "@/components/PrimaryButton";

//Component must be imported here
//import COMPONENT from 'components/COMPONENT'

const AddPage = (props) => {
  const [formData, setFormData] = useState({
    projectName: "",
    companyName: "",
    lead: "",
    deadline: "",
    users: ["lmao69", "shikhi69", "shikhiBasement69"],
  });

  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/project", formData);
  };

  return (
    <main>
      <StyledForm onSubmit={handleSubmit}>
        {/* project name, company name, lead, users */}
        <div>
          <label htmlFor="projectName">projectName</label>
          <input
            type="text"
            name="projectName"
            id="projectName"
            onChange={handleInput}
            required
          />
        </div>
        <div>
          <label htmlFor="companyName">companyName</label>
          <input
            type="text"
            name="companyName"
            id="companyName"
            onChange={handleInput}
            required
          />
        </div>
        <div>
          <label htmlFor="lead">lead</label>
          <input
            type="text"
            name="lead"
            id="lead"
            onChange={handleInput}
            required
          />
        </div>
        <div>
          <label htmlFor="deadline">lead</label>
          <input
            type="date"
            name="deadline"
            id="deadline"
            onChange={handleInput}
            required
          />
        </div>
        <PrimaryButton>Нэмэх</PrimaryButton>
      </StyledForm>
    </main>
  );
};

AddPage.Layout = DashboardLayout;

// AddPage.getLayout = (page) => {
//   return <DashboardLayout>{page}</DashboardLayout>;
// };

export default AddPage;
