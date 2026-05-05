import ContactForm from "@/components/ContactFrom";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact UECO Entertainment for event planning, production, and creative services.",
  keywords: [
    "contact UECO Entertainment",
    "event planners contact",
    "hire event management company",
  ],
};

export default function ContactPage() {
  return <ContactForm />;
}
