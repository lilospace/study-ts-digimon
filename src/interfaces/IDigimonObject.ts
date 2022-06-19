import { Dispatch, SetStateAction } from "react";
import { IDigimon } from "./IDigimon"
import { IDigimonProviderData } from "./IDigimonsProviderData";
export interface IDigimonObject{
    digimon: IDigimon,
    delete?: boolean,
}