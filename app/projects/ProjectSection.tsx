import { ProjectsComponent } from "@/app/components/projects/ProjectsComponent";

export function ProjectSection() {
    return (
        <section
            id="projects"
            className="min-h-screen flex flex-col items-center justify-center py-24 scroll-mt-16 border-t border-zinc-100 dark:border-zinc-900"
        >
            <div className="w-full text-center space-y-6 px-6 mb-12">
                <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
                    Here are some of the technical projects and applications I have built.
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto px-6 w-full">

                <ProjectsComponent
                    title="Project 1"
                    description="Description 1"
                />
                <ProjectsComponent
                    title="Project 2"
                    description="Description 2"
                />
                <ProjectsComponent
                    title="Project 3"
                    description="Description 3"
                />
            </div>
        </section>
    );
}
