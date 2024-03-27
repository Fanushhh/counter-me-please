'use client'
import styles from './Tooltip.module.css';

export const Tooltip = ({ spell}) => {
    
    return (
        <div className={styles.tooltipWrapper}>
            <h3>{spell.name}</h3>
            <p>{spell.description}</p>
            <div className={styles.skillCost}> Cost: {spell.cost.map((cost, index) => {
                return <span key={index}>{cost}</span>
                
            })}</div>
        </div>
    )
}