//Next, React (core node_modules) imports must be placed here
import { useState } from "react";
import axios from "axios";
//Fetchers must be imported here
//import useFETCHER from 'tools/useFETCHER'

//Layout must be imported here
//import LAYOUT from 'layouts/LAYOUT'
import PrimaryButton from "@/components/PrimaryButton";
import StyledForm from "@/components/StyledForm";
import DashboardLayout from "layouts/Dashboard";

//Component must be imported here
//import COMPONENT from 'components/COMPONENT'

const BankInfoPage = (props) => {
  const [formData, setFormData] = useState({
    bankName: "",
    bankNumber: "",
  });

  const handleInputFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put("/api/updatebank/6135b6521b595cb8b38c8a03", formData);
  };

  return (
    <main>
      <StyledForm onSubmit={handleSubmit}>
        <div>
          <label htmlFor="bankName">bankName</label>
          <input
            type="text"
            id="bankName"
            name="bankName"
            placeholder="bankName"
            onChange={handleInputFormData}
          />
        </div>
        <div>
          <label htmlFor="bankNumber">bankNumber</label>
          <input
            type="text"
            id="bankNumber"
            name="bankNumber"
            placeholder="bankNumber"
            onChange={handleInputFormData}
          />
        </div>
        <PrimaryButton>Хадгалах</PrimaryButton>
      </StyledForm>
    </main>
  );
};

BankInfoPage.Layout = DashboardLayout;

// BankInfoPage.getLayout = (page) => {
//   return <DashboardLayout>{page}</DashboardLayout>;
// };

export default BankInfoPage;
