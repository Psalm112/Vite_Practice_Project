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
  Link as ChakraLink,
} from "@chakra-ui/react";
import {
  FaApple,
  FaEye,
  FaEyeSlash,
  FaFacebookF,
  FaGoogle,
  FaTwitter,
} from "react-icons/fa";

function LoginForm({ setIsOtp, setForgetPassword, forgotPassword }) {
  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    clearErrors();
    reset({
      mail: "",
      password: "",
    });
  };

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[80%] relative flex flex-col items-center justify-center gap-y-5 md:w-[60%] xl:max-w-[50%]"
      >
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
          {errors.password && (
            <p className="mt-1 text-[#FFA500] text-xs whitespace-pre-line">
              {errors.password.message}
            </p>
          )}
          <Text
            onClick={() => {
              setForgetPassword(!forgotPassword);
              setIsOtp(false);
              clearErrors();
            }}
            className="text-offwhite float-right text-xs font-thin cursor-pointer self-end"
          >
            Forget Password?
          </Text>
        </div>
        <Box position="relative" padding="10" className="w-full">
          <Divider variant="solid" className="w-full h-[1px] bg-[#f9f9f9]" />
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
          value="Log In"
          className="py-2 rounded-md font-medium w-[70%]"
          //   disabled={isOtp ? confirmPassword : false}
        />
        <Text className="text-sm text-offwhite md:hidden">
          Don't have an account?
          <ChakraLink as={ReactRouterLink} to="/register" color="#00bbba">
            &nbsp;Sign Up
          </ChakraLink>
        </Text>
      </form>
    </>
  );
}

export default LoginForm;
