import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';

const Publications = () => {
  const articles = [
    {
      title: 'Современные подходы к реабилитации после эндопротезирования крупных суставов',
      journal: 'Журнал медицинской реабилитации',
      year: '2024',
      type: 'Научная статья',
      description: 'Анализ эффективности различных методов реабилитации у пациентов после эндопротезирования тазобедренного и коленного суставов.'
    },
    {
      title: 'Эффективность кинезиотерапии при хронических болях в нижней части спины',
      journal: 'Физиотерапия и реабилитация',
      year: '2023',
      type: 'Научная статья',
      description: 'Результаты клинического исследования применения кинезиотерапии у пациентов с хронической болью в спине.'
    },
    {
      title: 'Интегративный подход в неврологической реабилитации после инсульта',
      journal: 'Неврология и нейрохирургия',
      year: '2023',
      type: 'Обзорная статья',
      description: 'Комплексный обзор современных методов реабилитации пациентов после острого нарушения мозгового кровообращения.'
    },
    {
      title: 'Биологическая обратная связь в коррекции постуральных нарушений',
      journal: 'Вестник восстановительной медицины',
      year: '2022',
      type: 'Научная статья',
      description: 'Исследование эффективности метода биологической обратной связи для коррекции нарушений осанки.'
    },
    {
      title: 'Гидрокинезотерапия в реабилитации пациентов с гонартрозом',
      journal: 'Ревматология и травматология',
      year: '2022',
      type: 'Научная статья',
      description: 'Оценка клинической эффективности водной реабилитации при остеоартрозе коленных суставов.'
    },
    {
      title: 'Мануальная терапия и остеопатия: современное состояние вопроса',
      journal: 'Мануальная терапия',
      year: '2021',
      type: 'Обзорная статья',
      description: 'Систематический обзор научных данных об эффективности мануальных техник в реабилитационной практике.'
    }
  ];

  const books = [
    {
      title: 'Практическое руководство по медицинской реабилитации',
      year: '2023',
      role: 'Соавтор',
      description: 'Комплексное руководство для врачей-реабилитологов с описанием современных методик и протоколов лечения.'
    },
    {
      title: 'Кинезиотерапия в ортопедии и травматологии',
      year: '2021',
      role: 'Автор главы',
      description: 'Вклад в коллективную монографию: глава о применении лечебного движения при заболеваниях опорно-двигательного аппарата.'
    }
  ];

  const presentations = [
    {
      title: 'Инновации в роботизированной реабилитации',
      event: 'Международный конгресс реабилитологов',
      location: 'Москва',
      year: '2024'
    },
    {
      title: 'Телереабилитация: возможности и перспективы',
      event: 'Форум "Медицина будущего"',
      location: 'Санкт-Петербург',
      year: '2023'
    },
    {
      title: 'Биомеханические аспекты постуральных нарушений',
      event: 'Европейская конференция по спортивной медицине',
      location: 'Берлин, Германия',
      year: '2023'
    },
    {
      title: 'Нейропластичность и восстановление после инсульта',
      event: 'Всероссийская конференция неврологов',
      location: 'Казань',
      year: '2022'
    },
    {
      title: 'Персонализированная медицина в реабилитологии',
      event: 'Научно-практическая конференция',
      location: 'Москва',
      year: '2022'
    }
  ];

  const media = [
    {
      title: 'Как правильно восстанавливаться после травм',
      type: 'Интервью',
      outlet: 'Журнал "Здоровье"',
      year: '2024'
    },
    {
      title: 'Мифы и правда о реабилитации',
      type: 'Статья',
      outlet: 'Медицинский портал Med.ru',
      year: '2023'
    },
    {
      title: 'Профилактика болей в спине',
      type: 'Видео-интервью',
      outlet: 'YouTube канал "Доктор рекомендует"',
      year: '2023'
    }
  ];

  return (
    <Layout>
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold text-center mb-4 animate-fade-in">Публикации</h1>
            <p className="text-center text-lg text-muted-foreground mb-12 animate-fade-in">
              Научная и просветительская деятельность
            </p>

            <Tabs defaultValue="articles" className="space-y-8">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="articles">Статьи</TabsTrigger>
                <TabsTrigger value="books">Книги</TabsTrigger>
                <TabsTrigger value="presentations">Доклады</TabsTrigger>
                <TabsTrigger value="media">СМИ</TabsTrigger>
              </TabsList>

              <TabsContent value="articles" className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold mb-2">Научные статьи</h2>
                  <p className="text-muted-foreground">
                    Публикации в рецензируемых медицинских журналах
                  </p>
                </div>
                {articles.map((article, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <Icon name="FileText" className="text-primary" size={24} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="text-xs px-2 py-1 bg-secondary/10 text-secondary rounded">
                              {article.type}
                            </span>
                            <span className="text-sm text-muted-foreground">{article.year}</span>
                          </div>
                          <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                          <p className="text-primary font-medium text-sm mb-2">{article.journal}</p>
                          <p className="text-muted-foreground text-sm">{article.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="books" className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold mb-2">Книги и монографии</h2>
                  <p className="text-muted-foreground">
                    Вклад в профессиональную литературу
                  </p>
                </div>
                {books.map((book, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-secondary/10 p-3 rounded-lg">
                          <Icon name="Book" className="text-secondary" size={24} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                              {book.role}
                            </span>
                            <span className="text-sm text-muted-foreground">{book.year}</span>
                          </div>
                          <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
                          <p className="text-muted-foreground text-sm">{book.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="presentations" className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold mb-2">Доклады и выступления</h2>
                  <p className="text-muted-foreground">
                    Участие в конференциях и научных мероприятиях
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {presentations.map((pres, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="bg-primary/10 p-3 rounded-lg">
                            <Icon name="Presentation" className="text-primary" size={24} />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm text-muted-foreground mb-1">{pres.year}</div>
                            <h3 className="text-lg font-semibold mb-2">{pres.title}</h3>
                            <p className="text-primary font-medium text-sm mb-1">{pres.event}</p>
                            <p className="text-muted-foreground text-sm flex items-center">
                              <Icon name="MapPin" className="mr-1" size={14} />
                              {pres.location}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="media" className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold mb-2">Публикации в СМИ</h2>
                  <p className="text-muted-foreground">
                    Просветительская деятельность для широкой аудитории
                  </p>
                </div>
                {media.map((item, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-secondary/10 p-3 rounded-lg">
                          <Icon name="Newspaper" className="text-secondary" size={24} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                              {item.type}
                            </span>
                            <span className="text-sm text-muted-foreground">{item.year}</span>
                          </div>
                          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                          <p className="text-muted-foreground text-sm">{item.outlet}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>

            <Card className="mt-12 bg-gradient-to-r from-primary/10 to-secondary/10 border-none">
              <CardContent className="p-8 text-center">
                <Icon name="Award" className="text-primary mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-4">Научная деятельность</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Постоянно участвую в научных исследованиях и делюсь знаниями с профессиональным 
                  сообществом. Считаю важным развитие реабилитационной медицины через науку и образование.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Publications;