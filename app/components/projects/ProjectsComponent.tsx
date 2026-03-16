import React from 'react';

interface ProjectsComponentProps {
    title: string;
    description: string;
}

export function ProjectsComponent({ title, description }: ProjectsComponentProps) {
    return (
        <div className="flex flex-col p-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300 w-full max-w-md group">
            <h3 className="font-bold text-xl text-zinc-800 dark:text-zinc-100 mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{title}</h3>
            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {description}
            </p>
        </div>
    );
}
