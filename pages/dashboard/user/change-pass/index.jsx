//Next, React (core node_modules) imports must be placed here

//Fetchers must be imported here
//import useFETCHER from 'tools/useFETCHER'

import PrimaryButton from "@/components/PrimaryButton";
import StyledForm from "@/components/StyledForm";
import axios from "axios";

//Layout must be imported here
//import LAYOUT from 'layouts/LAYOUT'
import DashboardLayout from "layouts/Dashboard";
import { useState } from "react";

//Component must be imported here
//import COMPONENT from 'components/COMPONENT'

const ChangePassPage = (props) => {
  const [formData, setFormData] = useState({
    oldPass: "",
    newPass: "",
  });

  const handleInputFormData = (e) => {
    console.log([e.target.name], e.target.value);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    axios.put("/api/changepassword/6135b6521b595cb8b38c8a03", formData);
  };

  return (
    <main>
      <StyledForm onSubmit={handleSubmit}>
        <div>
          <label htmlFor="newPass">Шинэ Нууц үг</label>
          <input
            type="password"
            name="newPass"
            id="newPass"
            placeholder="Нууц үг"
            onChange={handleInputFormData}
            required
          />
        </div>
        <div>
          <label htmlFor="oldPass">Одоогийн нууц үг</label>
          <input
            type="password"
            name="oldPass"
            id="oldPass"
            placeholder="Нууц үг"
            onChange={handleInputFormData}
            required
          />
        </div>
        <div>
          <label htmlFor="passwordconfirm">Нууц үг давтах</label>
          <input
            type="password"
            name="passwordconfirm"
            id="passwordconfirm"
            placeholder="Нууц үг"
          />
        </div>
        <PrimaryButton>Хадгалах</PrimaryButton>
      </StyledForm>
    </main>
  );
};

ChangePassPage.Layout = DashboardLayout;

export default ChangePassPage;
