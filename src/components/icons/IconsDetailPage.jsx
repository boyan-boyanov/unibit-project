import { ArrowLeft, ExternalLink } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import "../../styles/global.css";
import "./IconsDetailPage.css";
export const IconsDetailPage = () => {
  return (
    <main className="flex min-h-screen flex-col bg-secondary">
      <div className="max-w-md mx-auto bg-background min-h-screen flex flex-col container">
        <div className="sticky top-0 z-10 bg-primary text-primary-foreground p-4 flex items-center wrapper">
          <a href="/church/1" className="flex mr-3">
            <ArrowLeft className="h-6 w-6" />
          </a>
          <h1 className="text-lg font-bold header-label">
            Христос Пантократор
          </h1>
        </div>

        <div className="p-4">
          <div className="aspect-square rounded-lg overflow-hidden mb-4">
            <img
              src="/images/HristosPantokratos.jpg?height=600&width=600"
              alt="Икона на Христос Пантократор"
              className="w-full h-full object-cover"
            />
          </div>

          <Tabs defaultValue="details" className="flex-1">
            <TabsList className="grid grid-cols-2 p-0 bg-background border-b">
              <TabsTrigger
                value="details"
                className="py-3 buttons-list tab-trigger"
              >
                Детайли
              </TabsTrigger>
              <TabsTrigger
                value="locations"
                className="py-3 buttons-list tab-trigger"
              >
                Местоположения
              </TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="pt-4 space-y-4">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="text-muted-foreground address ">Художник</div>
                <div className="font-medium flex gap-2">
                  <a href="/artist/1" className="text-primary hover:underline ">
                    Антон Митов
                  </a>
                  <ExternalLink className="h-3 w-3 mr-1 text-primary icon-box" />
                </div>

                <div className="text-muted-foreground address">Година</div>
                <div className="font-medium">1911 г.</div>

                <div className="text-muted-foreground address">Техника</div>
                <div className="font-medium">Темпера върху дърво</div>

                <div className="text-muted-foreground address">Размери</div>
                <div className="font-medium">120 x 80 см</div>

                <div className="text-muted-foreground address">
                  Местоположение
                </div>
                <div className="font-medium">Централен иконостас</div>
              </div>

              <div className="space-y-2">
                <h2 className="text-lg font-semibold content-label">
                  Описание
                </h2>
                <p className="text-sm text-muted-foreground address">
                  Иконата изобразява Христос Пантократор (Вседържител), едно от
                  най-разпространените изображения на Христос в православната
                  иконография. Христос е представен фронтално, благославящ с
                  дясната ръка, а в лявата държи Евангелие.
                </p>
                <p className="text-sm text-muted-foreground address">
                  Иконографският тип Пантократор подчертава всемогъществото на
                  Христос като владетел и съдия на света. Златният фон
                  символизира божествената светлина и вечността.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-lg font-semibold content-label">
                  Символика
                </h2>
                <p className="text-sm text-muted-foreground address">
                  Жестът на благославяне с дясната ръка символизира Христовото
                  учение и благословия. Пръстите образуват монограма на Христос
                  (IC XC). Евангелието в лявата ръка представя Божието слово и
                  учение.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="locations" className="pt-4 space-y-4">
              <p className="text-sm text-muted-foreground mb-4 address">
                Подобни икони на Христос Пантократор от същия художник могат да
                бъдат намерени в следните храмове:
              </p>

              <div className="space-y-3">
                <a
                  href="/church/4"
                  className="flex border rounded-lg link-morechurch"
                >
                  <div className="chucrh-image-container">
                    <img
                      src="/images/svNikolaiSofiiski.jpg?height=200&width=200"
                      alt="Храм Св. Николай Софийски"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">Храм "Св. Николай Софийски"</h3>
                    <p className="text-xs text-muted-foreground address">
                      София, ул. "Калоян" 9
                    </p>
                    <div className="flex items-center">
                      <ExternalLink className="h-3 w-3 mr-1 text-primary icon-box" />
                      <span className="text-xs text-primary">Виж иконата</span>
                    </div>
                  </div>
                </a>

                <a
                  href="/church/5"
                  className="flex border rounded-lg link-morechurch"
                >
                  <div className="chucrh-image-container">
                    <img
                      src="/images/svSedmochislenici.jpg?height=200&width=200"
                      alt="Храм Св. Николай Софийски"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">Храм "Св. Седмочисленици"</h3>
                    <p className="text-xs text-muted-foreground address">
                      София, ул. "Цар Иван Шишман" 8
                    </p>
                    <div className="flex items-center">
                      <ExternalLink className="h-3 w-3 mr-1 text-primary icon-box" />
                      <span className="text-xs text-primary">Виж иконата</span>
                    </div>
                  </div>
                </a>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="sticky top-0 z-10 bg-primary text-primary-foreground p-4 flex items-center wrapper">
          <a href="/church/1" className="flex mr-3">
            <ArrowLeft className="h-6 w-6" />
          </a>
          <h1 className="text-lg font-bold header-label">
            Христос Пантократор
          </h1>
        </div>
      </div>
    </main>
  );
};
