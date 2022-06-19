import api from "../../services/api"
import { useEffect, useState } from "react"
import { Digimon } from "../Digimon"
import { IDigimon } from "../../interfaces/IDigimon"

import './style.scss'


export const ListDigimons = () =>{
    const [digimons, setDigimons] =useState<IDigimon[]>([])
    const getDigimons = () =>{
        api.get("digimon")
        .then(response=>setDigimons(response.data))
    }
    useEffect(()=>{
        getDigimons();
    },[])
    return(
        <div className="digimons-list">
            {digimons.map((digimon)=>(
                <Digimon key={digimon.name} digimon={digimon} />
            ))}
        </div>
    )
}