import Illustration from "../components/Illustration";
import Form from "../components/Form";

function Register() {
  return (
    <>
      <div className="flex flex-row">
        <Illustration isLogin={false} />
        <Form h1Text="Welcome to Travel Captures" isLogin={false} />
      </div>
    </>
  );
}

export default Register;
