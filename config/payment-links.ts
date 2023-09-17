export type PaymentLink = {
  name: string;
  link: string;
};

// @TODO: set an error link
export const MONTHLY_SUBSCRIPTION = [
  {
    name: "100",
    link: process.env.MONTHY_SUBSCRIPTION_0100 ?? "#",
  },
  {
    name: "200",
    link: process.env.MONTHY_SUBSCRIPTION_0200 ?? "#",
  },
  {
    name: "400",
    link: process.env.MONTHY_SUBSCRIPTION_0400 ?? "#",
  },
  {
    name: "800",
    link: process.env.MONTHY_SUBSCRIPTION_0800 ?? "#",
  },
  {
    name: "1000",
    link: process.env.MONTHY_SUBSCRIPTION_1000 ?? "#",
  },
  {
    name: "1500",
    link: process.env.MONTHY_SUBSCRIPTION_1500 ?? "#",
  },
];

export const UNIQUE_PAYMENTS = [
  {
    name: "100",
    link: process.env.UNIQUE_PAYMENT_0100 ?? "#",
  },
  {
    name: "200",
    link: process.env.UNIQUE_PAYMENT_0200 ?? "#",
  },
  {
    name: "400",
    link: process.env.UNIQUE_PAYMENT_0400 ?? "#",
  },
  {
    name: "800",
    link: process.env.UNIQUE_PAYMENT_0800 ?? "#",
  },
  {
    name: "1000",
    link: process.env.UNIQUE_PAYMENT_1000 ?? "#",
  },
  {
    name: "1500",
    link: process.env.UNIQUE_PAYMENT_1500 ?? "#",
  },
];

export const INTERNATIONAL_PAYMENTS = [
  {
    name: "Aportar por PayPal",
    link: process.env.INTERNATIONAL_PAYMENT ?? "#",
  },
];
