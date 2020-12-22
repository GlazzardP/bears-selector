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
import EarlImg from "../assets/images/PlayerProfile/ben-earl_49-removebg-preview.png";
import EdenImg from "../assets/images/PlayerProfile/tiff-eden_04-removebg-preview.png";
import FrickerImg from "../assets/images/PlayerProfile/toby-fricker_02-removebg-preview.png";
import HawkinsImg from "../assets/images/PlayerProfile/john-hawkins_01-removebg-preview.png";
import HeenanImg from "../assets/images/PlayerProfile/jake-heenan_20-removebg-preview.png";

import HolmesImg from "../assets/images/PlayerProfile/ed-holmes_29-removebg-preview.png";

import HughesImg from "../assets/images/PlayerProfile/nathan-hughes_27-removebg-preview.png";
import JoyceImg from "../assets/images/PlayerProfile/joe-joyce_33-removebg-preview.png";
import KessellImg from "../assets/images/PlayerProfile/tom-kessell_08-removebg-preview.png";
import LahiffImg from "../assets/images/PlayerProfile/max-lahiff_24-removebg-preview.png";
import LeiuaImg from "../assets/images/PlayerProfile/alapati-leiua_18-removebg-preview.png";
import LuatuaImg from "../assets/images/PlayerProfile/steven-luatua_30-removebg-preview.png";
import MalinsImg from "../assets/images/PlayerProfile/max-malins_50-removebg-preview.png";
import MccabeImg from "../assets/images/PlayerProfile/peter-mccabe_03-removebg-preview.png";
import MorahanImg from "../assets/images/PlayerProfile/luke-morahan_17-removebg-preview.png";
import NaulagoImg from "../assets/images/PlayerProfile/siva-naulago_45-removebg-preview.png";
import OconnerImg from "../assets/images/PlayerProfile/piers-oconor_11-removebg-preview.png";

import CPiatauImg from "../assets/images/PlayerProfile/charles-piutau_25-removebg-preview.png";
import SPiatauImg from "../assets/images/PlayerProfile/siale-piutau_16-removebg-preview.png";
import PowellImg from "../assets/images/PlayerProfile/charlie-powell_05-removebg-preview.png";
import PurdyImg from "../assets/images/PlayerProfile/henry-purdy_22-removebg-preview.png";
import RadradraImg from "../assets/images/PlayerProfile/semi-radradra_51-removebg-preview.png";

import RandallImg from "../assets/images/PlayerProfile/harry-randall_19-removebg-preview.png";
import SheedyImg from "../assets/images/PlayerProfile/callum-sheedy_52-removebg-preview.png";
import SincklerImg from "../assets/images/PlayerProfile/kyle-sinckler_48-removebg-preview.png";
import ThackerImg from "../assets/images/PlayerProfile/harry-thacker_47-removebg-preview.png";
import DThomasImg from "../assets/images/PlayerProfile/dan-thomas_31-removebg-preview.png";

import YThomasImg from "../assets/images/PlayerProfile/yann-thomas_43-removebg-preview.png";
import UrenImg from "../assets/images/PlayerProfile/andy-uren_32-removebg-preview.png";
import VuiImg from "../assets/images/PlayerProfile/chris-vui_26-removebg-preview.png";
import WoolmoreImg from "../assets/images/PlayerProfile/jake-woolmore_14-removebg-preview.png";

// EHolmes
// NHughes
// JJoyce
// TKessell
// MLahiff
// ALeiua
// SLuatua
// MMalins
// PMccabe
// LMorahan
// SNaulago
// POconner
// CPiatau
// SPiatau
// CPowell
// HPurdy
// SRadradra
// HRandall
// CSheedy
// KSinckler
// HThacker
// DThomas
// YThomas
// AUren
// CVui
// JWoolmore

import NewZealand from "./../assets/images/Flags/NewZealand.png";
import England from "./../assets/images/Flags/England.png";
import Ireland from "./../assets/images/Flags/Ireland.png";
import Fiji from "./../assets/images/Flags/Fiji.png";
import Tonga from "./../assets/images/Flags/Tonga.png";
import Samoa from "./../assets/images/Flags/Samoa.png";
import Wales from "./../assets/images/Flags/Wales.png";

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

const DummyPlayer: IPlayer = {
  playerName: "",
  nationality: "",
  flag: England,
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

const NAdeolokun: IPlayer = {
  playerName: "Niyi Adeolokun",
  nationality: "Ireland",
  flag: Ireland,
  playerImg: AdeolokunImg,
  playerHeight: 190,
  playerAge: 30,
  position: "Wing",
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
  flag: Ireland,
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
  position: "Scrum Half",
  positionNum: [9],
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
  positionNum: [6, 7, 8],
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
  playerName: "Mitch Eadie",
  nationality: "England",
  flag: England,
  playerImg: EadieImg,
  playerHeight: 187,
  playerAge: 30,
  position: "Back Row",
  positionNum: [6, 7, 8],
  strength: 88,
  fitness: 78,
  speed: 60,
  tackling: 87,
  passing: 78,
  attacking: 68,
  defending: 86,
  experience: 87,
};

const BEarl: IPlayer = {
  playerName: "Ben Earl",
  nationality: "England",
  flag: England,
  playerImg: EarlImg,
  playerHeight: 187,
  playerAge: 30,
  position: "Back Row",
  positionNum: [6, 7, 8],
  strength: 88,
  fitness: 78,
  speed: 60,
  tackling: 87,
  passing: 78,
  attacking: 68,
  defending: 86,
  experience: 87,
};

const TEden: IPlayer = {
  playerName: "Tiff Eden",
  nationality: "England",
  flag: England,
  playerImg: EdenImg,
  playerHeight: 187,
  playerAge: 30,
  position: "Fly Half",
  positionNum: [10],
  strength: 88,
  fitness: 78,
  speed: 60,
  tackling: 87,
  passing: 78,
  attacking: 68,
  defending: 86,
  experience: 87,
};

const TFricker: IPlayer = {
  playerName: "Toby Fricker",
  nationality: "England",
  flag: England,
  playerImg: FrickerImg,
  playerHeight: 187,
  playerAge: 30,
  position: "Full Back",
  positionNum: [15],
  strength: 88,
  fitness: 78,
  speed: 60,
  tackling: 87,
  passing: 78,
  attacking: 68,
  defending: 86,
  experience: 87,
};

const JHawkins: IPlayer = {
  playerName: "John Hawkins",
  nationality: "New Zealand",
  flag: England,
  playerImg: HawkinsImg,
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

const JHeenan: IPlayer = {
  playerName: "Jake Heenan",
  nationality: "New Zealand",
  flag: England,
  playerImg: HeenanImg,
  playerHeight: 187,
  playerAge: 30,
  position: "Back Row",
  positionNum: [6, 7],
  strength: 88,
  fitness: 78,
  speed: 60,
  tackling: 87,
  passing: 78,
  attacking: 68,
  defending: 86,
  experience: 87,
};

const EHolmes: IPlayer = {
  playerName: "Ed Holmes",
  nationality: "England",
  flag: England,
  playerImg: HolmesImg,
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

const NHughes: IPlayer = {
  playerName: "Nathan Hughes",
  nationality: "England",
  flag: England,
  playerImg: HughesImg,
  playerHeight: 187,
  playerAge: 30,
  position: "Number 8",
  positionNum: [8],
  strength: 88,
  fitness: 78,
  speed: 60,
  tackling: 87,
  passing: 78,
  attacking: 68,
  defending: 86,
  experience: 87,
};

const JJoyce: IPlayer = {
  playerName: "Joe Joyce",
  nationality: "England",
  flag: England,
  playerImg: JoyceImg,
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

const TKessell: IPlayer = {
  playerName: "Tom Kessell",
  nationality: "England",
  flag: England,
  playerImg: KessellImg,
  playerHeight: 187,
  playerAge: 30,
  position: "Scrum Half",
  positionNum: [9],
  strength: 88,
  fitness: 78,
  speed: 60,
  tackling: 87,
  passing: 78,
  attacking: 68,
  defending: 86,
  experience: 87,
};

const MLahiff: IPlayer = {
  playerName: "Max Lahiff",
  nationality: "New Zealand",
  flag: England,
  playerImg: LahiffImg,
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

const ALeiua: IPlayer = {
  playerName: "Alapati Leiua",
  nationality: "New Zealand",
  flag: Samoa,
  playerImg: LeiuaImg,
  playerHeight: 187,
  playerAge: 30,
  position: "Wing",
  positionNum: [11, 12, 13, 14],
  strength: 88,
  fitness: 78,
  speed: 60,
  tackling: 87,
  passing: 78,
  attacking: 68,
  defending: 86,
  experience: 87,
};

const SLuatua: IPlayer = {
  playerName: "Steven Luatua",
  nationality: "New Zealand",
  flag: NewZealand,
  playerImg: LuatuaImg,
  playerHeight: 187,
  playerAge: 30,
  position: "Back Row",
  positionNum: [6, 7, 8],
  strength: 88,
  fitness: 78,
  speed: 60,
  tackling: 87,
  passing: 78,
  attacking: 68,
  defending: 86,
  experience: 87,
};

const MMalins: IPlayer = {
  playerName: "Max Malins",
  nationality: "England",
  flag: England,
  playerImg: MalinsImg,
  playerHeight: 187,
  playerAge: 30,
  position: "Fullback",
  positionNum: [10, 12, 13, 15],
  strength: 88,
  fitness: 78,
  speed: 60,
  tackling: 87,
  passing: 78,
  attacking: 68,
  defending: 86,
  experience: 87,
};

const PMccabe: IPlayer = {
  playerName: "Pete McCabe",
  nationality: "New Zealand",
  flag: England,
  playerImg: MccabeImg,
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

const LMorahan: IPlayer = {
  playerName: "Luke Morahan",
  nationality: "New Zealand",
  flag: England,
  playerImg: MorahanImg,
  playerHeight: 187,
  playerAge: 30,
  position: "Wing",
  positionNum: [11, 14, 15],
  strength: 88,
  fitness: 78,
  speed: 60,
  tackling: 87,
  passing: 78,
  attacking: 68,
  defending: 86,
  experience: 87,
};

const SNaulago: IPlayer = {
  playerName: "Siva Naulago",
  nationality: "Fiji",
  flag: Fiji,
  playerImg: NaulagoImg,
  playerHeight: 187,
  playerAge: 30,
  position: "Wing",
  positionNum: [11, 14],
  strength: 88,
  fitness: 78,
  speed: 60,
  tackling: 87,
  passing: 78,
  attacking: 68,
  defending: 86,
  experience: 87,
};

const POconner: IPlayer = {
  playerName: "Piers Oconner",
  nationality: "England",
  flag: England,
  playerImg: OconnerImg,
  playerHeight: 187,
  playerAge: 30,
  position: "Centre",
  positionNum: [12, 13, 15],
  strength: 88,
  fitness: 78,
  speed: 60,
  tackling: 87,
  passing: 78,
  attacking: 68,
  defending: 86,
  experience: 87,
};

const CPiatau: IPlayer = {
  playerName: "Charles Piatau",
  nationality: "New Zealand",
  flag: England,
  playerImg: CPiatauImg,
  playerHeight: 187,
  playerAge: 30,
  position: "Full Back",
  positionNum: [15, 11, 14],
  strength: 88,
  fitness: 78,
  speed: 60,
  tackling: 87,
  passing: 78,
  attacking: 68,
  defending: 86,
  experience: 87,
};

const SPiatau: IPlayer = {
  playerName: "Siale Piatau",
  nationality: "Tonga",
  flag: Tonga,
  playerImg: SPiatauImg,
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

const CPowell: IPlayer = {
  playerName: "Charlie Powell",
  nationality: "England",
  flag: England,
  playerImg: PowellImg,
  playerHeight: 187,
  playerAge: 30,
  position: "Wing",
  positionNum: [11, 14],
  strength: 88,
  fitness: 78,
  speed: 60,
  tackling: 87,
  passing: 78,
  attacking: 68,
  defending: 86,
  experience: 87,
};

const HPurdy: IPlayer = {
  playerName: "Henry Purdy",
  nationality: "England",
  flag: England,
  playerImg: PurdyImg,
  playerHeight: 187,
  playerAge: 30,
  position: "Wing",
  positionNum: [11, 14],
  strength: 88,
  fitness: 78,
  speed: 60,
  tackling: 87,
  passing: 78,
  attacking: 68,
  defending: 86,
  experience: 87,
};

const SRadradra: IPlayer = {
  playerName: "Semi Radradra",
  nationality: "Fiji",
  flag: Fiji,
  playerImg: RadradraImg,
  playerHeight: 187,
  playerAge: 30,
  position: "Centre",
  positionNum: [12, 13, 14],
  strength: 88,
  fitness: 78,
  speed: 60,
  tackling: 87,
  passing: 78,
  attacking: 68,
  defending: 86,
  experience: 87,
};

const HRandall: IPlayer = {
  playerName: "Harry Randall",
  nationality: "England",
  flag: England,
  playerImg: RandallImg,
  playerHeight: 187,
  playerAge: 30,
  position: "Scrum Half",
  positionNum: [9],
  strength: 88,
  fitness: 78,
  speed: 60,
  tackling: 87,
  passing: 78,
  attacking: 68,
  defending: 86,
  experience: 87,
};

const CSheedy: IPlayer = {
  playerName: "Callum Sheedy",
  nationality: "New Zealand",
  flag: Wales,
  playerImg: SheedyImg,
  playerHeight: 187,
  playerAge: 30,
  position: "Fly Half",
  positionNum: [10],
  strength: 88,
  fitness: 78,
  speed: 60,
  tackling: 87,
  passing: 78,
  attacking: 68,
  defending: 86,
  experience: 87,
};

const KSinckler: IPlayer = {
  playerName: "Kyle Sinckler",
  nationality: "New Zealand",
  flag: England,
  playerImg: SincklerImg,
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

const HThacker: IPlayer = {
  playerName: "Harry Thacker",
  nationality: "England",
  flag: England,
  playerImg: ThackerImg,
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

const DThomas: IPlayer = {
  playerName: "Daniel Thomas",
  nationality: "Wales",
  flag: Wales,
  playerImg: DThomasImg,
  playerHeight: 187,
  playerAge: 30,
  position: "Back Row",
  positionNum: [6, 7],
  strength: 88,
  fitness: 78,
  speed: 60,
  tackling: 87,
  passing: 78,
  attacking: 68,
  defending: 86,
  experience: 87,
};

const YThomas: IPlayer = {
  playerName: "Yann Thomas",
  nationality: "England",
  flag: England,
  playerImg: YThomasImg,
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

const AUren: IPlayer = {
  playerName: "Andy Uren",
  nationality: "England",
  flag: England,
  playerImg: UrenImg,
  playerHeight: 177,
  playerAge: 30,
  position: "Scrum Half",
  positionNum: [9],
  strength: 88,
  fitness: 78,
  speed: 60,
  tackling: 87,
  passing: 78,
  attacking: 68,
  defending: 86,
  experience: 87,
};

const CVui: IPlayer = {
  playerName: "Chris Vui",
  nationality: "Samoa",
  flag: Samoa,
  playerImg: VuiImg,
  playerHeight: 187,
  playerAge: 30,
  position: "Second Row" || "Back Row",
  positionNum: [4, 5, 6, 7],
  strength: 88,
  fitness: 78,
  speed: 60,
  tackling: 87,
  passing: 78,
  attacking: 68,
  defending: 86,
  experience: 87,
};

const JWoolmore: IPlayer = {
  playerName: "Jake Woolmore",
  nationality: "England",
  flag: England,
  playerImg: WoolmoreImg,
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

const initialTeam: IPlayer[] = [
  DummyPlayer,
  DummyPlayer,
  DummyPlayer,
  DummyPlayer,
  DummyPlayer,
  DummyPlayer,
  DummyPlayer,
  DummyPlayer,
  DummyPlayer,
  DummyPlayer,
  DummyPlayer,
  DummyPlayer,
  DummyPlayer,
  DummyPlayer,
  DummyPlayer,
];

const players: IPlayer[] = [
  SLuatua,
  // HThacker,
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
  BEarl,
  TEden,
  TFricker,
  JHawkins,
  JHeenan,
  EHolmes,
  NHughes,
  JJoyce,
  TKessell,
  MLahiff,
  ALeiua,
  // SLuatua,
  MMalins,
  PMccabe,
  LMorahan,
  SNaulago,
  POconner,
  CPiatau,
  SPiatau,
  CPowell,
  HPurdy,
  SRadradra,
  HRandall,
  CSheedy,
  KSinckler,
  HThacker,
  DThomas,
  YThomas,
  AUren,
  CVui,
  JWoolmore,
  DummyPlayer,
];

export { initialTeam };

export default players;
