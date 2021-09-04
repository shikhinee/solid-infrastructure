import Head from "next/head";

import ThemeLayout from "layouts/Theme";

import { ThemeContextProvider } from "store/ThemeContext";

import "sass/app.scss";

const App = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <ThemeContextProvider>
      <ThemeLayout>{getLayout(<Component {...pageProps} />)}</ThemeLayout>
    </ThemeContextProvider>
  );
};

export default App;
