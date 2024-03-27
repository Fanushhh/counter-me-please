'use client';
import { React, useRef, useEffect } from "react";

export const Audio = ({ champion }) => {
    const audioRef = useRef(null);
    useEffect(() => {
        if(audioRef.current){

            audioRef.current.volume = 1;
        }
    },[champion])
    return (
        <audio ref={audioRef}
        autoPlay={true}
        
        src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-choose-vo/${champion.id}.ogg`}
      ></audio>
    )

}