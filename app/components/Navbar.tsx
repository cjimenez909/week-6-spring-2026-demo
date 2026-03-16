export function Navbar() {
    return (
        <nav className="sticky top-0 z-50 flex items-center justify-center p-4 bg-white/80 backdrop-blur-md border-b border-zinc-200 dark:bg-zinc-950/80 dark:border-zinc-800 shadow-sm">
            <ul className="flex gap-8 text-sm font-medium">
                <li>
                    <a href="#home" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        About
                    </a>
                </li>
                <li>
                    <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        Skills
                    </a>
                </li>
                <li>
                    <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        Projects
                    </a>
                </li>
            </ul>
        </nav>
    );
}
