import React from "react";

const Options = ({ opcion, percentage, timesVoted, participants }) => {
    console.log(percentage);
    return (
        <div className="w-full mb-5">
            <div className="flex mb-3">
                <p className="font-semibold">{opcion}</p>
            </div>
            <div className="w-full h-2 border border-primaryPurple rounded mb-2">
                <div
                    className="h-full bg-primaryPurple rounded"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
            <p className="text-sm">
                {timesVoted} de {participants} votaron esta opción{" "}
            </p>
        </div>
    );
};

export default Options;
