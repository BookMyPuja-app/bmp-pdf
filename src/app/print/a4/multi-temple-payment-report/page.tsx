"use client";

import { PDFViewer } from '@react-pdf/renderer';
import React from 'react';
import A4MultiTemplePaymentReport from '../../../../../package/src/sizes/a4/A4MultiTemplePaymentReport';

const MultiTemplePaymentReport = () => {

    const date = new Date();

    const data = [
        {
            name: "Sri Vitthal Rukmini Mandir",
            revenue: 50000,
            bookings: 120
        },
        {
            name: "Shree Ganesh Mandir",
            revenue: 30000,
            bookings: 80
        },
        {
            name: "Shree Hanuman Mandir",
            revenue: 20000,
            bookings: 60
        },
        {
            name: "Shree Durga Mandir",
            revenue: 15000,
            bookings: 40
        },
        {
            name: "Shree Krishna Mandir",
            revenue: 10000,
            bookings: 30
        }
    ];

    return (
    <div>
      <PDFViewer className="w-full h-screen">
        <A4MultiTemplePaymentReport startDate={date} endDate={date} data={data} />
      </PDFViewer>
    </div>
    )
}


export default MultiTemplePaymentReport;