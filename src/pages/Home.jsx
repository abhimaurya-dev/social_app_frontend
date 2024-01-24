import { useState } from "react";
import Login from "../features/login/Login";
import SignUp from "../features/signUp/SignUp";
import Modal from "../layout/Modal";
import Footer from "../layout/Footer";

const Home = () => {
  const [createNewAccount, setCreateNewAccount] = useState(false);

  const createNewAccountHandler = () => {
    setCreateNewAccount(true);
  };

  const closeModalHandler = () => {
    setCreateNewAccount(false);
  };

  return (
    <>
      <div className="bg-custom-white lg:flex lg:justify-center h-[80vh] md:h-[78vh] w-[100vw]">
        <Login createNewAccountHandler={createNewAccountHandler} />
        {createNewAccount && (
          <Modal
            materialIconName={"close"}
            closeModalHandler={closeModalHandler}
          >
            <SignUp />
          </Modal>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Home;
