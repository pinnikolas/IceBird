import Layout from "../components/Layout/Layout";
import "../styles/global.scss";

import { Provider } from "react-redux";
import store from "../store";

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
