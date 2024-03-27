"use client";
import Image from "next/image";
import { Tooltip } from "../Tooltip/Tooltip";
import styles from "./Skills.module.css";
import React from "react";

export const Skills = ({ skills, championName }) => {
  const [isVisible, setIsVisible] = React.useState({});

  return (
    <section>
      <div className={styles.skills}>
        {skills.map((spell) => {
          return (
            <div key={crypto.randomUUID()} className={styles.skill}>
              <Image
                onClick={() =>
                  setIsVisible((prev) => {
                    return {
                      [spell.spellKey]: !prev[spell.spellKey],
                    };
                  })
                }
                priority={true}
                width={50}
                height={50}
                alt={spell.name}
                src={`https://cdn.communitydragon.org/latest/champion/${championName}/ability-icon/${spell.spellKey}`}
                className={isVisible[spell.spellKey] ? styles.active : ""}
              />
            </div>
          );
        })}
      </div>
      {Object.keys(isVisible).map((key) => {
        return isVisible[key] ? (
          <Tooltip
            key={key}
            spell={skills.find((spell) => spell.spellKey === key)}
          />
        ) : null;
      })}
    </section>
  );
};
