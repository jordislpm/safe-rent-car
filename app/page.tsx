
import Hero from "@/components/Hero/Hero";
import PrincipalSection from "@/components/PrincipalSection/PrincipalSection";
import { PrincipalSectionProps } from "@/types";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero/>
      <PrincipalSection />
    </main>
  );
}
