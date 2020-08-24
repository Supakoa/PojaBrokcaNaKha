const wordShow = (word, t) => {
    switch (word) {
        case "edit":
            return t("filter.edit");
        case "approve":
            return t("filter.approved");
        case "cancel":
            return t("filter.cancel");
        case "all":
            return t("filter.all");
        case "pending":
            return t("filter.pending");
        default:
            return "Not Found";
    }
};

export default wordShow;
