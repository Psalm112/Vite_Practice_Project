import { Container } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Text } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";

function Illustration({ isLogin }: { isLogin: boolean }) {
    return (
        <>
            <div className="hidden w-full h-screen text-offwhite bg-[url('./assets/Photographer-Tr-0-.webp')] bg-cover bg-no-repeat bg-[30%_50%] md:table xl:bg-[50%] ">
                <Container className="table-cell align-middle bg-black/[0.5]">
                    <h2 className="mx-[5vw] mb-5 font-semibold text-3xl">
                        My Special Memories
                    </h2>
                    <p className="mx-[5vw] w-4/5 font-light text-xl">
                        Capture your personal memories in a unique way, anywhere
                    </p>
                    <Text className="mx-[5vw]">
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
                </Container>
            </div>
        </>
    );
}

export default Illustration;
