import { MapPin } from "lucide-react";

const linkClass = (isActive) =>
  `flex flex-col items-center p-2 ${isActive ? "text-primary" : "text-muted-foreground"}`;

export default function BottomNav({ active }) {
  return (
    <nav className="mt-auto border-t p-2 bg-white home-nav">
      <div className="flex nav-container">
        <a href="/" className={linkClass(active === "home")}>
          <MapPin className="h-6 w-6" />
          <span className="text-xs mt-1">Открий</span>
        </a>
        <a href="/favorites" className={linkClass(active === "favorites")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
          <span className="text-xs mt-1">Любими</span>
        </a>
        <a href="/profile" className={linkClass(active === "profile")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <circle cx="12" cy="8" r="5" />
            <path d="M20 21a8 8 0 1 0-16 0" />
          </svg>
          <span className="text-xs mt-1">Профил</span>
        </a>
      </div>
    </nav>
  );
}
