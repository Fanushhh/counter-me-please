import Image from "next/image";
import styles from "./Champion.module.css";

import { Skills } from "../components/Skills/Skills";
import Link from "next/link";

async function getChampion(champion) {
  
  
  try {
    const response = await fetch(
      `https://cdn.merakianalytics.com/riot/lol/resources/latest/en-US/champions/${champion}.json`
    );
    if (response.status !== 200) {
      return null;
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching champion data:", error);
  }
}

export async function generateMetadata({ params }) {
  const champion = await getChampion(params.slug);
  if (!champion) {
    return {
      notFound: true,
    };
  }
  return {
    title: champion.name,
    description: champion.title,
  };
}

export default async function ChampionPage({ params }) {
  const championData = await getChampion(params.slug);
  const [champion] = await Promise.all([championData]);
  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(http://raw.communitydragon.org/pbe/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/${champion.id}/${champion.skins[0].id}.jpg)`,
    backgroundSize: "cover, cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  };
  console.log(champion.id)
  if (!champion) {
    return null;
  }
  return (
    <main className={styles.wrapper} style={backgroundStyle}>
    
      <section className={styles.championContainer}>
        <Link href="/">Return Home</Link>
        <div className={styles.championProfile}>
          <Image
            priority={true}
            width={125}
            height={125}
            alt={champion.title}
            src={`http://ddragon.leagueoflegends.com/cdn/14.6.1/img/champion/${champion.name}.png`}
          />

          <div>
            <h1>{champion.name}</h1>
            <p>{champion.title}</p>
          </div>
        </div>
        {/* <div className={styles.championRoles}>
          {champion.tags.map((tag, index) => {
            
           
            return (
              <span style={{backgroundColor: `var(--${tag.toLowerCase()})`}} key={index}>
                {tag}
              </span>
            );
          })}
        </div> */}
        {/* <div className={styles.championSkills}>
          <h2>Skills</h2>
          <Skills skills={champion.abilities} />
        </div> */}
        {/* <div className={styles.championLore}>
          <h2>Lore</h2>
          <p>{champion.lore}</p>
        </div>
        <div>
          <h2>Stats</h2>
          <ul className={styles.championStats}>
            <li>
              <strong>Attack Damage:</strong> {champion.stats.attackdamage}
            </li>
            <li>
              <strong>Attack Range:</strong> {champion.stats.attackrange}
            </li>
            <li>
              <strong>Attack Speed:</strong> {champion.stats.attackspeed}
            </li>
            <li>
              <strong>Armor:</strong> {champion.stats.armor}
            </li>
            <li>
              <strong>Health:</strong> {champion.stats.hp}
            </li>
            <li>
              <strong>Health Regen:</strong> {champion.stats.hpregen}
            </li>
            <li>
              <strong>Mana/Energy:</strong> {champion.stats.mp}
            </li>
            <li>
              <strong>Mana/Energy Regen:</strong> {champion.stats.mpregen}
            </li>
            <li>
              <strong>Movement Speed:</strong> {champion.stats.movespeed}
            </li>
            <li>
              <strong>Spell Block:</strong> {champion.stats.spellblock}
            </li>
          </ul>
        </div> */}
        {/* <div className={styles.championTips}>
          <div className={styles.allyTips}>
            <p>Ally tips:</p>
            <ul>
              {champion.allytips.map((tip, index) => {
                return <li key={index}>- {tip}</li>;
              })}
            </ul>
          </div>
          <div className={styles.enemyTips}>
            <p>Enemy tips:</p>
            <ul>
              {champion.enemytips.map((tip, index) => {
                return <li key={index}>- {tip}</li>;
              })}
            </ul>
          </div>
        </div> */}
      </section>
    </main>
  );
}
