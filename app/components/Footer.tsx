export function Footer() {
    return (
        <footer className="py-8 text-center text-sm text-zinc-500 dark:text-zinc-400 border-t border-zinc-200 dark:border-zinc-900">
            <p>© {new Date().getFullYear()} My Personal Site. All rights reserved.</p>
        </footer>
    );
}
