import { AboutMe } from "@/components/about-me";
import { ContactMe } from "@/components/contact-me";
import { Landing } from "@/components/landing";
import { ListingProjects } from "@/components/listing-projects";
import { Projects } from "@/components/projects";

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-between overflow-hidden bg-black text-white">
            <Landing />
            <AboutMe />
            <Projects />
            <ListingProjects />
            <ContactMe />
        </main>
    );
}
