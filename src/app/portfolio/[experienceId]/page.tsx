import ExperienceContent from "@/app/portfolio/_components/ExperienceContent";
import Sidebar from "@/app/portfolio/_components/Sidebar";
import { experiences } from "@/app/portfolio/experience";
import { notFound } from "next/navigation";
 
export async function generateStaticParams() {
    return Object.keys(experiences).map((experienceId) => ({
        experienceId
    }));
}
 
type Params = {
    experienceId: string;
};
 
 
export default async function Page(props: { params: Promise<Params> }) {
    const params = await props.params;
 
    const experienceData = experiences[params.experienceId];
 
    if (!experienceData) {
        notFound();
    }
 
    return (
        <>
            <Sidebar />
            <ExperienceContent experience={experienceData} />
        </>
    );
}
 
 