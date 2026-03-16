"use client";
import { useState } from "react";
import { ComponentOne } from "../components/about/ComponentOne";
import { ComponentTwo } from "../components/about/ComponentTwo";
import { ComponentThree } from "../components/about/ComponentThree";

export function AboutSection() {
    
    const [showOne, setShowOne] = useState(true);
    const [showTwo, setShowTwo] = useState(false);
    const [showThree, setShowThree] = useState(false);
    
    
    const handleShowOne = () => {
        setShowOne(true);
        setShowTwo(false);
        setShowThree(false);
    };

    const handleShowTwo = () => {
        setShowOne(false);
        setShowTwo(true);
        setShowThree(false);
    };

    const handleShowThree = () => {
        setShowOne(false);
        setShowTwo(false);
        setShowThree(true);
    };

    // Button style helper
    const getButtonStyle = (isActive: boolean) => `
        px-6 py-3 rounded-full font-medium transition-all duration-300
        ${isActive
            ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
            : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:text-zinc-900 dark:hover:text-zinc-100'}
    `;

    return (
        <section
            id="about"
            className="min-h-screen flex flex-col items-center justify-center py-24 scroll-mt-16 border-t border-zinc-100 dark:border-zinc-900"
        >
            <div className="w-full text-center space-y-6 px-6 mb-12">
                <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed mb-8">
                    Discover more about my background, experience, and interests.
                </p>

                {/* Navigation Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    <button
                    className={getButtonStyle(showOne)}
                    onClick={handleShowOne}
                    >
                        Background
                    </button>
                    <button
                    className={getButtonStyle(showTwo)}
                    onClick={handleShowTwo}
                    >
                        Experience
                    </button>
                    <button
                    className={getButtonStyle(showThree)}
                    onClick={handleShowThree}
                    >
                        Interests
                    </button>
                    {showOne && 
                        <>
                            <ComponentOne/>
                        </>
                    }

                    {showTwo && 
                        <>
                            <ComponentTwo/>
                        </>
                    }

                    {showThree && 
                        <>
                            <ComponentThree/>
                        </>
                    }

                </div>                
            </div>
        </section>
    );
}
