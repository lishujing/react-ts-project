import React from 'react'

interface IRobotProps {
    id: Number,
    name: String,
    email: String
}

const Robot: React.FC<IRobotProps> = ({ id, name, email }) => {
    return <li>
        <img alt="robot" src={`https://robohash.org/${id}`} />
        <h2>{name}</h2>
        <p>{email}</p>
    </li>
}

export default Robot