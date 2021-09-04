import { Fragment } from "react";

import ThemeLayout from "layouts/Theme";

import { ThemeContextProvider } from "store/ThemeContext";

import "sass/app.scss";

const App = ({ Component, pageProps }) => {
  // const getLayout = Component.getLayout || ((page) => page);
  const Layout = Component.Layout ? Component.Layout : Fragment;
  return (
    <ThemeContextProvider>
      <ThemeLayout>
        {
          // getLayout(
          <Layout>
            <Component {...pageProps} />
          </Layout>
          // )
        }
      </ThemeLayout>
    </ThemeContextProvider>
  );
};

export default App;
