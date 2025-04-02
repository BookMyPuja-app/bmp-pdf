"use client";

import { useEffect } from "react";
import { reportPrinter } from "../../../../package/src";

const A4 = () => {
  const links = [
    {
      title: "Summary",
      href: "/print/a4/summary",
    },
    {
      title: "Puja List",
      href: "/print/a4/puja-list",
    },
    {
      title: "Kitchen Report",
      href: "/print/a4/kitchen-report",
    },
    {
      title: "Prasad Report",
      href: "/print/a4/prasad-report",
    },
    {
      title: "Transaction Report",
      href: "/print/a4/transaction-report",
    },
    {
      title: "Prasad Delivery",
      href: "/print/a4/prasad-delivery",
    },
  ];

  useEffect(() => {
    const printer = new reportPrinter("puja", "A4");
    printer.print({
      templeName: "Test Temple",
      date: new Date(),
      pujas:[
        {
          bookings: [
            {
              devoteeName: "John Doe",
              invoiceNumber: "INV123",
              nakshatra: "Ashwini",
              priestNote: "Priest Note",
              quantity: "12",
            }
          ],
          name: "Puja Name",
        }
      ]
    });
  }, []);

  return (
    <div className="p-20">
      <ul>
        {links.map((link) => (
          <li className="list-decimal" key={link.title}>
            <a href={link.href}>{link.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default A4;
