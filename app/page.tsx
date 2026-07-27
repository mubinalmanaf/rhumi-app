import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Turn from "@/components/sections/Turn";
import Ritual from "@/components/sections/Ritual";
import Companion from "@/components/sections/Companion";
import ComeAsYouAre from "@/components/sections/ComeAsYouAre";
import Integrity from "@/components/sections/Integrity";
import Invitation from "@/components/sections/Invitation";
import SiteFooter from "@/components/sections/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Night → first light */}
        <Hero />
        {/* The noise */}
        <Problem />
        {/* The turn — sky begins to lighten */}
        <Turn />
        {/* The ritual — how it works */}
        <Ritual />
        {/* The companion — difference + trust */}
        <Companion />
        {/* Come as you are — the welcome */}
        <ComeAsYouAre />
        {/* Craft & integrity */}
        <Integrity />
        {/* The invitation — full morning */}
        <Invitation />
      </main>
      <SiteFooter />
    </>
  );
}
