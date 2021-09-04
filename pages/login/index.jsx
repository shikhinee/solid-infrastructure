//Next, React (core node_modules) imports must be placed here

//Fetchers must be imported here
//import useFETCHER from 'tools/useFETCHER'

//Layout must be imported here
//import LAYOUT from 'layouts/LAYOUT'
import LoginLayout from "layouts/Login";

//Component must be imported here
//import COMPONENT from 'components/COMPONENT'
import StyledForm from "components/StyledForm";
import PrimaryButton from "components/PrimaryButton";
import SecondaryLink from "components/SecondaryLink";

const LoginPage = (props) => {
  return (
    <LoginLayout>
      <main>
        <StyledForm>
          <h1>Нэвтрэх</h1>
          <div>
            <label htmlFor="username">Хэрэглэгчийн нэр</label>
            <input type="text" id="username" placeholder="Хэрэглэгчийн нэр" />
          </div>
          <div>
            <label htmlFor="password">Нууц үг</label>
            <input type="password" id="password" placeholder="Нууц үг" />
          </div>
          <PrimaryButton>Нэвтрэх</PrimaryButton>
          <SecondaryLink href="/signup">Бүртгүүлэх</SecondaryLink>
        </StyledForm>
      </main>
    </LoginLayout>
  );
};

export default LoginPage;
