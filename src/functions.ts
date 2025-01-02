const formatDate = (date: Date | string) => {
    if (typeof date === "string") {
      date = new Date(date);
    }
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "short",
      year: "numeric",
    };
    return date.toLocaleDateString("en-GB", options).replace(",", "");
};

export {formatDate}