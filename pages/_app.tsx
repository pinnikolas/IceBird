import Layout from "../components/Layout/Layout";
import { Provider } from "react-redux";
import store from "../store";
import "../styles/global.scss";

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default App;
