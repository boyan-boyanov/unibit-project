import BottomNav from "../../components/layout/BottomNav";
import "../../styles/global.css";
import "../HomePage/HomePage.css";
import "./ComingSoonPage.css";

const titles = {
  favorites: "Любими",
  profile: "Профил",
};

export default function ComingSoonPage({ active }) {
  return (
    <main className="flex min-h-screen flex-col items-center bg-secondary">
      <div className="w-full max-w-md mx-auto min-h-screen flex flex-col container ">
        <header className="p-4 bg-primary text-primary-foreground text-center">
          <h1 className="heading-xl font-bold">Църковен Гид</h1>
        </header>

        <div className="coming-soon">
          <h2 className="coming-soon-tab">{titles[active]}</h2>
          <p className="coming-soon-title">Очаквайте скоро</p>
          <a href="/" className="coming-soon-button">
            Към началната страница
          </a>
        </div>

        <BottomNav active={active} />
      </div>
    </main>
  );
}
