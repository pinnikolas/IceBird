import Head from "next/head";
import { FC } from "react";

const Messenger:FC = () => {
  return ( 
    <div className="messenger">
      <Head>
        <title>Messenger</title>
      </Head>
      <h1 className="messenger__title">messenger will be here</h1>
    </div>
   );
}
 
export default Messenger;