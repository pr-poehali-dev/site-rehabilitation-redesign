import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';

const Education = () => {
  const education = [
    {
      year: '2008-2014',
      title: 'Первый Московский Государственный Медицинский Университет им. И.М. Сеченова',
      degree: 'Специалист',
      description: 'Лечебное дело',
      details: 'Диплом с отличием. Специализация: общая медицина, основы реабилитологии'
    },
    {
      year: '2014-2016',
      title: 'Ординатура ПМГМУ им. И.М. Сеченова',
      degree: 'Врач-специалист',
      description: 'Физическая и реабилитационная медицина',
      details: 'Углубленное изучение методов физической реабилитации, кинезиотерапии, физиотерапии'
    },
    {
      year: '2017',
      title: 'Институт повышения квалификации',
      degree: 'Сертификат',
      description: 'Неврологическая реабилитация',
      details: 'Современные подходы к реабилитации пациентов с неврологическими заболеваниями'
    },
    {
      year: '2019',
      title: 'Международный семинар',
      degree: 'Сертификат',
      description: 'Мануальная терапия и остеопатия',
      details: 'Практические навыки мануальной диагностики и лечения'
    },
    {
      year: '2021',
      title: 'Повышение квалификации',
      degree: 'Сертификат',
      description: 'Современные технологии медицинской реабилитации',
      details: 'Роботизированная механотерапия, биологическая обратная связь, телереабилитация'
    },
    {
      year: '2023',
      title: 'Профессиональная переподготовка',
      degree: 'Диплом',
      description: 'Спортивная медицина',
      details: 'Реабилитация спортсменов, профилактика травм, восстановление после нагрузок'
    }
  ];

  const certificates = [
    'Высшая квалификационная категория по специальности "Физическая и реабилитационная медицина"',
    'Сертификат специалиста по физической и реабилитационной медицине',
    'Сертификат по мануальной терапии',
    'Сертификат по рефлексотерапии',
    'Сертификат по спортивной медицине',
    'Сертификат по медицинскому массажу',
    'Международный сертификат по кинезиотейпированию',
    'Сертификат по остеопатии'
  ];

  const courses = [
    {
      year: '2024',
      title: 'Инновации в реабилитационной медицине',
      organization: 'Конференция Европейского общества физической и реабилитационной медицины'
    },
    {
      year: '2023',
      title: 'Биомеханика движения и постуральный баланс',
      organization: 'Российская ассоциация по спортивной медицине'
    },
    {
      year: '2022',
      title: 'Телемедицина и дистанционная реабилитация',
      organization: 'Московский центр непрерывного медицинского образования'
    }
  ];

  return (
    <Layout>
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl font-bold text-center mb-4 animate-fade-in">Образование</h1>
            <p className="text-center text-lg text-muted-foreground mb-12 animate-fade-in">
              Постоянное обучение и профессиональное развитие
            </p>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Базовое и дополнительное образование</h2>
              <div className="space-y-6">
                {education.map((item, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <Icon name="GraduationCap" className="text-primary" size={24} />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-muted-foreground mb-1">{item.year}</div>
                          <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="text-primary font-medium text-sm">{item.degree}</span>
                            <span className="text-muted-foreground">•</span>
                            <span className="text-muted-foreground font-medium">{item.description}</span>
                          </div>
                          <p className="text-muted-foreground text-sm">{item.details}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Сертификаты и квалификации</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    {certificates.map((cert, index) => (
                      <div key={index} className="flex items-start space-x-3 animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                        <Icon name="CheckCircle" className="text-secondary mt-1 flex-shrink-0" size={20} />
                        <p className="text-sm text-muted-foreground">{cert}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8">Недавние курсы и конференции</h2>
              <div className="space-y-4">
                {courses.map((course, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-secondary/10 p-3 rounded-lg">
                          <Icon name="BookOpen" className="text-secondary" size={24} />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-muted-foreground mb-1">{course.year}</div>
                          <h3 className="text-lg font-semibold mb-1">{course.title}</h3>
                          <p className="text-muted-foreground text-sm">{course.organization}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Education;