import { LanguageComponent } from "@/app/components/skills/LanguageComponent";

export function SkillsSection() {
    const skills = [
        {id: 1, language: "React", experience: 4, picture:"/reactlogo.png"},
        {id: 2, language: "Python", experience: 3, picture:"/pythonlogo.png"},
        {id: 3, language: "Java", experience: 2, picture:"/javalogo.png"},
        {id: 4, language: "C++", experience: 5, picture:"/cpluspluslogo.png"}
    ]

    return (
        <section 
            id="skills"
            className="min-h-screen flex flex-col items-center justify-center py-24 scroll-mt-16 border-t border-zinc-100 dark:border-zinc-900"
        >
            <div className="w-full text-center space-y-6 px-6 mb-12">
                <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
                    Here are some of the tools and languages I work with.
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto px-6">
                {skills.map((skill) => (
                    <LanguageComponent
                        key={skill.id}
                        language={skill.language}
                        experience={skill.experience}
                        picture={skill.picture}
                    />
                ))}    
            
            </div>
        </section>
    );
}
