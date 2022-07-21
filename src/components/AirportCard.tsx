import React from 'react';
import {IAirport} from "../models/models";
import {useNavigate} from "react-router-dom";

interface AirportCardProps {
    airport: IAirport
}

const AirportCard = ({ airport } : AirportCardProps) => {
    const navigate = useNavigate();

    const clickHandler = () => navigate(`/airport/${airport.id}`);

    return (
        <div className="border rounded-md py-2 px-2 mt-3 hover:shadow-md hover:transition-all cursor-pointer">
            <p className="text-lg font-bold" onClick={clickHandler}>{airport.name}</p>
            <p>{airport?.region}</p>
            <p>{airport?.type}</p>
            <p>{airport?.country}</p>
            <p>{airport?.local_code}</p>
            <p>{airport?.ident}</p>

        </div>
    );
};

export default AirportCard;