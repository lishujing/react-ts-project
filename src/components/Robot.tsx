import React from 'react'
import styles from './Robot.module.css'

interface IRobotProps {
    id: Number,
    name: String,
    email: String
}

const Robot: React.FC<IRobotProps> = ({ id, name, email }) => {
    return <div className={styles.cardContainer}>
        <img alt="robot" src={`https://robohash.org/${id}`} />
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
}

export default Robot