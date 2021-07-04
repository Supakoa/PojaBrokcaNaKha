const wordShow = (word, t) => {
    switch (word) {
        case "edited":
            return t("filter.edit");
        case "approved":
            return t("filter.approved");
        case "cancelled":
            return t("filter.cancel");
        case "all":
            return t("filter.all");
        case "rejected":
            return t("filter.reject");
        case "pending":
            return t("filter.pending");
        default:
            return "Not Found";
    }
};

export default wordShow;
