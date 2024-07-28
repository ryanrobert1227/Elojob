import { EloType } from "../types/Eloobject"

export function calculator(current: EloType, wished: EloType, format: string) {


  let valor: number[] = []
  if (format === "elojob") {
      valor = [4, 4, 4, 4, 5, 5, 5, 5, 7.5, 7.5, 7.5, 7.5, 10, 10, 10, 10, 15, 15, 15, 15, 30, 30, 30, 30]
  }
  
  valor.splice(convertEloToNumber(wished.tier) + reverseDivision(wished.division) - 1, valor.length) // remover valores finais
  const removeInitialRange = valor.splice(convertEloToNumber(current.tier) + reverseDivision(current.division) -1, valor.length)

  const result = removeInitialRange.reduce((acc, cur) => acc + cur)

  return result
}

export function validateCalculator(current: EloType, wished: EloType, format: string) {
  if (!current.tier || !current.division || !wished.tier || !wished.division || !format) return "Todos os campos devem ser selecionados" 
 
  if (convertEloToNumber(current.tier) + reverseDivision(current.division) >= convertEloToNumber(wished.tier) + reverseDivision(wished.division)) return "O Elo desejado dever ser maior do que o elo atual!"

  if (convertEloToNumber(wished.tier) + reverseDivision(wished.division) > 25) return "Desculpe, No momento subimos contas apenas até Diamante IV"

  return ""
}


function convertEloToNumber(elo: string): number {
switch(elo) {
  case "Ferro":
    return 0;
  case "Bronze":
    return 4;
  case "Prata":
    return 8;
  case "Gold":
    return 12;
  case "Platina":
    return 16;
  case "Esmeralda":
    return 20;
  case "Diamante":
    return 24;
}

  return 0
}

function reverseDivision(division: string): number {
switch(division) {
  case '4':
    return 1
  case '3':
    return 2
  case '2':
    return 3
  case '1':
    return 4
}

  return 0
}