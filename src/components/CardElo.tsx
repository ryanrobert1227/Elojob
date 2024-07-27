import { Flex, Image, Text, Select } from '@chakra-ui/react'

import { chooseElo } from '../utils/chooseElo';

import { EloType } from '../types/Eloobject';

import Prata from "../assets/prata_III.webp"

interface PropsType {
  Elo: EloType
  setElo: React.Dispatch<React.SetStateAction<EloType>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
  text: string
}

export default function CardElo(props: PropsType) {
  const { Elo, setElo, setError, text } = props;

  return (
    <>
      <Flex flexDirection="column" alignItems="center">
        <Text width={["", "25%", "38%", "36.6%", "36%"]} whiteSpace="nowrap" textAlign="left" fontSize={["1.2rem", "1.5rem", "2rem", "1.8rem", "2.3rem"]} fontWeight="600" fontFamily="sans-serif" color="#c9c9c9">{text}: </Text>
        <Flex justifyContent="center" mt={["3%", "0%", "2%", "0%", "0%"]} gap={["0%", "1%", "0%", "2%", "2%"]} width="100%" >
          <Image width={["100px", "120px", "140px", "110px", "130px"]} src={chooseElo(Elo.tier) || Prata} />
          <Flex flexDirection="column" alignItems="center" justifyContent="center" gap="15%" width="55%">
            <Select placeholder='Escolha o Elo' size={["sm", "md", "lg", "sm", "md"]} color="#c9c9c9" onChange={(e) => {
                setError("")
                setElo({...Elo, tier: (e.target.value)})
              }}>
              <option value='Ferro'>Ferro</option>
              <option value='Bronze'>Bronze</option>
              <option value='Prata'>Prata</option>
              <option value='Gold'>Ouro</option>
              <option value='Platina'>Platina</option>
              <option value='Esmeralda'>Esmeralda</option>
              <option value='Diamante'>Diamante</option>
            </Select>
            <Select placeholder='Escolha a divisão' size={["sm", "md", "lg", "sm", "md"]} color="#c9c9c9" onChange={(e) => {
                setError("")
                setElo({...Elo, division: (e.target.value)})
              }}>
              <option value='4'>IV</option>
              <option value='3'>III</option>
              <option value='2'>II</option>
              <option value='1'>I</option>
            </Select>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
