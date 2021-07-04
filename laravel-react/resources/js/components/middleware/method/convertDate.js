import React from "react";
const ConvertDate = ({ dateTime }) => {
    let date = new Date(dateTime);
    date = new Date(
        Date.UTC(
            date.getFullYear(),
            date.getMonth(),
            date.getDate(),
            date.getHours(),
            date.getMinutes(),
            date.getSeconds()
        )
    )
        .toISOString()
        .split("T");
    return (
        <span>
            {` ${date[1].substr(0, 8)} ${date[0].split("-")[2]}/${
                date[0].split("-")[1]
            }/${date[0].split("-")[0]}`}
        </span>
    );
};

export default ConvertDate;
