export function HomeSection() {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center pt-16 scroll-mt-16"
        >
            <div className="text-center space-y-4">
                <h1 className="text-6xl sm:text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-500 text-glow">
                    Hello World
                </h1>
                <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto">
                    Welcome to my demo site.
                </p>
            </div>
        </section>
    );
}
