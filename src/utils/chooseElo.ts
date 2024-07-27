import Ferro from "../assets/Season_2023_-_Iron.webp"
import Bronze from "../assets/Season_2023_-_Bronze.webp"
import Prata from "../assets/Season_2023_-_Silver.webp"
import Gold from "../assets/Season_2023_-_Gold.webp"
import Platina from "../assets/Season_2023_-_Platinum.webp"
import Esmeralda from "../assets/Season_2023_-_Emerald.webp"
import Diamante from "../assets/Season_2023_-_Diamond.webp"

export function chooseElo(elo: string) {
  switch(elo) {
    case "Ferro":
      return Ferro;
    case "Bronze":
      return Bronze;
    case "Prata":
      return Prata;
    case "Gold":
      return Gold;
    case "Platina":
      return Platina;
    case "Esmeralda":
      return Esmeralda;
    case "Diamante":
      return Diamante;
  }
}