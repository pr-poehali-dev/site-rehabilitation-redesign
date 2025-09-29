import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';

const Methods = () => {
  const methods = [
    {
      icon: 'Stethoscope',
      title: 'Кинезиотерапия',
      description: 'Лечение движением для восстановления функций опорно-двигательного аппарата',
      details: 'Кинезиотерапия - это система индивидуально подобранных упражнений, направленных на восстановление нормальной биомеханики движений. Метод эффективен при заболеваниях позвоночника, суставов, после травм и операций.',
      indications: [
        'Боли в спине и суставах',
        'Реабилитация после травм',
        'Восстановление после операций',
        'Нарушения осанки'
      ]
    },
    {
      icon: 'Heart',
      title: 'Физиотерапия',
      description: 'Современные методы физического воздействия для ускорения реабилитации',
      details: 'Использование физических факторов (электротерапия, магнитотерапия, ультразвук, лазеротерапия) для стимуляции восстановительных процессов в организме. Физиотерапия усиливает эффект основного лечения и ускоряет выздоровление.',
      indications: [
        'Воспалительные заболевания',
        'Болевой синдром',
        'Отеки и гематомы',
        'Спортивные травмы'
      ]
    },
    {
      icon: 'Activity',
      title: 'Лечебная физкультура (ЛФК)',
      description: 'Индивидуальные программы лечебной физкультуры',
      details: 'ЛФК представляет собой комплекс специально разработанных упражнений, адаптированных под конкретное заболевание и физические возможности пациента. Занятия проводятся под контролем специалиста с постепенным увеличением нагрузки.',
      indications: [
        'Заболевания сердечно-сосудистой системы',
        'Болезни дыхательной системы',
        'Неврологические расстройства',
        'Метаболический синдром'
      ]
    },
    {
      icon: 'Brain',
      title: 'Неврологическая реабилитация',
      description: 'Восстановление после инсульта и травм нервной системы',
      details: 'Комплексная программа восстановления неврологических функций с использованием современных методик, включая роботизированную механотерапию, биологическую обратную связь, когнитивный тренинг.',
      indications: [
        'Последствия инсульта',
        'Черепно-мозговые травмы',
        'Повреждения спинного мозга',
        'Нейродегенеративные заболевания'
      ]
    },
    {
      icon: 'Hand',
      title: 'Мануальная терапия',
      description: 'Безопасные техники коррекции биомеханических нарушений',
      details: 'Мягкие мануальные техники для устранения функциональных блоков суставов, мышечных спазмов и восстановления нормальной подвижности. Применяются только после тщательной диагностики.',
      indications: [
        'Дисфункции суставов',
        'Мышечно-тонические синдромы',
        'Головные боли напряжения',
        'Ограничение подвижности'
      ]
    },
    {
      icon: 'Zap',
      title: 'Электростимуляция',
      description: 'Восстановление мышечного тонуса и силы',
      details: 'Применение электрических импульсов для стимуляции мышц, улучшения кровообращения и обменных процессов. Особенно эффективно при атрофии мышц и нейромышечных заболеваниях.',
      indications: [
        'Атрофия мышц',
        'Периферические парезы',
        'Нарушения трофики тканей',
        'Послеоперационная реабилитация'
      ]
    },
    {
      icon: 'Waves',
      title: 'Гидрокинезотерапия',
      description: 'Водная реабилитация для щадящего восстановления',
      details: 'Упражнения в воде позволяют снизить нагрузку на суставы и позвоночник, при этом эффективно тренируя мышцы. Особенно показано пациентам с избыточным весом и тяжелыми поражениями суставов.',
      indications: [
        'Артрозы крупных суставов',
        'Избыточный вес',
        'Реабилитация после эндопротезирования',
        'Заболевания позвоночника'
      ]
    },
    {
      icon: 'Target',
      title: 'Биологическая обратная связь (БОС)',
      description: 'Инновационный метод обучения контролю над телом',
      details: 'С помощью специальной аппаратуры пациент учится контролировать и изменять физиологические процессы: мышечное напряжение, осанку, дыхание. Эффективен для переобучения неправильных двигательных стереотипов.',
      indications: [
        'Хронические боли',
        'Нарушения осанки',
        'Тревожные расстройства',
        'Реабилитация после инсульта'
      ]
    }
  ];

  return (
    <Layout>
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl font-bold text-center mb-4 animate-fade-in">Методики лечения</h1>
            <p className="text-center text-lg text-muted-foreground mb-12 animate-fade-in">
              Современные научно-обоснованные подходы к медицинской реабилитации
            </p>

            <div className="mb-12">
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {methods.slice(0, 4).map((method, index) => (
                  <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <Icon name={method.icon} className="text-primary" size={32} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                          <p className="text-muted-foreground text-sm">{method.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Подробнее о методиках</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {methods.map((method, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center space-x-3">
                        <Icon name={method.icon} className="text-primary" size={24} />
                        <span className="text-lg font-semibold">{method.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <div className="space-y-4">
                        <p className="text-muted-foreground">{method.details}</p>
                        <div>
                          <h4 className="font-semibold mb-2">Показания:</h4>
                          <ul className="space-y-1">
                            {method.indications.map((indication, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <Icon name="CheckCircle" className="text-secondary mt-1 flex-shrink-0" size={16} />
                                <span className="text-sm text-muted-foreground">{indication}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <Card className="bg-secondary/10 border-secondary/20">
              <CardContent className="p-8 text-center">
                <Icon name="Info" className="text-secondary mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-4">Индивидуальный подход</h3>
                <p className="text-muted-foreground mb-6">
                  Каждая программа реабилитации составляется индивидуально с учетом диагноза, 
                  возраста, физических возможностей и целей пациента. Комбинация методик 
                  подбирается для достижения максимального эффекта.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Methods;