import Home from "./components/Home";
import Practice from "./components/Practice";
import { Page, useAppContext } from "./hooks/useAppContext";

const App = () => {
  const { page } = useAppContext();

  return (
    <>
      {page === Page.HOME && <Home />}
      {page === Page.PRACTICE && <Practice />}
    </>
  );
};

export default App;
