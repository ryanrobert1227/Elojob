import Ferro from "../assets/ferro_IV.webp"
import Bronze from "../assets/bronze_IV.webp"
import Prata from "../assets/prata_III.webp"
import Gold from "../assets/ouro_IV.webp"
import Platina from "../assets/platina_IV.webp"
import Esmeralda from "../assets/esmeralda_IV.webp"
import Diamante from "../assets/diamante_IV.webp"

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