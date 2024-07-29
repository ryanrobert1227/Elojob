import { Button as ButtonChakra } from "@chakra-ui/react"

import { FaLongArrowAltRight } from "react-icons/fa";

interface PropsType {
  text: string;
  setStage: React.Dispatch<React.SetStateAction<number>>;
  number: number;
}

export default function ButtonArrow(props: PropsType) {
  const { text, setStage, number } = props
  return (
    <>
      <ButtonChakra rightIcon={<FaLongArrowAltRight />} height={["12%", "14%", "15%", "15%", "15%"]} width={["90%", "90%", "80%", "70%", "65%"]} colorScheme="whiteAlpha" color="#c9c9c9" variant="solid" border="0.1rem solid black" fontFamily="sans-serif" fontWeight="600" letterSpacing="0.1rem" fontSize={["0.9rem", "1.2rem", "1.8rem", "1.8rem", "1.8rem"]} boxShadow="-0.2rem 0.5rem 0.7rem rgba(0, 0, 0, 0.4)" onClick={() => setStage(number)}>
        {text}
      </ButtonChakra>
    </>
  )
}
