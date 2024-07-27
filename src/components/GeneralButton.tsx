import { Button } from '@chakra-ui/react'

interface PropsType {
  text: string;
}

export default function GeneralButton(props: PropsType) {
  const { text } = props;

  return (
    <>
      <Button height="100%" width={["100%", "", "100%", "90%", "80%"]}  colorScheme="whiteAlpha" color="#c9c9c9" variant="solid" border="0.1rem solid black" fontFamily="sans-serif" fontWeight="600" fontSize={["1rem", "", "2.2rem", "1.7rem", "1.7rem"]} boxShadow="-0.2rem 0.5rem 0.7rem rgba(0, 0, 0, 0.4)" >{ text }</Button>
    </>
  )
}
