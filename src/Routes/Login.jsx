import Illustration from "../components/Illustration";
import Form from "../components/Form";
import { HStack, Input, PinInput, PinInputField } from "@chakra-ui/react";

function Login() {
  return (
    <>
      <div className="flex flex-row">
        <Illustration isLogin={true} />
        <Form h1Text="travel Captures" isLogin={true} />
        {/* <form className="mb-5 max-w-[308px]">
          
        </form> */}
      </div>
    </>
  );
}
export default Login;
