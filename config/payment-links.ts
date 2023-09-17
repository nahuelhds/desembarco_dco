export type PaymentLink = {
  name: string;
  link: string;
};

// @TODO: set an error link
export const MONTHLY_SUBSCRIPTIONS = [
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
];

const UNIQUE_PAYMENT = [
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
];

const INTERNATIONAL_PAYMENT = [
  {
    name: "Aportá desde el exterior",
    link: process.env.INTERNATIONAL_PAYMENT ?? "#",
  },
];
