//Next, React (core node_modules) imports must be placed here
import { useState } from "react";

import axios from "axios";
//Fetchers must be imported here
//import useFETCHER from 'tools/useFETCHER'

//Layout must be imported here
//import LAYOUT from 'layouts/LAYOUT'
import SignupLayout from "@/layouts/Signup";

//Component must be imported here
//import COMPONENT from 'components/COMPONENT'
import StyledForm from "@/components/StyledForm";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryLink from "@/components/SecondaryLink";

const SignupPage = (props) => {
  const [formIsSent, setFormIsSent] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    fullname: "",
    phoneNumber: "",
    password: "",
  });

  const handleInputFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormIsSent(true);

    axios.post("/api/request", formData);
  };

  return (
    <SignupLayout>
      <main>
        {(formIsSent && <h1>WE WILL NOTIFY YOU SOON</h1>) || (
          <StyledForm onSubmit={handleSubmit}>
            <h1>Бүртгүүлэх</h1>
            <div>
              <label htmlFor="username">Хэрэглэгчийн нэр</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Хэрэглэгчийн нэр"
                required
                onChange={handleInputFormData}
              />
            </div>
            <div>
              <label htmlFor="fullname">Овог нэр</label>
              <input
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Овог нэр"
                onChange={handleInputFormData}
                required
              />
            </div>
            <div>
              <label htmlFor="phonenumber">Утасны дугаар</label>
              <input
                type="text"
                name="phoneNumber"
                id="phonenumber"
                placeholder="Утасны дугаар"
                onChange={handleInputFormData}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Нууц үг</label>
              <input
                type="password"
                name="password"
                id="password"
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
            <PrimaryButton>Хүсэлт явуулах</PrimaryButton>
            <SecondaryLink href="/login">Нэвтрэх</SecondaryLink>
          </StyledForm>
        )}
      </main>
    </SignupLayout>
  );
};

export default SignupPage;
