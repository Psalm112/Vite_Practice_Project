import { useState } from "react";
import Illustration from "../components/Illustration";
import LoginForm from "../components/LoginForm";
import PasswordReset from "./PasswordReset";
// import Form from "../components/Form";

function Login() {
    const [forgotPassword, setForgetPassword] = useState<boolean>(false);
    const [isOtp, setIsOtp] = useState<boolean>(false);

    return (
        <>
            <div className="flex flex-row">
                <Illustration isLogin={true} />
                {/* <Form h1Text="travel Captures" isLogin={true} /> */}
                <div className="w-full h-screen bg-[url('./assets/Photographer-Tr-0-.webp')] bg-cover bg-no-repeat bg-[30%_50%] md:bg-none">
                    <div className="my-[auto] h-full flex flex-col items-center justify-center gap-y-5 bg-black/[0.8] md:bg-black/[0.87]">
                        <h1 className="text-offwhite font-medium text-3xl mb-[2vh] relative after:content-[''] after:absolute after:bottom-[-5px] after:right-[-5px] after:block after:h-[50%] after:w-[30%] after:border-[#00bbba] after:border-solid after:border-b-[1px] after:border-r-[1px] after:animate-[fillIn_1s_linear] before:content-[''] before:absolute before:top-[-5px] before:left-[-5px] before:block before:h-[50%] before:w-[30%] before:border-[#00bbba] before:border-solid before:border-t-[1px] before:border-l-[1px] before:animate-[fillIn_1s_linear] md:mb-[10vh] md:text-5xl">
                            travel Captures
                        </h1>
                        <p className="max-w-[80%] text-offwhite font-light text-base md:hidden">
                            Capture your personal memories in a unique way, anywhere.
                        </p>
                        {!forgotPassword ? (
                            <LoginForm
                                setIsOtp={setIsOtp}
                                setForgetPassword={setForgetPassword}
                                forgotPassword={forgotPassword}
                            />
                        ) : (
                            <PasswordReset
                                setIsOtp={setIsOtp}
                                isOtp={isOtp}
                                setForgetPassword={setForgetPassword}
                                forgotPassword={forgotPassword}
                            />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
export default Login;
