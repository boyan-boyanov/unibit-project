import { ArrowLeft } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import "../../styles/global.css";
import "./Artists.css";

export default function Artists() {
  return (
    <main className="flex min-h-screen flex-col bg-secondary">
      <div className="max-w-md mx-auto bg-background min-h-screen flex flex-col container">
        <div className="sticky top-0 z-10 bg-primary text-primary-foreground p-4 flex wrapper">
          <a href="/church/1" className="mr-3">
            <ArrowLeft className="h-6 w-6" />
          </a>
          <h1 className="text-lg font-bold header-label">Антон Митов</h1>
        </div>

        <div className="p-4 flex items-center gap-4">
          <div className="w-24 h-24 rounded-full overflow-hidden artist-container-info">
            <img
              src="/images/AntonMitov.png?height=200&width=200"
              alt="Антон Митов"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-xl font-bold">Антон Митов</h2>
            <p className="text-sm text-muted-foreground address">
              1862-1930 г.
            </p>
            <p className="text-sm text-muted-foreground address">
              Български художник и иконописец
            </p>
          </div>
        </div>

        <Tabs defaultValue="bio" className="flex-1">
          <TabsList className="grid grid-cols-2 p-0 bg-background border-b">
            <TabsTrigger value="bio" className="py-3 buttons-list tab-trigger">
              Биография
            </TabsTrigger>
            <TabsTrigger
              value="works"
              className="py-3 buttons-list tab-trigger"
            >
              Творби
            </TabsTrigger>
          </TabsList>

          <TabsContent value="bio" className="p-4 space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold content-label">
                Живот и творчество
              </h3>
              <p className="text-sm text-muted-foreground address">
                Антон Митов е роден на 1 април 1862 г. в Стара Загора. Той е
                един от първите български художници с академично образование.
                Завършва Художествената академия във Флоренция, Италия.
              </p>
              <p className="text-sm text-muted-foreground address">
                След завръщането си в България, Митов става един от основателите
                на Държавното рисувално училище (днес Национална художествена
                академия) и негов дългогодишен преподавател.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold content-label">
                Стил и влияния
              </h3>
              <p className="text-sm text-muted-foreground address">
                Творчеството на Антон Митов е повлияно от италианската
                ренесансова живопис и академичните традиции. В иконописта той
                съчетава православната иконографска традиция с елементи на
                реализъм, характерен за западноевропейското изкуство.
              </p>
              <p className="text-sm text-muted-foreground address">
                Неговите икони се отличават с прецизен рисунък, богата цветова
                гама и внимание към детайла. Митов е известен със способността
                си да предава емоционалната дълбочина на религиозните образи.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold content-label">
                Принос към църковното изкуство
              </h3>
              <p className="text-sm text-muted-foreground address">
                Антон Митов има значителен принос към българското църковно
                изкуство от края на 19-ти и началото на 20-ти век. Той участва в
                изографисването на редица значими храмове, включително
                катедралата "Св. Александър Невски" в София.
              </p>
              <p className="text-sm text-muted-foreground address">
                Неговите икони и стенописи се намират в много църкви в България
                и представляват важна част от културното наследство на страната.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="works" className="p-4">
            <h3 className="text-lg font-semibold mb-4">Творби в храмове</h3>

            <div className="space-y-4">
              <div className="border rounded-lg overflow-hidden">
                <h4 className="bg-muted p-3 font-medium">
                  Храм "Св. Александър Невски", София
                </h4>
                <div className="p-3 grid grid-cols-2 gap-3">
                  <a href="/icon/1" className="space-y-1">
                    <div className="aspect-square rounded-lg overflow-hidden">
                      <img
                        src="/placeholder.svg?height=200&width=200"
                        alt="Христос Пантократор"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-xs font-medium">Христос Пантократор</p>
                    <p className="text-xs text-muted-foreground">1911 г.</p>
                  </a>

                  <a href="/icon/4" className="space-y-1">
                    <div className="aspect-square rounded-lg overflow-hidden">
                      <img
                        src="/placeholder.svg?height=200&width=200"
                        alt="Св. Йоан Кръстител"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-xs font-medium">Св. Йоан Кръстител</p>
                    <p className="text-xs text-muted-foreground">1911 г.</p>
                  </a>
                </div>
                <div className="p-3 pt-0 text-center">
                  <a
                    href="/church/1/icons?artist=1"
                    className="text-xs text-primary"
                  >
                    Виж всички (8 икони)
                  </a>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden">
                <h4 className="bg-muted p-3 font-medium">
                  Храм "Св. Николай Софийски", София
                </h4>
                <div className="p-3 grid grid-cols-2 gap-3">
                  <a href="/icon/5" className="space-y-1">
                    <div className="aspect-square rounded-lg overflow-hidden">
                      <img
                        src="/placeholder.svg?height=200&width=200"
                        alt="Света Богородица"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-xs font-medium">Света Богородица</p>
                    <p className="text-xs text-muted-foreground">1914 г.</p>
                  </a>

                  <a href="/icon/6" className="space-y-1">
                    <div className="aspect-square rounded-lg overflow-hidden">
                      <img
                        src="/placeholder.svg?height=200&width=200"
                        alt="Св. Николай"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-xs font-medium">Св. Николай</p>
                    <p className="text-xs text-muted-foreground">1914 г.</p>
                  </a>
                </div>
                <div className="p-3 pt-0 text-center">
                  <a
                    href="/church/4/icons?artist=1"
                    className="text-xs text-primary"
                  >
                    Виж всички (5 икони)
                  </a>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden">
                <h4 className="bg-muted p-3 font-medium">
                  Храм "Св. Седмочисленици", София
                </h4>
                <div className="p-3 grid grid-cols-2 gap-3">
                  <a href="/icon/7" className="space-y-1">
                    <div className="aspect-square rounded-lg overflow-hidden">
                      <img
                        src="/placeholder.svg?height=200&width=200"
                        alt="Св. Кирил и Методий"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-xs font-medium">Св. Кирил и Методий</p>
                    <p className="text-xs text-muted-foreground">1903 г.</p>
                  </a>
                </div>
                <div className="p-3 pt-0 text-center">
                  <a
                    href="/church/5/icons?artist=1"
                    className="text-xs text-primary"
                  >
                    Виж всички (3 икони)
                  </a>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="sticky top-0 z-10 bg-primary text-primary-foreground p-4 flex wrapper">
          <a href="/church/1" className="mr-3">
            <ArrowLeft className="h-6 w-6" />
          </a>
          <h1 className="text-lg font-bold header-label">Антон Митов</h1>
        </div>
      </div>
    </main>
  );
}
