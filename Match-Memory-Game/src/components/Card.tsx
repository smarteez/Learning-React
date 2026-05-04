import type { CardProps } from "../types/CardProps"

export const Card = ({ card, onClick }: CardProps) => 
    {    
        return (
            <div
                className={`card ${card.isFlipped ? "flipped" : ""} ${card.isMatched ? "matched" : ""}`}
                onClick={() => onClick(card)}
    >
                <div className="card-front">?</div>
                <span className="card-back">{card.value}</span>
            </div>
        )
    }