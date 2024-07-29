import { useState } from "react"
import { Flex, Text, Avatar, Link } from "@chakra-ui/react"
import { FaWhatsapp } from "react-icons/fa";

import ButtonArrow from "./components/ButtonArrow"
import CardElo from "./components/CardElo"

import { calculator, validateCalculator } from "./utils/ElosCalculator"

import { EloType } from "./types/Eloobject"

import BackgroundRammus from "./assets/recorteRammus.jpg"
import BackgroundRammusFull from "./assets/Rammus_5.webp"
import PerfilPhoto from "./assets/PerfilPHoto.jpeg"
import GeneralButton from "./components/GeneralButton"

function App() {
  const [ stage, setStage ] = useState(0)
  const [ error, setError ] = useState("")
  const [ currentElo, setCurrentElo ] = useState<EloType>({tier: "", division: ""})
  const [ wishedElo, setWishedElo ] = useState<EloType>({tier: "", division: ""})

  function clickCalcular() {
    if (validateCalculator(currentElo, wishedElo, "elojob")) {
      setError(validateCalculator(currentElo, wishedElo, "elojob"))
    } else {
      setStage(3)
    }
    }

  function resetSelectAndBackToHome() {
    setCurrentElo({tier: "", division: ""})
    setWishedElo({tier: "", division: ""})
    setStage(0)
    return
  }

  function redirect() {
    return window.open("https://api.whatsapp.com/send/?phone=5571992490906&text&type=phone_number&app_absent=0", "_blank")
  }


  return (
    <>
      <Flex 
      position="relative"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      backgroundImage={[BackgroundRammus, BackgroundRammus, BackgroundRammusFull]}
      backgroundPosition="center" 
      backgroundRepeat="no-repeat" 
      backgroundSize="cover"
      height="100vh"
      width="100vw">
        <Flex alignItems="center" justifyContent={["space-evenly", "center"]} gap={[0, "1.4rem", "2rem", "4rem", "2rem"]} position="fixed" top="0" width="100%" height={["12%", "12%", "12%", "12%", "15%"]} padding="0 2rem" backgroundColor="#121624" color="white">
          <Text fontSize={["1.4rem", "1.6rem", "2.2rem", "3rem", "3rem"]} fontWeight={600} letterSpacing="0.1rem">ELOJOB COM O TATU</Text>
          <Link width={["7%", "6%", "4%", "4%", ""]} href="https://api.whatsapp.com/send/?phone=5571992490906&text&type=phone_number&app_absent=0" target="_blank"><FaWhatsapp size="100%" /></Link>
        </Flex>
        <Flex flexDirection="column" justifyContent="space-evenly" alignItems="center" mt="3%" width={["80%", "70", "68%", "65%", "60%"]} height={["60%", "63%", "66%", "72%", "72%"]} padding="1rem 0.8rem rem 0.8rem" borderRadius="1rem" boxShadow="-0.6rem 1rem 0.7rem rgba(0, 0, 0, 0.4)" background="#313338" >
          {stage === 0 && 
          <>
            <Flex flexDirection="column" alignItems="center" justifyContent="center" gap="1rem">
              <Avatar size="2xl" name='Tatu Do Bem Ai' border="0.2rem solid black" src={PerfilPhoto} borderRadius="50%" />
              <Text fontFamily="sans-serif" fontSize={["1.5rem", "1.9rem", "2.5rem", "3rem", "3rem"]} color="#c9c9c9">@tatu.do.bem.ai</Text> 
            </Flex>
            <ButtonArrow text="SERVIÇO DE ELOJOB" setStage={setStage} number={1} />
            <ButtonArrow text="COMMING SOON" setStage={setStage} number={0} />
          </>
          } 
          {stage === 1 && 
            <Flex flexDirection="column" justifyContent="space-evenly" height="100%" width="100%">
              <CardElo Elo={currentElo} setElo={setCurrentElo} setError={setError} text="Elo Atual"/>
              <CardElo Elo={wishedElo} setElo={setWishedElo} setError={setError} text="Elo Desejado" />
              <Flex justifyContent="space-evenly" position="relative" height="15%" width="100%" p={["0", "0 4%", "0 5%", "0 7.7%", "0 6%"]} pt={["10%", "3.5%", "4%", "2%", "2%"]} pb={["0%", "0%", "0%", "0%", "1%"]}>
                {error && <Text position="absolute" top={["-40%", "-20%", "-15%", "-25%", "-15%"]} color="red" fontFamily="sans-serif" fontSize={["1.2rem", "1rem", "1.3rem", "1.2rem", "1.4rem"]} textAlign="center" lineHeight="1.5rem"> { error } </Text>}
                <Flex justifyContent="center" width="45%" p="0" onClick={resetSelectAndBackToHome}><GeneralButton text="Voltar" /></Flex>
                <Flex justifyContent="center" width="45%" p="0" onClick={clickCalcular}><GeneralButton text="Calcular" /></Flex>
              </Flex> 
            </Flex>
          }
          {stage === 3 && 
            <>
              <Flex flexDirection="column" justifyContent="space-evenly" alignItems="center" height="100%" width="100%" p="4% 4%">
                <Flex flexDirection="column" alignItems="center" justifyContent="center" gap="1rem" height="50%" width="100%">
                  <Avatar size="2xl" name='Tatu Do Bem Ai' border="0.2rem solid black" src={PerfilPhoto} borderRadius="50%" />
                  <Text fontFamily="sans-serif" fontSize="2rem" fontWeight="600" color="#c9c9c9">@tatu.do.bem.ai</Text> 
                </Flex>
                <Flex justifyContent="center" alignItems="center" height="40%" width="100%" p="0% 4%">
                  <Text pb={["15%", "","","","6.5%"]} mt="3%" fontFamily="sans-serif" fontWeight="600" fontSize="1.5rem" color="#c9c9c9">Por:</Text>
                  <Text pb={["15%", "","","","5%"]} fontFamily="sans-serif" fontWeight="600" fontSize="2.5rem" color="#3ebd07">R$ {calculator(currentElo, wishedElo, "elojob").toFixed(2).replace(".", ",")}</Text>
                </Flex>
                <Flex justifyContent="space-evenly" height="10%" width="100%">
                  <Flex justifyContent="center" width="48%" p="0" onClick={resetSelectAndBackToHome}><GeneralButton text="Voltar ao Inicio" /></Flex>
                  <Flex justifyContent="center" width="48%" p="0" onClick={redirect}><GeneralButton text="Contratar" /></Flex>
                </Flex> 
              </Flex>
            </>
          }
        </Flex>
        <Flex alignItems="center" justifyContent="space-evenly" position="fixed" bottom="0" width="100%" height={["13%", "10%", "8%", "8%", "8%"]} padding={["0.5rem 1rem", "0.5rem 5rem", "0.5rem 8rem", "0.5rem 1rem", ""]} backgroundColor="#121624" color="white">
          <Text textAlign="center" fontFamily="sans-serif" fontSize={["1rem", "1rem", "1.3rem", "1rem", "1.5rem"]} fontWeight={600} letterSpacing="0.1rem" color="#c9c9c9">SITE EM BETA - EM CASO DE ERRO ENTRE EM CONTATO OU TENTE ABRIR DENOVO</Text> 
        </Flex>
      </Flex>
    </>
  )
}

export default App