import LuatuaImg from "../assets/images/PlayerProfile/steven-luatua_30-removebg-preview.png";
import ThackerImg from "../assets/images/PlayerProfile/harry-thacker_47-removebg-preview.png";
import AdeolokunImg from "../assets/images/PlayerProfile/niyi-adeolokun_06-removebg-preview.png";
import AfoaImg from "../assets/images/PlayerProfile/john-afoa_28-removebg-preview.png";
import ArmstrongImg from "../assets/images/PlayerProfile/jake-armstrong_10-removebg-preview.png";
import AttwoodImg from "../assets/images/PlayerProfile/dave-attwood_13-removebg-preview.png";
import BedlowImg from "../assets/images/PlayerProfile/sam-bedlow_12-removebg-preview.png";
import ByrneImg from "../assets/images/PlayerProfile/bryan-byrne_23-removebg-preview.png";
import CaponImg from "../assets/images/PlayerProfile/will-capon_15-removebg-preview.png";
import CookImg from "../assets/images/PlayerProfile/chris-cook_09-removebg-preview.png";
import DunImg from "../assets/images/PlayerProfile/james-dun_07-removebg-preview.png";
import EadieImg from "../assets/images/PlayerProfile/james-dun_07-removebg-preview.png";
// import EarlImg from "../assets/images/PlayerProfile/ben-earl_49-removebg-preview.png";
// import EdenImg from "../assets/images/PlayerProfile/tiff-eden_04-removebg-preview.png";
// import FrickerImg from "../assets/images/PlayerProfile/toby-fricker_02-removebg-preview.png";
// import HawkinsImg from "../assets/Images/PlayerProfile/john-hawkins_01-removebg-preview.png";
// import HeenanImg from "../assets/Images/PlayerProfile/jake-heenan_20-removebg-preview.png";

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
  strength: 78,
  fitness: 88,
  speed: 90,
  tackling: 77,
  passing: 82,
  attacking: 88,
  defending: 76,
  experience: 77,
  kicking: 80,
};

const JAfoa: IPlayer = {
  playerName: "John Afoa",
  nationality: "New Zealand",
  flag: NewZealand,
  playerImg: AfoaImg,
  playerHeight: 187,
  playerAge: 30,
  position: "Prop",
  positionNum: [1, 3],
  strength: 88,
  fitness: 78,
  speed: 60,
  tackling: 87,
  passing: 78,
  attacking: 68,
  defending: 86,
  experience: 87,
};

const JArmstrong: IPlayer = {
  playerName: "Jake Armstrong",
  nationality: "England",
  flag: England,
  playerImg: ArmstrongImg,
  playerHeight: 187,
  playerAge: 30,
  position: "Prop",
  positionNum: [1, 3],
  strength: 88,
  fitness: 78,
  speed: 60,
  tackling: 87,
  passing: 78,
  attacking: 68,
  defending: 86,
  experience: 87,
};

const DAttwood: IPlayer = {
  playerName: "Dave Attwood",
  nationality: "England",
  flag: England,
  playerImg: AttwoodImg,
  playerHeight: 187,
  playerAge: 30,
  position: "Second Row",
  positionNum: [4, 5],
  strength: 88,
  fitness: 78,
  speed: 60,
  tackling: 87,
  passing: 78,
  attacking: 68,
  defending: 86,
  experience: 87,
};

const SBedlow: IPlayer = {
  playerName: "Sam Bedlow",
  nationality: "England",
  flag: England,
  playerImg: BedlowImg,
  playerHeight: 187,
  playerAge: 30,
  position: "Centre",
  positionNum: [12, 13],
  strength: 88,
  fitness: 78,
  speed: 60,
  tackling: 87,
  passing: 78,
  attacking: 68,
  defending: 86,
  experience: 87,
};

const BByrne: IPlayer = {
  playerName: "Bryan Byrne",
  nationality: "Ireland",
  flag: England,
  playerImg: ByrneImg,
  playerHeight: 187,
  playerAge: 30,
  position: "Hooker",
  positionNum: [2],
  strength: 88,
  fitness: 78,
  speed: 60,
  tackling: 87,
  passing: 78,
  attacking: 68,
  defending: 86,
  experience: 87,
};

const WCapon: IPlayer = {
  playerName: "Will Capon",
  nationality: "England",
  flag: England,
  playerImg: CaponImg,
  playerHeight: 187,
  playerAge: 30,
  position: "Hooker",
  positionNum: [2],
  strength: 88,
  fitness: 78,
  speed: 60,
  tackling: 87,
  passing: 78,
  attacking: 68,
  defending: 86,
  experience: 87,
};

const CCook: IPlayer = {
  playerName: "Chris Cook",
  nationality: "Ireland",
  flag: England,
  playerImg: CookImg,
  playerHeight: 187,
  playerAge: 30,
  position: "Hooker",
  positionNum: [2],
  strength: 88,
  fitness: 78,
  speed: 60,
  tackling: 87,
  passing: 78,
  attacking: 68,
  defending: 86,
  experience: 87,
};

const JDun: IPlayer = {
  playerName: "James Dun",
  nationality: "England",
  flag: England,
  playerImg: DunImg,
  playerHeight: 187,
  playerAge: 30,
  position: "Back Row",
  positionNum: [2],
  strength: 88,
  fitness: 78,
  speed: 60,
  tackling: 87,
  passing: 78,
  attacking: 68,
  defending: 86,
  experience: 87,
};

const MEadie: IPlayer = {
  playerName: "James Dun",
  nationality: "England",
  flag: England,
  playerImg: EadieImg,
  playerHeight: 187,
  playerAge: 30,
  position: "Back Row",
  positionNum: [2],
  strength: 88,
  fitness: 78,
  speed: 60,
  tackling: 87,
  passing: 78,
  attacking: 68,
  defending: 86,
  experience: 87,
};

// const BEarl: IPlayer = {
//   playerName: "Ben Earl",
//   nationality: "England",
//   flag: England,
//   playerImg: EarlImg,
//   playerHeight: 187,
//   playerAge: 30,
//   position: "Back Row",
//   positionNum: [2],
//   strength: 88,
//   fitness: 78,
//   speed: 60,
//   tackling: 87,
//   passing: 78,
//   attacking: 68,
//   defending: 86,
//   experience: 87,
// };

// const TEden: IPlayer = {
//   playerName: "Tiff Eden",
//   nationality: "England",
//   flag: England,
//   playerImg: EdenImg,
//   playerHeight: 187,
//   playerAge: 30,
//   position: "Back Row",
//   positionNum: [2],
//   strength: 88,
//   fitness: 78,
//   speed: 60,
//   tackling: 87,
//   passing: 78,
//   attacking: 68,
//   defending: 86,
//   experience: 87,
// };

// const TFricker: IPlayer = {
//   playerName: "Toby Fricker",
//   nationality: "England",
//   flag: England,
//   playerImg: FrickerImg,
//   playerHeight: 187,
//   playerAge: 30,
//   position: "---",
//   positionNum: [2],
//   strength: 88,
//   fitness: 78,
//   speed: 60,
//   tackling: 87,
//   passing: 78,
//   attacking: 68,
//   defending: 86,
//   experience: 87,
// };

// const JHawkins: IPlayer = {
//   playerName: "Hawkins",
//   nationality: "England",
//   flag: England,
//   playerImg: HawkinsImg,
//   playerHeight: 187,
//   playerAge: 30,
//   position: "---",
//   positionNum: [2],
//   strength: 88,
//   fitness: 78,
//   speed: 60,
//   tackling: 87,
//   passing: 78,
//   attacking: 68,
//   defending: 86,
//   experience: 87,
// };

// const JHeenan: IPlayer = {
//   playerName: "Heenan",
//   nationality: "New Zealand",
//   flag: England,
//   playerImg: HeenanImg,
//   playerHeight: 187,
//   playerAge: 30,
//   position: "---",
//   positionNum: [2],
//   strength: 88,
//   fitness: 78,
//   speed: 60,
//   tackling: 87,
//   passing: 78,
//   attacking: 68,
//   defending: 86,
//   experience: 87,
// };

const players: IPlayer[] = [
  SLuatua,
  HThacker,
  NAdeolokun,
  JAfoa,
  JArmstrong,
  DAttwood,
  SBedlow,
  BByrne,
  WCapon,
  CCook,
  JDun,
  MEadie,
  // BEarl,
  // TEden,
  // TFricker,
  // JHawkins,
];

export default players;
