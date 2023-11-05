import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Input,
  InputRightElement,
  Button,
  InputGroup,
  HStack,
  PinInput,
  PinInputField,
} from "@chakra-ui/react";

import { FaEye, FaEyeSlash, FaArrowCircleLeft } from "react-icons/fa";

function PasswordResetForm({
  setIsOtp,
  isOtp,
  setForgetPassword,
  forgotPassword,
}) {
  const [isPasswordChanged, setIsPasswordChanged] = useState(false);
  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    getValues,
    setError,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      pin1: "",
      pin2: "",
      pin3: "",
    },
  });
  const onSubmit = (data) => {
    if (!isOtp) {
      clearErrors();
      setIsOtp(true);
    } else {
      console.log(data);
      clearErrors();
      reset({
        mail: "",
        newPassword: "",
        confirmNewPassword: "",
      });
      setIsPasswordChanged(true);
      setTimeout(() => {
        setForgetPassword(!forgotPassword);
      }, 3000);
    }
  };
  console.log(isSubmitSuccessful);
  // useEffect(() => {
  //   if (isOtp) {
  //
  //   }
  // }, []);

  const [confirmPassword, setConfirmPassword] = useState(false);
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  // const handleOtp = () => setIsOtp(true);
  return (
    <>
      <div className="self-center w-[80%] md:w-[60%]">
        <Button
          leftIcon={<FaArrowCircleLeft />}
          onClick={() => {
            setForgetPassword(!forgotPassword);
            setIsOtp(false);
          }}
          className="text-offwhite font-thin text-[12px]"
        >
          Go Back
        </Button>
        <h3 className="text-offwhite font-light text-xl ">Reset Password</h3>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[80%] relative flex flex-col items-center justify-center gap-y-5 md:w-[60%] xl:max-w-[50%]"
      >
        {!isOtp ? (
          <>
            <div className="w-full">
              <Input
                {...register("mail", {
                  required: "Email Address is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: `Please enter the email address connected to your account to receive a OTP`,
                  },
                })}
                placeholder="Email"
                size="lg"
                variant="filled"
                // type="email"
                autoComplete="email"
                className="bg-black w-full rounded-md py-3 pl-4 text-offwhite"
              />
              {errors.mail && (
                <p className="mt-1 text-[#FFA500] text-xs whitespace-pre-line">
                  {errors.mail.message}
                </p>
              )}
            </div>
          </>
        ) : (
          <>
            <div className="w-full">
              <InputGroup size="md">
                <Input
                  {...register("newPassword", {
                    required: "Create a password",
                    minLength: {
                      value: 8,
                      message: `Your password should be at least 8 characters long`,
                    },
                  })}
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                  autoComplete="new-password"
                  className="bg-black w-full mb-0.5 rounded-md py-3 pl-4 text-offwhite"
                />
                <InputRightElement width="4.5rem" top="10px" className="t">
                  <Button
                    h="1.75rem"
                    size="sm"
                    onClick={handleClick}
                    className="text-offwhite"
                  >
                    {!show ? <FaEyeSlash /> : <FaEye />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              {errors.newPassword && (
                <p className="mt-1 text-[#FFA500] text-xs whitespace-pre-line">
                  {errors.newPassword.message}
                </p>
              )}
            </div>
            <div className="w-full">
              <InputGroup size="md">
                <Input
                  {...register("confirmNewPassword", {
                    required: "Enter the password again",
                  })}
                  onChange={(e) => {
                    if (getValues("newPassword") !== e.target.value) {
                      setConfirmPassword(true);
                      setError("confirmNewPassword", {
                        type: "custom",
                        message: `Make sure the input matches your new password`,
                        shouldFocus: true,
                      });
                    } else {
                      setConfirmPassword(false);
                      clearErrors("confirmNewPassword");
                    }
                  }}
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="confirm password"
                  autoComplete="new-password"
                  className="bg-black w-full mb-0.5 rounded-md py-3 pl-4 text-offwhite"
                />
                <InputRightElement width="4.5rem" top="10px" className="t">
                  <Button
                    h="1.75rem"
                    size="sm"
                    onClick={handleClick}
                    className="text-offwhite"
                  >
                    {!show ? <FaEyeSlash /> : <FaEye />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              {/* {errors.confirmNewPassword && ( */}
              <p className="mt-1 text-[#FFA500] text-xs whitespace-pre-line">
                {errors.confirmNewPassword?.message}
              </p>
              {/* )} */}
            </div>
            <div>
              <p
                className={
                  isPasswordChanged
                    ? "text-offwhite font-light text-xs whitespace-pre-line"
                    : "hidden"
                }
              >
                Password reset succesfull, you will be redirected to the login
                page in a bit.
              </p>
              <HStack
                className={
                  !isPasswordChanged ? "justify-center w-full" : "!hidden"
                }
              >
                <PinInput otp>
                  <PinInputField
                    {...register("pin1", {
                      required: "Enter the verification pin sent to your email",
                      valueAsNumber: true,
                      value: isSubmitSuccessful && "",
                    })}
                    className="bg-black max-w-[50px] text-offwhite text-center py-2"
                  />
                  <PinInputField
                    {...register("pin2", {
                      required: "Enter the verification pin sent to your email",
                      valueAsNumber: true,
                    })}
                    className="bg-black max-w-[50px] text-offwhite text-center py-2"
                  />
                  <PinInputField
                    {...register("pin3", {
                      required: "Enter the verification pin sent to your email",
                      valueAsNumber: true,
                    })}
                    className="bg-black max-w-[50px] text-offwhite text-center py-2"
                  />
                  <PinInputField
                    {...register("pin4", {
                      required: "Enter the verification pin sent to your email",
                      valueAsNumber: true,
                    })}
                    className="bg-black max-w-[50px] text-offwhite text-center py-2"
                  />
                </PinInput>
              </HStack>
              <p className="mt-1 text-[#FFA500] text-xs whitespace-pre-line">
                {errors.pin1?.message ||
                  errors.pin2?.message ||
                  errors.pin3?.message ||
                  errors.pin4?.message}
              </p>
            </div>
          </>
        )}
        <Input
          bg="#00bbba"
          size="lg"
          type="submit"
          value={!isOtp ? "Send OTP" : "Reset Password"}
          // onClick={handleOtp}
          className=" w-[70%] py-2 rounded-md font-medium"
          disabled={isOtp ? confirmPassword : false}
        />
        in
      </form>
    </>
  );
}
export default PasswordResetForm;
