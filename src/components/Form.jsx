// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { Link as ReactRouterLink } from "react-router-dom";
// import {
//   Input,
//   InputRightElement,
//   Button,
//   InputGroup,
//   Divider,
//   Box,
//   AbsoluteCenter,
//   HStack,
//   Text,
//   PinInput,
//   PinInputField,
//   Container,
//   Link as ChakraLink,
// } from "@chakra-ui/react";
// import {
//   FaApple,
//   FaArrowCircleLeft,
//   FaEye,
//   FaEyeSlash,
//   FaFacebook,
//   FaFacebookF,
//   FaGoogle,
//   FaTwitter,
// } from "react-icons/fa";

// function Form({ h1Text, isLogin }) {
//   const [confirmPassword, setConfirmPassword] = useState(false);
//   const {
//     register,
//     handleSubmit,
//     watch,
//     clearErrors,
//     reset,
//     getValues,
//     setError,
//     formState: { errors, isSubmitSuccessful },
//   } = useForm();
//   const onSubmit = (data) => {
//     console.log(data);
//     clearErrors();
//     reset({
//       name: "",
//       password: "",
//       newPassword: "",
//       confirmNewPassword: "",
//     });
//   };
// function ({}){

//   // const [forgotPassword, setForgetPassword] = useState(false);

//   const handleForgotPassword = () => {
//     setForgetPassword(!forgotPassword);
//     setIsOtp(false);
//   };
//   const handleOtp = () => setIsOtp(true);
//   return (
//     <>

//           <form

//           >
//             {isLogin ? (
//               <>
//                 {!forgotPassword ? (
//                   <>

//                   </>
//                 ) : (
//                   <>

//               </>
//             ) : (
//               <>

//               </>
//             )}
//             {!forgotPassword ? (
//               <>

//               </>
//             ) : (
//               <>

//               </>
//             )}
//           </form>
//         </div>
//         {/* </div> */}
//       </div>
//     </>
//   );
// }

// // export default Form;
