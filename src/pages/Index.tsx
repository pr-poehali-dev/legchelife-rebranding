import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">Люби</div>
          <div className="text-sm text-muted-foreground">
            Официальное уведомление
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Announcement Card */}
          <Card className="mb-8 animate-fade-in shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <Icon name="RefreshCw" size={48} className="mx-auto text-primary mb-4" />
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Важное уведомление о ребрендинге
                </h1>
                <p className="text-lg text-muted-foreground">
                  Бренд «Люби» теперь работает под новым названием
                </p>
              </div>

              <div className="bg-accent/20 rounded-lg p-6 mb-6">
                <h2 className="text-2xl font-bold text-primary mb-3">
                  Добро пожаловать в легчелайф!
                </h2>
                <p className="text-foreground leading-relaxed">
                  Мы рады сообщить, что наш сервис теперь носит новое название — 
                  <strong className="text-primary"> легчелайф</strong>. 
                  Это не просто смена названия, это новый этап развития, 
                  направленный на то, чтобы сделать вашу жизнь еще проще и комфортнее.
                </p>
              </div>

              <Button 
                size="lg" 
                className="mb-6 px-8 py-3 text-lg font-semibold hover:scale-105 transition-transform duration-200"
                onClick={() => window.open('https://legchelife.ru', '_blank')}
              >
                <Icon name="ExternalLink" size={20} className="mr-2" />
                Перейти на новый сайт
              </Button>
            </CardContent>
          </Card>

          {/* Information Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Terms Card */}
            <Card className="animate-scale-in shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Icon name="Shield" size={24} className="text-secondary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Ваши условия не изменились
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Для всех существующих абонентов условия тарифов остаются прежними. 
                      Все ваши услуги, скидки и преимущества сохраняются в полном объеме.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Continuity Card */}
            <Card className="animate-scale-in shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Icon name="Heart" size={24} className="text-secondary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Тот же качественный сервис
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Мы продолжаем предоставлять тот же высокий уровень обслуживания, 
                      который вы полюбили, но теперь под новым именем.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Section */}
          <Card className="animate-fade-in shadow-md">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Остались вопросы?
              </h3>
              <p className="text-muted-foreground mb-4">
                Наша служба поддержки готова помочь вам с любыми вопросами о переходе
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" className="hover:scale-105 transition-transform">
                  <Icon name="Phone" size={18} className="mr-2" />
                  Позвонить
                </Button>
                <Button variant="outline" className="hover:scale-105 transition-transform">
                  <Icon name="Mail" size={18} className="mr-2" />
                  Написать
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-12">
        <div className="text-center text-sm text-muted-foreground">
          <p>© 2024 легчелайф. Все права защищены.</p>
          <p className="mt-2">
            Бывший бренд «Люби» | Новое название — новые возможности
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;