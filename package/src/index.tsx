import { pdf } from "@react-pdf/renderer";
import A4Print from "./sizes/A4Print";
import { IPrintablePuja } from "./types";
import React from "react";
import T2Inch from "./sizes/T2Inch";
import type {
  IPujaReceipt,
  IPujaReport,
  IQuickReport,
  ITotalReceipt,
} from "./types";
import { getDevoteeReceipt2InchBase64Data } from "./sizes/receipt/DevoteeReceipt2Inch";
import { getTotalReceipt2InchBase64Data } from "./sizes/receipt/TotalReceipt2Inch";
import { getPujaReportReceipt2InchBase64Data } from "./sizes/receipt/PujaReport2Inch";
import { getQuickReceipt2InchBase64Data } from "./sizes/receipt/QuickReceipt2Inch";
import A4KitchenReport, {
  KitchenReportData,
  KitchenReportProps,
} from "./sizes/a4/A4KitchenReport";
import A4TransactionReport, {
  ITransactionItem,
  ITransactionReport,
} from "./sizes/a4/A4TransactionReport";
import A4PrasadDelivery, { IPrasadDelivery } from "./sizes/a4/A4PrasadDelivery";
import A4PrasadReport, { IPrasadReport } from "./sizes/a4/A4PrasadReport";
import A4PujaList, { IPujaList } from "./sizes/a4/A4PujaList";
import A4Summary, { ISummaryPujaList } from "./sizes/a4/A4Summary";
import { notoSansRegular, notoSansBold, notoSansSemiBold } from "./constants";
import { Font } from "@react-pdf/renderer";
import A4CombinedReport, { CombinedReportData } from "./sizes/a4/A4CombinedReport";
import A4MultiTemplePaymentReport, { IMultiTemplePaymentReport } from "./sizes/a4/A4MultiTemplePaymentReport";

type sizeOptions = "A4" | "2Inch";

const getPrintBlob = ({
  size,
  data,
  dates,
}: {
  size: sizeOptions;
  data: IPrintablePuja[];
  dates: [string | Date, string | Date];
}) => {
  if (size === "A4") {
    const blob = pdf(<A4Print data={data} dates={dates} />).toBlob();
    return blob;
  } else {
    const blob = pdf(<T2Inch data={data} dates={dates} />).toBlob();
    return blob;
  }
};

const getA4SummaryBlob = async () => {
  const blob = await pdf(<A4Print data={[]} dates={["", ""]} />).toBlob();
  return blob;
};

const printDevoteeReceipt2Inch = async (data: IPujaReceipt) => {
  const base64DataObject = await getDevoteeReceipt2InchBase64Data(data);
  var S = "#Intent;scheme=rawbt;";
  var P = "package=ru.a402d.rawbtprinter;end;";
  window.location.href = "intent:" + "base64," + base64DataObject + S + P;
};

const printTotalReceipt2Inch = async (data: ITotalReceipt) => {
  const base64DataObject = await getTotalReceipt2InchBase64Data(data);
  var S = "#Intent;scheme=rawbt;";
  var P = "package=ru.a402d.rawbtprinter;end;";
  window.location.href = "intent:" + "base64," + base64DataObject + S + P;
};

const printePujaReport2Inch = async (data: IPujaReport) => {
  const base64DataObject = await getPujaReportReceipt2InchBase64Data(data);
  var S = "#Intent;scheme=rawbt;";
  var P = "package=ru.a402d.rawbtprinter;end;";
  window.location.href = "intent:" + "base64," + base64DataObject + S + P;
};

const printQuickPrintReceipt2Inch = async (data: IQuickReport) => {
  const base64DataObject = await getQuickReceipt2InchBase64Data(data);
  var S = "#Intent;scheme=rawbt;";
  var P = "package=ru.a402d.rawbtprinter;end;";
  window.location.href = "intent:" + "base64," + base64DataObject + S + P;
};

const options = {
  kitchen: {
    A4: A4KitchenReport,
  },
  transaction: {
    A4: A4TransactionReport,
  },
  "prasad-delivery": {
    A4: A4PrasadDelivery,
  },
  prasad: {
    A4: A4PrasadReport,
  },
  "puja-detailed": {
    A4: A4PujaList,
  },
  "puja-summary": {
    A4: A4Summary,
  },
  "combined-report" : {
    A4: A4CombinedReport,
  },
  "multi-temple-payment": {
    A4: A4MultiTemplePaymentReport,
  },
};

type IReportOptions =
  | "kitchen"
  | "transaction"
  | "prasad-delivery"
  | "prasad"
  | "puja-detailed"
  | "puja-summary"
  | "combined-report"
  | "multi-temple-payment";
type IReportSize = "A4";

// Define types for the data expected by each report option
type ReportDataTypes = {
  kitchen: KitchenReportProps;
  transaction: ITransactionReport;
  "prasad-delivery": IPrasadDelivery;
  prasad: IPrasadReport;
  "puja-detailed": IPujaList;
  "puja-summary": ISummaryPujaList;
  "combined-report": CombinedReportData;
  "multi-temple-payment": IMultiTemplePaymentReport;
};

class reportPrinter<T extends IReportOptions> {
  option: T;
  size: IReportSize;

  constructor(option: T, size: IReportSize) {
    this.option = option;
    this.size = size;

    Font.register({
      family: "Noto Sans",
      fontWeight: "normal",
      src: notoSansRegular,
    });

    Font.register({
      family: "Noto Sans",
      fontWeight: "bold",
      src: notoSansBold,
    });

    Font.register({
      family: "Noto Sans",
      fontWeight: "semibold",
      src: notoSansSemiBold,
    });
  }

  async print(data: ReportDataTypes[T]): Promise<Blob> {
    const ReportComponent = options[this.option][this.size];
    const document = <ReportComponent {...(data as any)} />;
    const blob = pdf(document).toBlob();
    blob.then((blob) => {
      var blobURL = URL.createObjectURL(blob);
      if (window != null) {
        const printWindow = window.open(blobURL, "_blank");
        setTimeout(() => {
          printWindow?.print();
        }, 1000);
      }
    });
    return blob;
  }

  async getBlob(data: ReportDataTypes[T]): Promise<Blob> {
    const ReportComponent = options[this.option][this.size];
    const document = <ReportComponent {...(data as any)} />;
    const blob = pdf(document).toBlob();
    return blob;
  }

}

export {
  getPrintBlob,
  T2Inch,
  A4Print,
  printDevoteeReceipt2Inch,
  printTotalReceipt2Inch,
  printePujaReport2Inch,
  printQuickPrintReceipt2Inch,
  getA4SummaryBlob,
  reportPrinter,
};
export type {
  IPrintablePuja,
  IPujaReceipt,
  KitchenReportProps as IKitchenReport,
  ITransactionReport,
  IPrasadDelivery,
  IPrasadReport,
  IPujaList as IPujaReport,
  ISummaryPujaList as ISummaryPujaReport,
  IMultiTemplePaymentReport,
};
