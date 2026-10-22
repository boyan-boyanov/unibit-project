import { MapPin } from "lucide-react";
import BottomNav from "../../components/layout/BottomNav";
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

        <BottomNav active="home" />
      </div>
    </main>
  );
}
