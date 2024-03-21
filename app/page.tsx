import { AboutMe } from "@/components/about-me";
import { ContactMe } from "@/components/contact-me";
import { Landing } from "@/components/landing";
import { ListingProjects } from "@/components/listing-projects";
import { NavigationBar } from "@/components/navigation-bar";
import { Projects } from "@/components/projects";
import { TempLanding } from "@/components/temp-landing";

export default function Home() {
    return (
        <main className="h-screen flex flex-col items-center justify-between relative p-5 overflow-hidden bg-[#F9E8D9] text-[#F9E8D9]">
            <TempLanding />
            {/* <NavigationBar />
            <Landing />
            <AboutMe />
            <Projects />
            <ListingProjects />
            <ContactMe /> */}
        </main>
    );
}
