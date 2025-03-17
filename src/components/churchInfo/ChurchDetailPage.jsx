import { useState } from "react";
import "../../styles/global.css";
import "./ChurchDetailPage.css";
import {
  ArrowLeft,
  Heart,
  Info,
  MapPin,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  QrCode,
  Scan,
  ChevronRight,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Button } from "../ui/Button";
import { Textarea } from "../ui/textarea";

export default function ChurchDetailPage(params) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedTab, setSelectedTab] = useState("info");
  const duration = 180; // 3 minutes in seconds

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <main className="flex min-h-screen flex-col bg-secondary">
      <div className="max-w-md mx-auto bg-background min-h-screen flex flex-col container">
        <div className="relative h-64 bg-cover bg-center church-image-detail test">
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70 "></div>
          <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center">
            <a href="/" className="text-white">
              <ArrowLeft className="h-6 w-6" />
            </a>
            <Button variant="ghost" size="icon" className="text-white">
              <Heart className="h-6 w-6" />
            </Button>
          </div>
          <div className="bottom-0 left-0 right-0 p-4 text-white detail-info-image-text">
            <h1 className="text-2xl font-bold">Храм "Св. Александър Невски"</h1>
            <div className="flex items-center mt-1 address-position">
              <MapPin className="h-4 w-4 mr-1 pin-size" />
              <span className="text-sm">София, пл. "Александър Невски"</span>
            </div>
          </div>
        </div>

        <Tabs
          defaultValue="info"
          onValueChange={setSelectedTab}
          className="flex-1"
        >
          <TabsList className="grid grid-cols-4 p-0 bg-background border-b">
            <TabsTrigger value="info" className="py-3 buttons-list tab-trigger">
              Информация
            </TabsTrigger>
            <TabsTrigger
              value="icons"
              className="py-3 buttons-list tab-trigger"
            >
              Икони
            </TabsTrigger>
            <TabsTrigger
              value="artists"
              className="py-3 buttons-list tab-trigger"
            >
              Художници
            </TabsTrigger>
            <TabsTrigger
              value="comments"
              className="py-3 buttons-list tab-trigger"
            >
              Коментари
            </TabsTrigger>
          </TabsList>

          <TabsContent value="info" className="p-4 space-y-4">
            <div className="space-y-2">
              <h2 className="text-lg font-semibold">За храма</h2>
              <p className="text-sm text-muted-foreground">
                Храм-паметникът „Свети Александър Невски" е православен храм в
                София, България, който служи като катедрала на българския
                патриарх. Построен е в периода 1882-1912 г. в неовизантийски
                стил.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-semibold">История</h2>
              <p className="text-sm text-muted-foreground">
                Храмът е построен в чест на руските войници, загинали по време
                на Руско-турската война от 1877-1878 г., която довежда до
                освобождението на България от османско владичество. Основният
                камък е положен на 3 март 1882 г., но строителството започва
                едва през 1904 г.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-semibold">Архитектура</h2>
              <p className="text-sm text-muted-foreground">
                Катедралата е кръстокуполна базилика с площ от 3170 кв. м. и
                може да побере до 5000 души. Има 12 камбани с общо тегло от 23
                тона, като най-голямата тежи 12 тона и е висока 2.5 метра.
              </p>
            </div>

            <Button className="w-full" variant="outline">
              <Info className="h-4 w-4 mr-2" />
              Пълна информация
            </Button>
          </TabsContent>

          <TabsContent value="icons" className="p-4 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <a href="/icon/1" className="space-y-2">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=300&width=300"
                    alt="Икона на Христос Пантократор"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-sm font-medium">Христос Пантократор</h3>
                <p className="text-xs text-muted-foreground">
                  Антон Митов, 1911 г.
                </p>
              </a>

              <a href="/icon/2" className="space-y-2">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=300&width=300"
                    alt="Икона на Света Богородица"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-sm font-medium">Света Богородица</h3>
                <p className="text-xs text-muted-foreground">
                  Иван Мърквичка, 1910 г.
                </p>
              </a>

              <a href="/icon/3" className="space-y-2">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=300&width=300"
                    alt="Икона на Св. Александър Невски"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-sm font-medium">Св. Александър Невски</h3>
                <p className="text-xs text-muted-foreground">
                  Стефан Иванов, 1912 г.
                </p>
              </a>

              <a href="/icon/4" className="space-y-2">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=300&width=300"
                    alt="Икона на Св. Йоан Кръстител"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-sm font-medium">Св. Йоан Кръстител</h3>
                <p className="text-xs text-muted-foreground">
                  Антон Митов, 1911 г.
                </p>
              </a>
            </div>

            <Button className="w-full" variant="outline">
              Виж всички икони (24)
            </Button>
          </TabsContent>

          <TabsContent value="artists" className="p-4 space-y-4">
            <div className="space-y-4">
              <a
                href="/artist/1"
                className="flex items-center gap-3 p-3 border rounded-lg"
              >
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src="/placeholder.svg?height=100&width=100"
                    alt="Антон Митов"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium">Антон Митов</h3>
                  <p className="text-xs text-muted-foreground">1862-1930 г.</p>
                  <p className="text-xs text-muted-foreground">
                    8 икони в този храм
                  </p>
                </div>
              </a>

              <a
                href="/artist/2"
                className="flex items-center gap-3 p-3 border rounded-lg"
              >
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src="/placeholder.svg?height=100&width=100"
                    alt="Иван Мърквичка"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium">Иван Мърквичка</h3>
                  <p className="text-xs text-muted-foreground">1856-1938 г.</p>
                  <p className="text-xs text-muted-foreground">
                    6 икони в този храм
                  </p>
                </div>
              </a>

              <a
                href="/artist/3"
                className="flex items-center gap-3 p-3 border rounded-lg"
              >
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src="/placeholder.svg?height=100&width=100"
                    alt="Стефан Иванов"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium">Стефан Иванов</h3>
                  <p className="text-xs text-muted-foreground">1875-1951 г.</p>
                  <p className="text-xs text-muted-foreground">
                    5 икони в този храм
                  </p>
                </div>
              </a>
            </div>

            <Button className="w-full" variant="outline">
              Виж всички художници (12)
            </Button>
          </TabsContent>

          <TabsContent value="comments" className="p-4 space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Коментари</h2>
                <span className="text-xs text-muted-foreground">
                  12 коментара
                </span>
              </div>

              {/* Списък с коментари */}
              <div className="space-y-4">
                <div className="p-3 border rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden">
                      <img
                        src="/placeholder.svg?height=100&width=100"
                        alt="Потребител"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">Мария Иванова</h3>
                        <span className="text-xs text-muted-foreground">
                          преди 2 дни
                        </span>
                      </div>
                      <p className="text-sm mt-1">
                        Посетих храма миналата седмица и останах възхитена от
                        красотата на иконите. Препоръчвам на всички да видят
                        централния купол!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-3 border rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden">
                      <img
                        src="/placeholder.svg?height=100&width=100"
                        alt="Потребител"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">Георги Петров</h3>
                        <span className="text-xs text-muted-foreground">
                          преди 5 дни
                        </span>
                      </div>
                      <p className="text-sm mt-1">
                        Аудио гидът беше много полезен. Научих много интересни
                        факти за историята на храма и художниците, работили по
                        иконите.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-3 border rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden">
                      <img
                        src="/placeholder.svg?height=100&width=100"
                        alt="Потребител"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">Елена Димитрова</h3>
                        <span className="text-xs text-muted-foreground">
                          преди 1 седмица
                        </span>
                      </div>
                      <p className="text-sm mt-1">
                        Препоръчвам да посетите храма рано сутрин, когато има
                        по-малко посетители. Тогава можете да се насладите на
                        спокойствието и да разгледате детайлно всички икони.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Форма за коментар или бутон за вход */}
              {isLoggedIn ? (
                <div className="space-y-3 mt-4">
                  <h3 className="text-sm font-medium">Добави коментар</h3>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden">
                      <img
                        src="/placeholder.svg?height=100&width=100"
                        alt="Вашият профил"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <Textarea
                        placeholder="Споделете вашето мнение..."
                        className="w-full resize-none"
                        rows={3}
                      />
                      <Button className="mt-2">Публикувай</Button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-4 bg-muted rounded-lg text-center space-y-2">
                  <p className="text-sm">
                    Трябва да сте влезли в профила си, за да публикувате
                    коментар
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setIsLoggedIn(true)}
                    className="text-xs"
                  >
                    Вход / Регистрация
                  </Button>
                </div>
              )}

              <Button variant="outline" className="w-full text-sm">
                Зареди още коментари
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        {/* QR Гид секция */}
        {params.id !== "3" && (
          <div className="p-4 border-t bg-white">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h3 className="font-medium">QR Гид</h3>
                <p className="text-xs text-muted-foreground">
                  Сканирайте QR кодове за повече информация
                </p>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-full"
              >
                <QrCode className="h-5 w-5" />
              </Button>
            </div>
            <div className="mt-2 p-4 border rounded-lg text-center">
              <Scan className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm">
                Натиснете бутона и сканирайте QR код в църквата
              </p>
            </div>
          </div>
        )}

        {/* Симулация на сканиран QR код */}
        {params.id !== "3" && (
          <div className="p-4 bg-muted">
            <h4 className="font-medium mb-2">Последно сканиран елемент:</h4>
            <div className="p-3 bg-white rounded-lg">
              <h5 className="font-medium">Централен иконостас</h5>
              <p className="text-sm mt-1">
                Централният иконостас е изработен от бял мрамор и е украсен с
                икони, дело на най-добрите български художници от началото на
                20-ти век. Той разделя наоса от олтара и символизира границата
                между земния и небесния свят.
              </p>
              <a
                href={`/church/${params.id}/element/1`}
                className="mt-2 flex items-center text-primary text-sm"
              >
                Повече информация
                <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </div>
          </div>
        )}

        <div className="p-4 bg-white">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h3 className="font-medium">Аудио гид</h3>
              <p className="text-xs text-muted-foreground">
                Обиколка на храма (15 мин)
              </p>
            </div>
            <Button
              onClick={togglePlay}
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full"
            >
              {isPlaying ? (
                <Pause className="h-5 w-5" />
              ) : (
                <Play className="h-5 w-5" />
              )}
            </Button>
          </div>

          {isPlaying && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
              <input
                type="range"
                min="0"
                max={duration}
                value={currentTime}
                onChange={(e) =>
                  setCurrentTime(Number.parseInt(e.target.value))
                }
                className="audio-progress"
              />
              <div className="flex justify-center gap-4 mt-2">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <SkipBack className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <SkipForward className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
