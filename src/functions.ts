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

function BtPrint(printerData: string) {
  var S = "#Intent;scheme=rawbt;";
  var P = "package=ru.a402d.rawbtprinter;end;";
  window.location.href = "intent:" + "base64," + printerData + S + P;
}

export {formatDate, BtPrint}