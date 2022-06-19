import { useFavoriteDigimon } from "../../Providers/digimon"; 
import { IDigimonObject } from "../../interfaces/IDigimonObject";
import './style.scss'

export const Digimon = (digimon : IDigimonObject, setDigimons : IDigimonObject) =>{
    const {addDigimon, deleteDigimon} = useFavoriteDigimon();
    const digimonObj = digimon.digimon
    
    return(
        <div className="card-digimon">
            <img src={digimonObj.img} alt={digimonObj.name} loading="lazy" />
            <h2>{digimonObj.name}</h2>
            <h4>{digimonObj.level}</h4>
            {digimon.delete
                ? <button onClick={()=>{deleteDigimon(digimonObj)}}>Remover</button>
                : <button onClick={()=>addDigimon(digimonObj)}>Favorite</button>
            }
        </div>
    )
}