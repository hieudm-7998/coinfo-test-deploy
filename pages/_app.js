// import Layout from "../components/layout";
// import { ChakraProvider } from "@chakra-ui/react";
import "../styles/boxicons.min.css";
import "../styles/bootstrap-icons.css";
import "../styles/slick.css";
import "../styles/bootstrap.min.css";
import "../styles/animate.css";
import "../styles/style.css";
import "../styles/responsive.css";
import "../styles/custom.css";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
