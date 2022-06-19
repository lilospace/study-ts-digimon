import { IDigimon } from "./IDigimon";
export interface IDigimonProviderData{
    favorites : IDigimon[],
    addDigimon: (digimon: IDigimon) =>void;
    deleteDigimon: (digimon: IDigimon) => void;
}