import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/Button";
import "./Iconostas.css";

export const Iconostas = (params) => {
  return (
    <main className="flex min-h-screen flex-col bg-secondary">
      <div className="max-w-md mx-auto bg-background min-h-screen flex flex-col container">
        <div className="sticky top-0 z-10 bg-primary text-primary-foreground p-4 flex items-center wrapper">
          <a href={`/church/${params.id}`} className="flex mr-3">
            <ArrowLeft className="h-6 w-6" />
          </a>
          <h1 className="text-lg font-bold header-label">
            Централен иконостас
          </h1>
        </div>

        <div className="p-4 flex-1">
          <div className="aspect-video rounded-lg overflow-hidden mb-4">
            <img
              src="/images/ikonostas.jpg?height=400&width=600"
              alt="Централен иконостас"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-xm font-semibold iconostas-label">
              Централен иконостас
            </h2>

            <p className="text-sm text-muted-foreground address iconostas-text">
              Централният иконостас в храм "Св. Александър Невски" е шедьовър на
              българското църковно изкуство от началото на 20-ти век. Изработен
              е от бял мрамор и е богато украсен с икони, създадени от
              най-изтъкнатите български художници на своето време.
            </p>

            <h3 className="text-lg font-semibold content-label">Описание</h3>
            <p className="text-sm text-muted-foreground address iconostas-text">
              Иконостасът се издига на височина от около 10 метра и е разделен
              на няколко реда. В центъра на долния ред са разположени Царските
              двери, богато украсени с дърворезба и позлата. От двете страни на
              дверите са поставени икони на Христос Пантократор и Богородица с
              младенеца.
            </p>

            <h3 className="text-lg font-semibold content-label">Символика</h3>
            <p className="text-sm text-muted-foreground address iconostas-text">
              Иконостасът символизира границата между земния и небесния свят.
              Той разделя наоса (мястото за миряните) от олтара (свещеното
              пространство). Иконите на иконостаса представят небесната йерархия
              и основните моменти от християнската история, служейки като
              "Библия в образи" за вярващите.
            </p>

            <h3 className="text-lg font-semibold content-label">Художници</h3>
            <p className="text-sm text-muted-foreground address iconostas-text">
              Сред художниците, работили по иконите на централния иконостас, са:
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground address">
              <li>Антон Митов</li>
              <li>Иван Мърквичка</li>
              <li>Стефан Иванов</li>
              <li>Господин Желязков</li>
            </ul>

            <Button className="w-full mt-4 more-info-button" variant="outline">
              Виж всички икони от иконостаса
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};
