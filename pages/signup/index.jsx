//Next, React (core node_modules) imports must be placed here

//Fetchers must be imported here
//import useFETCHER from 'tools/useFETCHER'

//Layout must be imported here
//import LAYOUT from 'layouts/LAYOUT'
import SignupLayout from "layouts/Signup";

//Component must be imported here
//import COMPONENT from 'components/COMPONENT'
import StyledForm from "components/StyledForm";
import PrimaryButton from "components/PrimaryButton";
import SecondaryLink from "components/SecondaryLink";

const SignupPage = (props) => {
  return (
    <SignupLayout>
      <main>
        <StyledForm>
          <h1>Бүртгүүлэх</h1>
          <div>
            <label htmlFor="username">Хэрэглэгчийн нэр</label>
            <input type="text" id="username" placeholder="Хэрэглэгчийн нэр" />
          </div>
          <div>
            <label htmlFor="fullname">Овог нэр</label>
            <input type="text" id="fullname" placeholder="Овог нэр" />
          </div>
          <div>
            <label htmlFor="phonenumber">Утасны дугаар</label>
            <input type="text" id="phonenumber" placeholder="Утасны дугаар" />
          </div>
          <div>
            <label htmlFor="password">Нууц үг</label>
            <input type="password" id="password" placeholder="Нууц үг" />
          </div>
          <div>
            <label htmlFor="passwordconfirm">Нууц үг давтах</label>
            <input type="password" id="passwordconfirm" placeholder="Нууц үг" />
          </div>
          <PrimaryButton>Хүсэлт явуулах</PrimaryButton>
          <SecondaryLink href="/login">Нэвтрэх</SecondaryLink>
        </StyledForm>
      </main>
    </SignupLayout>
  );
};

export default SignupPage;
