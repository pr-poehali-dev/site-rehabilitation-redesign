import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';

const Results = () => {
  const stats = [
    { number: '500+', label: 'Пациентов', icon: 'Users' },
    { number: '15+', label: 'Лет опыта', icon: 'Award' },
    { number: '95%', label: 'Успешных случаев', icon: 'TrendingUp' },
    { number: '30+', label: 'Сертификатов', icon: 'Certificate' }
  ];

  const cases = [
    {
      title: 'Восстановление после эндопротезирования тазобедренного сустава',
      description: 'Пациентка, 62 года. Полное восстановление функции ходьбы через 3 месяца реабилитации.',
      duration: '3 месяца',
      result: 'Полное восстановление',
      methods: ['Кинезиотерапия', 'ЛФК', 'Физиотерапия']
    },
    {
      title: 'Реабилитация после инсульта',
      description: 'Пациент, 55 лет. Восстановление двигательных функций правой руки и ноги, улучшение речи.',
      duration: '6 месяцев',
      result: 'Значительное улучшение',
      methods: ['Неврологическая реабилитация', 'БОС', 'ЛФК']
    },
    {
      title: 'Лечение хронических болей в спине',
      description: 'Пациент, 45 лет. Избавление от хронической боли, восстановление подвижности позвоночника.',
      duration: '2 месяца',
      result: 'Устранение болевого синдрома',
      methods: ['Мануальная терапия', 'Кинезиотерапия', 'Физиотерапия']
    },
    {
      title: 'Восстановление спортсмена после травмы колена',
      description: 'Спортсмен, 28 лет. Возвращение к тренировкам на прежнем уровне после разрыва связок.',
      duration: '4 месяца',
      result: 'Полное восстановление',
      methods: ['Кинезиотерапия', 'Электростимуляция', 'Спортивная реабилитация']
    },
    {
      title: 'Реабилитация после компрессионного перелома позвоночника',
      description: 'Пациентка, 68 лет. Восстановление функции позвоночника, укрепление мышечного корсета.',
      duration: '5 месяцев',
      result: 'Восстановление функций',
      methods: ['ЛФК', 'Кинезиотерапия', 'Физиотерапия']
    },
    {
      title: 'Коррекция сколиоза у подростка',
      description: 'Пациент, 14 лет. Коррекция деформации позвоночника, улучшение осанки.',
      duration: '12 месяцев',
      result: 'Стабилизация состояния',
      methods: ['ЛФК', 'Мануальная терапия', 'БОС']
    }
  ];

  const achievements = [
    'Более 50 научных публикаций в ведущих медицинских журналах',
    'Участие в 30+ международных конференциях',
    'Разработка авторских методик реабилитации',
    'Благодарности от пациентов и их семей',
    'Высшая квалификационная категория',
    'Член Российской ассоциации по спортивной медицине'
  ];

  return (
    <Layout>
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold text-center mb-4 animate-fade-in">Результаты работы</h1>
            <p className="text-center text-lg text-muted-foreground mb-12 animate-fade-in">
              Реальные истории успешной реабилитации
            </p>

            <div className="grid md:grid-cols-4 gap-6 mb-16">
              {stats.map((item, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6 space-y-3">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                      <Icon name={item.icon} className="text-primary" size={32} />
                    </div>
                    <div className="text-4xl font-bold text-primary">{item.number}</div>
                    <div className="text-muted-foreground">{item.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Клинические случаи</h2>
              <p className="text-center text-muted-foreground mb-8">
                Примеры успешной реабилитации (данные изменены для конфиденциальности)
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {cases.map((caseItem, index) => (
                  <Card key={index} className="hover:shadow-xl transition-shadow animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardContent className="p-6 space-y-4">
                      <h3 className="text-xl font-semibold">{caseItem.title}</h3>
                      <p className="text-muted-foreground text-sm">{caseItem.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 py-3 border-y">
                        <div>
                          <div className="text-xs text-muted-foreground mb-1">Длительность</div>
                          <div className="font-semibold">{caseItem.duration}</div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground mb-1">Результат</div>
                          <div className="font-semibold text-secondary">{caseItem.result}</div>
                        </div>
                      </div>

                      <div>
                        <div className="text-xs text-muted-foreground mb-2">Применяемые методики:</div>
                        <div className="flex flex-wrap gap-2">
                          {caseItem.methods.map((method, idx) => (
                            <span key={idx} className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                              {method}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Достижения</h2>
              <Card>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start space-x-3 animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                        <Icon name="Star" className="text-secondary mt-1 flex-shrink-0" size={20} />
                        <p className="text-muted-foreground">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-none">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ваш успех - моя цель</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Каждый случай уникален, и я подхожу к реабилитации комплексно, 
                  учитывая все особенности пациента. Моя задача - не просто избавить 
                  от симптомов, а помочь вернуться к полноценной жизни.
                </p>
                <div className="flex justify-center items-center space-x-4">
                  <Icon name="Heart" className="text-secondary" size={24} />
                  <span className="text-lg font-medium">95% пациентов рекомендуют меня своим близким</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Results;