export interface Project {
    id: number;
    title: string;
    description: string;
}

export const projectsData: Project[] = [
    {
        id: 1,
        title: "Personal Portfolio",
        description: "A personal website built with Next.js, React, and Tailwind CSS to showcase my skills and projects."
    },
    {
        id: 2,
        title: "Task Management App",
        description: "A full-stack web application that allows users to seamlessly create, read, update, and delete daily tasks."
    },
    {
        id: 3,
        title: "Machine Learning Classifier",
        description: "A Python-based AI model that predicts outcomes based on tabular data using scikit-learn and pandas."
    }
];
