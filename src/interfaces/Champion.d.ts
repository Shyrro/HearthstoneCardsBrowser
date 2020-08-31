import { TacticalInfo } from "./TacticalInfo";
import { PlayStyleInfo } from "./PlayStyleInfo";
import { Skin } from "./Skin";

export interface Champion {
   id: number,
   name: string,
   alias: string,
   title: string,
   shortBio: string,
   tacticalInfo: TacticalInfo,
   playStyleInfo: PlayStyleInfo,
   squarePortraitPath: string,
   stingerSfxPath: string,
   chooseVoPath: string,
   roles: Array<string>,
   recommendedItemDefaults: Array<string>,
   skins: Array<Skin>,
}