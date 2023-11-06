import { Dispatch, SetStateAction } from 'react'
import PasswordResetForm from "../components/PasswordResetForm";

type PasswordResetProps = {
    setIsOtp: Dispatch<SetStateAction<boolean>>;
    isOtp: boolean;
    setForgetPassword: Dispatch<SetStateAction<boolean>>;
    forgotPassword: boolean;
}
function PasswordReset({ setIsOtp, isOtp, setForgetPassword, forgotPassword }: PasswordResetProps) {
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
