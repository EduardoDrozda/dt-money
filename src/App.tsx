import Modal from "react-modal";

import { GlobalStyle } from "./styles/global";
import { Routes } from "./routes";
import { Layout } from "./shared/components/Layout";
import { ModalProvider } from "./shared/contexts/ModalContext";

Modal.setAppElement("#root");

function App() {
  return (
    <>
      <GlobalStyle />
      <ModalProvider>
        <Layout>
          <Routes />
        </Layout>
      </ModalProvider>
    </>
  );
}

export default App;
