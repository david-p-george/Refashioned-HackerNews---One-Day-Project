import "../styles/globals.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} /> // This is the 'children' prop getting passed
      to the Layout component.
    </Layout>
  );
}

export default MyApp;
