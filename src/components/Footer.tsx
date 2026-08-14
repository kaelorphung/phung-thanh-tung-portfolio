const footerLinks = [
  {
    label: "GitHub",
    href: "https://github.com/kaelorphung",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/thanh-tung-phung-421680429/",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-sm font-bold tracking-wider text-white">
              PTT<span className="text-emerald-400">.</span>
            </p>

            <p className="mt-2 text-sm text-zinc-500">
              Cybersecurity Student & Security Researcher
            </p>
          </div>

          <div className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-500 transition hover:text-emerald-400"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#"
              className="text-sm text-zinc-500 transition hover:text-emerald-400"
            >
              Back to top ↑
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-zinc-900 pt-6">
          <div className="flex flex-col gap-2 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Phung Thanh Tung. All rights
              reserved.
            </p>

            <p className="font-mono">
              Built with Next.js + TypeScript + Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}