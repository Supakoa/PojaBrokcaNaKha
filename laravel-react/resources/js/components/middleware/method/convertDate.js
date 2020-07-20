const _convertDate = async _date => {
    let date = new Date(_date);
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
    return ` ${date[1].substr(0, 8)} ${date[0].split("-")[2]}/${
        date[0].split("-")[1]
    }/${date[0].split("-")[0]}`;
};

export default _convertDate;
