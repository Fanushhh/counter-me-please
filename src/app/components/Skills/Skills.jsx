"use client";
import Image from "next/image";
import { Tooltip } from "../Tooltip/Tooltip";
import styles from "./Skills.module.css";
import React from "react";

export const Skills = ({ skills }) => {
  const [isVisible, setIsVisible] = React.useState({});

  return <section>
    <div className={styles.skills}>
      {skills.map((spell) => {
    
        return (
          <div key={spell.id} className={styles.skill}>
            <Image
              onClick={() => setIsVisible((prev) => {
                return {
                  [spell.id]: !prev[spell.id]
                };
              } )}
              priority={true}
              width={50}
              height={50}
              alt={spell.name}
              src={`http://ddragon.leagueoflegends.com/cdn/11.8.1/img/spell/${spell.id}.png`}
              className={isVisible[spell.id] ? styles.active : ""}
            />
    
          </div>
        );
      })}
      
    </div>
    {Object.keys(isVisible).map((key) => {
        return isVisible[key] ? <Tooltip key={key} spell={skills.find((spell) => spell.id === key)} /> : null;
      })}
  </section>;
};
