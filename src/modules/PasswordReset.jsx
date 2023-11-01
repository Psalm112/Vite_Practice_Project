import PasswordResetForm from "../components/PasswordResetForm";

function PasswordReset({ setIsOtp, isOtp, setForgetPassword, forgotPassword }) {
  return (
    <>
      <PasswordResetForm
        setIsOtp={setIsOtp}
        isOtp={isOtp}
        setForgetPassword={setForgetPassword}
        forgotPassword={forgotPassword}
      />
    </>
  );
}

export default PasswordReset;
