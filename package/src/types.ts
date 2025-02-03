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
  receiptNumber: Number;
  date?: Date | undefined | null;
  dates?: Date[],
  pujaName: string;
  participants: {participantName?: string, participantNakshatra: string}[];
  pujaPrice: Number;
  status?: "confirmed" | "pending" | null | undefined;
}

interface ITotalReceipt {
  templeName: string;
  address: string;
  receiptNumber: Number;
  numberOfPujas: Number;
  totalAmount: Number;
  qrContent?: string;
}

export type { IPrintablePuja, IPujaReceipt, ITotalReceipt };
