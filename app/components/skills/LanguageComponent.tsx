import React from 'react';

interface LanguageComponentProps {
    language: string;
    experience: number;
    picture: string;
}

export function LanguageComponent({ language, experience, picture }: LanguageComponentProps) {
    return (
        <div className="flex flex-col items-center p-10 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300 w-48 h-64 justify-between group">
            <div className="w-20 h-20 relative p-3 flex items-center justify-center bg-zinc-50 dark:bg-zinc-800 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <img
                    src={picture}
                    alt={language}
                    className="w-full h-full object-contain drop-shadow-sm"
                />
            </div>
            <div className="text-center mt-4 w-full">
                <h3 className="font-bold text-lg text-zinc-800 dark:text-zinc-100 mb-3">{language}</h3>
                <h4 className="font-bold text-lg text-zinc-800 dark:text-zinc-100 mb-3">Proficiency: {experience}/5</h4>
            </div>
        </div>
    );
}