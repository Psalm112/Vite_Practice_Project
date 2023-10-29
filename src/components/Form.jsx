import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  Input,
  InputRightElement,
  Button,
  InputGroup,
  Divider,
  Box,
  AbsoluteCenter,
  HStack,
  Text,
  PinInput,
  PinInputField,
  Container,
  Link as ChakraLink,
} from "@chakra-ui/react";
import {
  FaApple,
  FaArrowCircleLeft,
  FaEye,
  FaEyeSlash,
  FaFacebook,
  FaFacebookF,
  FaGoogle,
  FaTwitter,
} from "react-icons/fa";

function Form({ h1Text, isLogin }) {
  const [confirmPassword, setConfirmPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    clearErrors,
    reset,
    getValues,
    setError,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    clearErrors();
    reset({
      name: "",
      password: "",
      newPassword: "",
      confirmNewPassword: "",
    });
  };

  const [show, setShow] = useState(false);
  const [forgotPassword, setForgetPassword] = useState(false);
  const [isOtp, setIsOtp] = useState(false);
  const handleClick = () => setShow(!show);
  const handleForgotPassword = () => {
    setForgetPassword(!forgotPassword);
    setIsOtp(false);
  };
  const handleOtp = () => setIsOtp(true);
  return (
    <>
      <div className="w-full h-screen bg-[url('./assets/Photographer-Tr-0-.webp')] bg-cover bg-no-repeat bg-[30%_50%] md:bg-none">
        <div className="my-[auto] h-full flex flex-col items-center justify-center gap-y-5 bg-black/[0.8] md:bg-black/[0.87]">
          <h1
            className={
              isLogin
                ? "text-offwhite font-medium text-3xl mb-[2vh] relative after:content-[''] after:absolute after:bottom-[-5px] after:right-[-5px] after:block after:h-[50%] after:w-[30%] after:border-[#00bbba] after:border-solid after:border-b-[1px] after:border-r-[1px] after:animate-[fillIn_1s_linear] before:content-[''] before:absolute before:top-[-5px] before:left-[-5px] before:block before:h-[50%] before:w-[30%] before:border-[#00bbba] before:border-solid before:border-t-[1px] before:border-l-[1px] before:animate-[fillIn_1s_linear] md:mb-[10vh] md:text-5xl"
                : "text-offwhite font-medium text-3xl mb-[2vh] w-[80%] text-center md:mb-[5vh] md:w-[30%]"
            }
          >
            {h1Text}
          </h1>
          <p className="max-w-[80%] text-offwhite font-light text-base md:hidden">
            Capture your personal memories in a unique way, anywhere.
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="min-w-[308px] max-w-[80%] w-full relative flex flex-col items-center justify-center gap-y-5 xl:max-w-[50%]"
          >
            {isLogin ? (
              <>
                {!forgotPassword ? (
                  <>
                    <div className="w-full">
                      <Input
                        {...register("mail", {
                          required: "Email Address is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: `Please enter a valid email address including an '@'. 
                            E.g johnDoe@gmail.com`,
                          },
                        })}
                        // aria-invalid={errors.mail ? "true" : "false"}
                        // isInvalid
                        // errorBorderColor="#FFA500 !important"
                        // focusBorderColor={errors.mail ? "#FFA500" : "#f9f9f9"}
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
                    <div className="w-full">
                      <InputGroup size="md" className="mb-0.5">
                        <Input
                          {...register("password", {
                            required: "Enter your Password",
                            minLength: {
                              value: 8,
                              message: `Invalid Password. Click on forget password to create a new password.`,
                            },
                          })}
                          pr="4.5rem"
                          type={show ? "text" : "password"}
                          placeholder="Enter password"
                          autoComplete="current-password"
                          className="bg-black w-full rounded-md py-3 pl-4 text-offwhite"
                        />
                        <InputRightElement
                          width="4.5rem"
                          top="10px"
                          className="t"
                        >
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
                      {errors.password && (
                        <p className="mt-1 text-[#FFA500] text-xs whitespace-pre-line">
                          {errors.password.message}
                        </p>
                      )}
                      <Text
                        onClick={handleForgotPassword}
                        className="text-offwhite float-right text-xs font-thin cursor-pointer self-end"
                      >
                        Forget Password?
                      </Text>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="self-start w-full">
                      <Button
                        leftIcon={<FaArrowCircleLeft />}
                        onClick={handleForgotPassword}
                        className="text-offwhite font-thin text-[12px]"
                      >
                        Go Back
                      </Button>
                      <h3 className="text-offwhite font-light text-xl ">
                        Reset Password
                      </h3>
                    </div>
                    {!isOtp ? (
                      <>
                        <div className="w-full">
                          <Input
                            {...register("mail", {
                              required: "Email Address is required",
                              pattern: {
                                value:
                                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: `Please enter the email address connected to your account to receive a OTP`,
                              },
                            })}
                            placeholder="Email"
                            size="lg"
                            variant="filled"
                            type="email"
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
                            <InputRightElement
                              width="4.5rem"
                              top="10px"
                              className="t"
                            >
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
                                onChange: (e) => {
                                  if (
                                    getValues("newPassword") !== e.target.value
                                  ) {
                                    setConfirmPassword(true);
                                    setError("confirmNewPassword", {
                                      type: "manual",
                                      message: `Make sure the input matches your new password`,
                                      shouldFocus: true,
                                    });
                                  } else {
                                    setConfirmPassword(false);
                                    clearErrors("confirmNewPassword");
                                  }
                                },
                              })}
                              pr="4.5rem"
                              type={show ? "text" : "password"}
                              placeholder="confirm password"
                              autoComplete="new-password"
                              className="bg-black w-full mb-0.5 rounded-md py-3 pl-4 text-offwhite"
                            />
                            <InputRightElement
                              width="4.5rem"
                              top="10px"
                              className="t"
                            >
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
                          {errors.confirmNewPassword && (
                            <p className="mt-1 text-[#FFA500] text-xs whitespace-pre-line">
                              {errors.confirmNewPassword.message}
                            </p>
                          )}
                        </div>
                        <HStack size="lg" className="justify-center w-full">
                          <PinInput otp>
                            <PinInputField className="bg-black max-w-[50px] text-offwhite text-center py-2" />
                            <PinInputField className="bg-black max-w-[50px] text-offwhite text-center py-2" />
                            <PinInputField className="bg-black max-w-[50px] text-offwhite text-center py-2" />
                            <PinInputField className="bg-black max-w-[50px] text-offwhite text-center py-2" />
                          </PinInput>
                        </HStack>
                      </>
                    )}
                  </>
                )}
              </>
            ) : (
              <>
                <div className="w-full">
                  <Input
                    {...register("name", {
                      required: "Enter your full name",
                      minLength: {
                        value: 6,
                        message: `Enter your first and last names`,
                      },
                      pattern: {
                        value: /^[A-Za-z]+ [A-Za-z]+ ?([A-Za-z]+)?$/i,
                        message: `Enter your first and last names`,
                      },
                    })}
                    placeholder="Name"
                    size="lg"
                    variant="filled"
                    type="text"
                    autoComplete="name"
                    className="bg-black w-full rounded-md py-3 pl-4 text-offwhite"
                  />
                  {errors.name && (
                    <p className="mt-1 text-[#FFA500] text-xs whitespace-pre-line">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="w-full">
                  <Input
                    {...register("mail", {
                      required: "Email Address is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: `Please input a valid email address including an '@'. 
                            E.g johnDoe@gmail.com`,
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
                <div>
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
                <div>
                  <InputGroup size="md">
                    <Input
                      {...register("confirmNewPassword", {
                        required: "Enter the password again",
                        onChange: (e) => {
                          if (getValues("newPassword") !== e.target.value) {
                            setConfirmPassword(true);
                            setError("confirmNewPassword", {
                              type: "manual",
                              message: `Make sure the input matches your new password`,
                              shouldFocus: true,
                            });
                          } else {
                            setConfirmPassword(false);
                            clearErrors("confirmNewPassword");
                          }
                        },
                      })}
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
                  {errors.confirmNewPassword && (
                    <p className="mt-1 text-[#FFA500] text-xs whitespace-pre-line">
                      {errors.confirmNewPassword.message}
                    </p>
                  )}
                </div>
              </>
            )}
            {!forgotPassword ? (
              <>
                <Box position="relative" padding="10" className="w-full">
                  <Divider
                    variant="solid"
                    className="w-full h-[1px] bg-[#f9f9f9]"
                  />
                  <AbsoluteCenter
                    bg="black"
                    color="#f9f9f9"
                    px="4"
                    className="rounded-md font-light text-xs"
                  >
                    or continue with
                  </AbsoluteCenter>
                </Box>
                <HStack className="gap-x-4 text-offwhite w-full justify-center !gap-x-3">
                  <Button className="border-solid border-offwhite border-2 rounded-full p-1.5 hover:bg-offwhite">
                    <FaFacebookF className="hover:text-offwhite" />
                  </Button>
                  <Button className="border-solid border-offwhite border-2 rounded-full p-1.5 hover:bg-offwhite">
                    <FaApple />
                  </Button>
                  <Button className="border-solid border-offwhite border-2 rounded-full p-1.5 hover:bg-offwhite">
                    <FaGoogle />
                  </Button>
                  <Button className="border-solid border-offwhite border-2 rounded-full p-1.5 hover:bg-offwhite">
                    <FaTwitter />
                  </Button>
                </HStack>
                <Input
                  bg="#00bbba"
                  size="lg"
                  type="submit"
                  value={isLogin ? "Log In" : "Sign Up"}
                  className="py-2 rounded-md font-medium w-[70%]"
                  disabled={isOtp ? confirmPassword : false}
                />
                <Text className="text-sm text-offwhite md:hidden">
                  {isLogin ? "Don't " : "Already "}
                  have an account?
                  <ChakraLink
                    as={ReactRouterLink}
                    to={isLogin ? "/register" : "/"}
                    color="#00bbba"
                  >
                    {isLogin ? " Sign Up" : " Log In"}
                  </ChakraLink>
                </Text>
              </>
            ) : (
              <>
                <Input
                  bg="#00bbba"
                  size="lg"
                  type="submit"
                  value={!isOtp ? "Send OTP" : "Reset Password"}
                  onClick={handleOtp}
                  className=" w-[70%] py-2 rounded-md font-medium"
                  disabled={isOtp ? confirmPassword : false}
                />
              </>
            )}
          </form>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}

export default Form;
