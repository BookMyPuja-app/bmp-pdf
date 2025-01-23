"use client";

const PrintButton = ({ base64Data }: { base64Data: string }) => {
  if (!base64Data) {
    return null;
  }

  function BtPrint(printerData: string) {
    var S = "#Intent;scheme=rawbt;";
    var P = "package=ru.a402d.rawbtprinter;end;";
    window.location.href = "intent:" + "base64," + printerData + S + P;
  }

  const printNow = () => {
    BtPrint(base64Data);
  };

  return <button onClick={printNow}>Print</button>;
};

const printNow = (base64Data: string) => {
  alert("Printing");
  var S = "#Intent;scheme=rawbt;";
  var P = "package=ru.a402d.rawbtprinter;end;";
  window.location.href = "intent:" + "base64," + base64Data + S + P;
};

export {printNow};

export default PrintButton;
