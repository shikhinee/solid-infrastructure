//Next, React (core node_modules) imports must be placed here
import { useSession, signIn, signOut } from "next-auth/client";

//Fetchers must be imported here
//import useFETCHER from 'tools/useFETCHER'

//Layout must be imported here
//import LAYOUT from 'layouts/LAYOUT'

//Component must be imported here
//import COMPONENT from 'components/COMPONENT'

const NextauthPage = (props) => {
  const session = useSession();

  console.log("CLIENT SESSION:", session)

  // if (session[1]) {
  //   return (
  //     <>
  //       {/* Signed in as {session.user.email} <br /> */}
  //       <button onClick={() => signOut()}>Sign out</button>
  //     </>
  //   );
  // }

  return (
    <main>
      <button onClick={() => signIn()}>Sign in</button>
    </main>
  );
};

export default NextauthPage;
