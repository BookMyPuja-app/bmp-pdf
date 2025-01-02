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

export type {IPrintablePuja}