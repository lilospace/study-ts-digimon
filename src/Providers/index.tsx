import { FovoriteDigimonProvider } from "./digimon";
import { IFavoriteDigimonProviderProps } from "../interfaces/IFavoriteDigimonProviderProps";

const Providers = ({children}: IFavoriteDigimonProviderProps ) =>{
    return <FovoriteDigimonProvider>{children}</FovoriteDigimonProvider>
}

export default Providers