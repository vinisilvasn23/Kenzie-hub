import { RoutesMain } from "./routes/RoutesMain";
import { GlobalStyle } from "./styles/global";
import { ResetStyle } from "./styles/reset";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-icons/fi";
import Modal from "react-modal";
import { useContext } from "react";
import { UserContext } from "./provider/UserContext";
import { Loading } from "./components/Loading/Loading";

Modal.setAppElement("#root");

export const App = () => {
  const { loading } = useContext(UserContext);

  return (
    <div className="App">
      <GlobalStyle />
      <ResetStyle />
      <ToastContainer />
      {loading ? <Loading /> : <RoutesMain />}
    </div>
  );
};
