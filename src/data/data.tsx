// export interface IVPCard {
//   cost: number;
//   value: number;
//   abilityText: string;
//   spend: any;
// }
// export class VPCard implements IVPCard {
//   cost: number;
//   value: number;
//   abilityText: string;
//   constructor(cost: number, value: number, abilityText: string) {
//     this.cost = cost;
//     this.value = value;
//     this.abilityText = abilityText;
//   }
//   spend() {
//     console.log("this card has been spent");
//   }
// }
// export class VPCard2 extends VPCard {
//   constructor() {
//     super(
//       1,
//       2,
//       "Move an incomplete chapter from another player's guildhall to yours"
//     );
//   }
//   ability() {
//     console.log(
//       "Move an incomplete chapter from another player's guildhall to yours"
//     );
//   }
// }

import LuatuaImg from "../assets/images/PlayerProfile/steven-luatua_30-removebg-preview.png";
import ThackerImg from "../assets/images/PlayerProfile/harry-thacker_47-removebg-preview.png";
import AdeolokunImg from "../assets/images/PlayerProfile/niyi-adeolokun_06-removebg-preview.png";

import NewZealand from "./../assets/images/Flags/allBlacks.png";
import England from "./../assets/images/Flags/Flag_of_England.png";

export interface IPlayer {
  playerName: string;
  nationality: string;
  flag: string;
  playerImg: string;
  playerHeight: number;
  playerAge: number;
  position: string;
  positionNum: Array<number>;
  strength: number;
  fitness: number;
  speed: number;
  tackling: number;
  passing: number;
  attacking: number;
  defending: number;
  experience: number;
  kicking?: number;
  scrummaging?: number;
  lineOut?: number;
}

const SLuatua: IPlayer = {
  playerName: "Steven Luatua",
  nationality: "New Zealand",
  flag: NewZealand,
  playerImg: LuatuaImg,
  playerHeight: 188,
  playerAge: 29,
  position: "Back Row",
  positionNum: [6, 7, 8],
  strength: 88,
  fitness: 88,
  speed: 88,
  tackling: 88,
  passing: 88,
  attacking: 88,
  defending: 88,
  experience: 88,
  kicking: 88,
  scrummaging: 88,
  lineOut: 88,
};

const HThacker: IPlayer = {
  playerName: "Harry Thacker",
  nationality: "England",
  flag: England,
  playerImg: ThackerImg,
  playerHeight: 168,
  playerAge: 27,
  position: "Hooker",
  positionNum: [2],
  strength: 88,
  fitness: 88,
  speed: 88,
  tackling: 88,
  passing: 88,
  attacking: 88,
  defending: 88,
  experience: 88,
  kicking: 88,
  scrummaging: 88,
  lineOut: 88,
};

const NAdeolokun: IPlayer = {
  playerName: "Niyi Adeolokun",
  nationality: "Ireland",
  flag: England,
  playerImg: AdeolokunImg,
  playerHeight: 190,
  playerAge: 30,
  position: "Winger",
  positionNum: [11, 14],
  strength: 88,
  fitness: 88,
  speed: 88,
  tackling: 88,
  passing: 88,
  attacking: 88,
  defending: 88,
  experience: 88,
  kicking: 88,
  scrummaging: 88,
  lineOut: 88,
};

const players: IPlayer[] = [SLuatua, HThacker, NAdeolokun];

export default players;
