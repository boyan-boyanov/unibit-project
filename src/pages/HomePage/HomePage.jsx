import { MapPin } from "lucide-react";
import "../../styles/global.css";
import "./HomePage.css";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-secondary">
      <div className="w-full max-w-md mx-auto min-h-screen flex flex-col container ">
        <header className="p-4 bg-primary text-primary-foreground text-center">
          <h1 className="heading-xl font-bold">Църковен Гид</h1>
        </header>

        <div className="p-4">
          <div className="relative">
            <div className="flex items-center border rounded-lg p-3 bg-white">
              <MapPin className="h-5 w-5 text-muted-foreground mr-2" />
              <input
                type="text"
                placeholder="Търсене на църква или местоположение"
                className="w-full search-bar bg-white"
              />
            </div>
          </div>

          <h2 className="text-lg mb-3 home-label">Близо до вас</h2>

          <div className="grid gap-4">
            <a
              className="church-list"
              href="/church/1"
              style={{
                backgroundImage: "url('/images/aleksandarnevski.jpg')",
              }}
            >
              <div className="church-card rounded-lg p-4 h-48 flex flex-col justify-end text-white">
                <h3 className="text-lg font-bold">
                  Храм "Св. Александър Невски"
                </h3>
                <p className="text-sm opacity-90">
                  София, пл. "Александър Невски"
                </p>
                <div className="flex items-center mt-2">
                  <span className="text-xs bg-primary/80 px-2 py-1 rounded-full">
                    500м
                  </span>
                </div>
              </div>
            </a>

            <a
              className="church-list"
              href="/church/2"
              style={{
                backgroundImage: "url('/images/svsofia.jpg')",
              }}
            >
              <div className="church-card rounded-lg p-4 h-48 flex flex-col justify-end text-white">
                <h3 className="text-lg font-bold">Храм "Св. София"</h3>
                <p className="text-sm opacity-90">София, ул. "Париж" 2</p>
                <div className="flex items-center mt-2">
                  <span className="text-xs bg-primary/80 px-2 py-1 rounded-full">
                    750м
                  </span>
                </div>
              </div>
            </a>

            <a
              className="church-list"
              href="/church/3"
              style={{
                backgroundImage: "url('/images/nikolaichudotvorec.jpg')",
              }}
            >
              <div className="church-card rounded-lg p-4 h-48 flex flex-col justify-end text-white">
                <h3 className="text-lg font-bold">
                  Храм "Св. Николай Чудотворец"
                </h3>
                <p className="text-sm opacity-90">София, ж.к. Връбница-2</p>
                <div className="flex items-center mt-2">
                  <span className="text-xs bg-primary/80 px-2 py-1 rounded-full">
                    1.2км
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>

        <nav className="mt-auto border-t p-2 bg-white home-nav">
          <div className="flex nav-container">
            <a href="/" className="flex flex-col items-center p-2 text-primary">
              <MapPin className="h-6 w-6" />
              <span className="text-xs mt-1">Открий</span>
            </a>
            <a
              href="/favorites"
              className="flex flex-col items-center p-2 text-muted-foreground"
            >
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
            <a
              href="/profile"
              className="flex flex-col items-center p-2 text-muted-foreground"
            >
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
      </div>
    </main>
  );
}
