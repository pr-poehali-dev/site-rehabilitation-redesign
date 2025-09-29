import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';

const Contacts = () => {
  const contactInfo = [
    {
      icon: 'Phone',
      title: 'Телефон',
      items: ['+7 (495) 123-45-67', '+7 (999) 888-77-66'],
      link: 'tel:+74951234567'
    },
    {
      icon: 'Mail',
      title: 'Email',
      items: ['info@rassokhin.ru', 'consultation@rassokhin.ru'],
      link: 'mailto:info@rassokhin.ru'
    },
    {
      icon: 'MapPin',
      title: 'Адрес',
      items: ['Москва, ул. Примерная, д. 1', 'Метро: Маяковская (5 мин пешком)'],
      link: null
    }
  ];

  const schedule = [
    { day: 'Понедельник', time: '9:00 - 20:00' },
    { day: 'Вторник', time: '9:00 - 20:00' },
    { day: 'Среда', time: '9:00 - 20:00' },
    { day: 'Четверг', time: '9:00 - 20:00' },
    { day: 'Пятница', time: '9:00 - 20:00' },
    { day: 'Суббота', time: '10:00 - 18:00' },
    { day: 'Воскресенье', time: 'Выходной' }
  ];

  const transport = [
    {
      icon: 'Train',
      title: 'Метро',
      description: 'Маяковская - 5 минут пешком, Белорусская - 7 минут пешком'
    },
    {
      icon: 'Bus',
      title: 'Автобус',
      description: 'Остановка "Площадь Маяковского": автобусы №12, №35, №101'
    },
    {
      icon: 'Car',
      title: 'На автомобиле',
      description: 'Бесплатная парковка на территории клиники, въезд с улицы Примерной'
    }
  ];

  const socials = [
    {
      icon: 'MessageCircle',
      title: 'WhatsApp',
      link: 'https://wa.me/79998887766',
      description: '+7 (999) 888-77-66'
    },
    {
      icon: 'Send',
      title: 'Telegram',
      link: 'https://t.me/rassokhin_med',
      description: '@rassokhin_med'
    },
    {
      icon: 'Instagram',
      title: 'Instagram',
      link: 'https://instagram.com/rassokhin_rehab',
      description: '@rassokhin_rehab'
    }
  ];

  return (
    <Layout>
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold text-center mb-4 animate-fade-in">Контакты</h1>
            <p className="text-center text-lg text-muted-foreground mb-12 animate-fade-in">
              Свяжитесь со мной удобным способом
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                      <Icon name={contact.icon} className="text-primary" size={32} />
                    </div>
                    <h3 className="font-semibold text-lg">{contact.title}</h3>
                    <div className="space-y-1">
                      {contact.items.map((item, idx) => (
                        <p key={idx} className="text-muted-foreground">
                          {contact.link && idx === 0 ? (
                            <a href={contact.link} className="hover:text-primary transition-colors">
                              {item}
                            </a>
                          ) : (
                            item
                          )}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mb-12 overflow-hidden shadow-xl">
              <CardContent className="p-0">
                <div className="relative w-full h-[400px] md:h-[500px]">
                  <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A5f7c1c8e3d3e8e5e8e5e8e5e8e5e8e5e&amp;source=constructor"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    className="w-full h-full"
                    title="Карта расположения клиники"
                  />
                  <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex items-start space-x-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Icon name="Navigation" className="text-primary" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-lg">Клиника реабилитации</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          Москва, ул. Примерная, д. 1<br />
                          Метро: Маяковская (5 мин пешком)
                        </p>
                        <a
                          href="https://yandex.ru/maps"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:text-primary/80 flex items-center space-x-1"
                        >
                          <span>Построить маршрут</span>
                          <Icon name="ExternalLink" size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <Icon name="Clock" className="text-primary" size={32} />
                    <h2 className="font-semibold text-2xl">Режим работы</h2>
                  </div>
                  <div className="space-y-3">
                    {schedule.map((item, index) => (
                      <div key={index} className="flex justify-between items-center pb-2 border-b last:border-0">
                        <span className="text-muted-foreground">{item.day}</span>
                        <span className={`font-medium ${item.time === 'Выходной' ? 'text-muted-foreground' : 'text-foreground'}`}>
                          {item.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <Icon name="MessageSquare" className="text-primary" size={32} />
                    <h2 className="font-semibold text-2xl">Мессенджеры</h2>
                  </div>
                  <div className="space-y-4">
                    {socials.map((social, index) => (
                      <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted transition-colors"
                      >
                        <div className="bg-secondary/10 p-2 rounded-lg">
                          <Icon name={social.icon} className="text-secondary" size={24} />
                        </div>
                        <div>
                          <div className="font-medium">{social.title}</div>
                          <div className="text-sm text-muted-foreground">{social.description}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-12">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Icon name="Navigation" className="text-primary" size={32} />
                  <h2 className="font-semibold text-2xl">Как добраться</h2>
                </div>
                <div className="space-y-4">
                  {transport.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-muted/30 rounded-lg">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Icon name={item.icon} className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-none">
              <CardContent className="p-8 text-center">
                <Icon name="HelpCircle" className="text-primary mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-4">Остались вопросы?</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Свяжитесь со мной любым удобным способом. Я отвечу на все ваши вопросы 
                  и помогу выбрать оптимальную программу реабилитации.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <a href="tel:+74951234567" className="text-lg font-semibold text-primary hover:text-primary/80 transition-colors">
                    <Icon name="Phone" className="inline mr-2" size={20} />
                    +7 (495) 123-45-67
                  </a>
                  <span className="hidden sm:inline text-muted-foreground">или</span>
                  <a href="mailto:info@rassokhin.ru" className="text-lg font-semibold text-primary hover:text-primary/80 transition-colors">
                    <Icon name="Mail" className="inline mr-2" size={20} />
                    info@rassokhin.ru
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacts;