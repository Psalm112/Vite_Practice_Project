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

function RegisterForm() {
  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    getValues,
    setError,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    clearErrors();
    reset({
      name: "",
      mail: "",
      password: "",
      newPassword: "",
      confirmNewPassword: "",
    });
  };
  const [confirmPassword, setConfirmPassword] = useState(false);
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
                    type: "manual",
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
          {errors.confirmNewPassword && (
            <p className="mt-1 text-[#FFA500] text-xs whitespace-pre-line">
              {errors.confirmNewPassword.message}
            </p>
          )}
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
          value="Sign Up"
          className="py-2 rounded-md font-medium w-[70%]"
          disabled={confirmPassword}
        />
        <Text className="text-sm text-offwhite md:hidden">
          Already have an account?
          <ChakraLink as={ReactRouterLink} to="/" color="#00bbba">
            &nbsp;Log In
          </ChakraLink>
        </Text>
      </form>
    </>
  );
}

export default RegisterForm;
