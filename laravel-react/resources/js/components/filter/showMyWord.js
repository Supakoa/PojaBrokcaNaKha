const wordShow = word => {
    switch (word) {
        case "edit":
            return word.toLowerCase() + "ed";
        case "approve":
            return word.toLowerCase() + "d";
        case "cancel":
            return word.toLowerCase() + "ed";

        default:
            return word.toLowerCase();
    }
};

export default wordShow;
