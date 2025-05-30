interface IPrintablePuja {
  // srno: string;
  // id: string | null;
  // bookingId: string | null;
  // pujaId: string | null;
  pujaName: string | null;
  participantName: string | null;
  participantNakshatra: string | null;
  // isReservedPuja: boolean | null;
  paymentStatus: string | null;
  // bookingDate: Date | string | null;
  amount: number | null;
  date: Date | string | null;
  // mobile: Number | null;
  priestNote?: string | null;
  // address: string | null;
}

interface IPujaReceipt {
  templeName: string;
  address: string;
  receiptNumber: string;
  date?: Date | undefined | null;
  dates?: Date[],
  pujaName: string;
  participants: {participantName?: string, participantNakshatra: string}[];
  pujaPrice: Number;
  status?: "confirmed" | "pending" | null | undefined;
  pujaQty?: Number;
}

interface ITotalReceipt {
  templeName: string;
  address: string;
  receiptNumber: string;
  numberOfPujas: Number;
  totalAmount: Number;
  qrContent?: string;
}

interface IPujaReport {
  templeName: string;
  dates: [Date, Date];
  pujas : {
    name: string;
    repeatCount?: Number;
    pujaQty?: Number;
    participantName: string;
    participantNakshatra: string;
    pujaDate: Date;
    pujaAmount: Number;
    prasadam?: string;
  }[]
}


interface IQuickReport {
  templeName: string;
  receiptNumber: string;
  address: string;
  pujas : {
    name: string;
    pujaQty?: number;
    pujaAmount: number;
    pujaDate: Date;
  }[]
}

export type { IPrintablePuja, IPujaReceipt, ITotalReceipt, IPujaReport, IQuickReport };
