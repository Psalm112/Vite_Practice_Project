import Illustration from "../components/Illustration";
import RegisterForm from "../components/RegisterForm";

function Register() {
    return (
        <>
            <div className="flex flex-row">
                <Illustration isLogin={false} />
                <div className="w-full min-h-screen bg-[url('./assets/Photographer-Tr-0-.webp')] bg-cover bg-no-repeat bg-[30%_50%] md:bg-none md:h-screen md:min-h-[unset]">
                    <div className="my-[auto] min-h-screen flex flex-col items-center justify-center gap-y-5 bg-black/[0.8] md:justify-center md:bg-black/[0.87] md:h-screen md:min-h-[unset]">
                        <h1 className="text-offwhite font-medium text-3xl mb-[2vh] w-[80%] text-center  md:mt-[0vh] md:w-[30%]">
                            Welcome to Travel Captures
                        </h1>
                        <p className="max-w-[80%] text-offwhite font-light text-base md:hidden">
                            Capture your personal memories in a unique way, anywhere.
                        </p>
                        <RegisterForm />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;
