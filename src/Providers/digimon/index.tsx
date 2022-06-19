import { createContext, useContext, useState} from "react";
import { IDigimon } from "../../interfaces/IDigimon";
import { IDigimonProviderData } from "../../interfaces/IDigimonsProviderData";
import { IFavoriteDigimonProviderProps } from "../../interfaces/IFavoriteDigimonProviderProps";
const FavoriteDigimonContext =  createContext<IDigimonProviderData>(
    {} as IDigimonProviderData
)

export const FovoriteDigimonProvider = ({
    children,
}: IFavoriteDigimonProviderProps) =>{
    const [favorites, setFavorites] = useState<IDigimon[]>([]);

    const [digimons, setDigimons] =useState<IDigimon[]>([])


    const addDigimon = (digimon : IDigimon) =>{
        setFavorites([...favorites, digimon]);
        console.log(favorites);
    }

    const deleteDigimon = (digimonToBeDeleted: IDigimon) =>{
        const newList = favorites.filter((digimon)=>
            digimon.name !== digimonToBeDeleted.name
        );
        setFavorites(newList)
    }

    return(
        <FavoriteDigimonContext.Provider
            value={{favorites, addDigimon, deleteDigimon}}
        >
            {children}
        </FavoriteDigimonContext.Provider>
    )
}

export const useFavoriteDigimon = () => useContext(FavoriteDigimonContext)