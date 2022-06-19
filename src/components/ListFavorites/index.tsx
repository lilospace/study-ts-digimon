import { useFavoriteDigimon } from "../../Providers/digimon"
import { Digimon } from "../Digimon"
import './style.scss'
export const ListFavorites = () =>{
    const {favorites} = useFavoriteDigimon()
    return(
        <div className="favorites">
            {favorites.map((digimon)=> (
                <Digimon digimon={digimon} delete={true}/>
            ))}
        </div>
    )
}