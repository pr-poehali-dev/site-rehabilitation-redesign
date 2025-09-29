import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';

const About = () => {
  const values = [
    {
      icon: 'Target',
      title: 'Индивидуальный подход',
      description: 'Каждый пациент уникален, поэтому программа реабилитации разрабатывается персонально с учетом всех особенностей'
    },
    {
      icon: 'BookOpen',
      title: 'Научная обоснованность',
      description: 'Использую только доказанные методики, подтвержденные международными исследованиями'
    },
    {
      icon: 'Users',
      title: 'Комплексный подход',
      description: 'Работа с пациентом включает физическую, психологическую и социальную реабилитацию'
    },
    {
      icon: 'TrendingUp',
      title: 'Постоянное развитие',
      description: 'Регулярно повышаю квалификацию, изучаю новые методики и технологии реабилитации'
    }
  ];

  const experience = [
    {
      period: '2020 - настоящее время',
      title: 'Главный врач-реабилитолог',
      place: 'Центр медицинской реабилитации',
      description: 'Руководство отделением реабилитации, разработка программ восстановления'
    },
    {
      period: '2016 - 2020',
      title: 'Врач-реабилитолог',
      place: 'Городская больница №1',
      description: 'Ведение пациентов после травм и операций, неврологическая реабилитация'
    },
    {
      period: '2014 - 2016',
      title: 'Врач-ординатор',
      place: 'ПМГМУ им. Сеченова',
      description: 'Специализация по физической и реабилитационной медицине'
    }
  ];

  return (
    <Layout>
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-center mb-8 animate-fade-in">Обо мне</h1>
            
            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div className="animate-fade-in">
                <img 
                  src="/img/120552f1-670b-4162-ae7b-87ad83f089b2.jpg"
                  alt="Рассохин М.Ю."
                  className="rounded-2xl shadow-xl w-full object-cover"
                />
              </div>
              <div className="space-y-4 animate-fade-in">
                <h2 className="text-3xl font-bold">Рассохин Максим Юрьевич</h2>
                <p className="text-lg text-muted-foreground">
                  Врач-реабилитолог высшей категории
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Моя специализация - помощь людям в восстановлении после травм, операций и неврологических заболеваний. 
                  За 15 лет практики я помог более чем 500 пациентам вернуться к полноценной жизни.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Я верю, что качественная реабилитация - это не просто набор упражнений, 
                  а комплексный процесс, требующий внимания к физическому и эмоциональному состоянию человека.
                </p>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-8">Мои принципы работы</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <Icon name={value.icon} className="text-primary" size={24} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                          <p className="text-muted-foreground text-sm">{value.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-center mb-8">Опыт работы</h2>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-secondary/10 p-3 rounded-lg">
                          <Icon name="Briefcase" className="text-secondary" size={24} />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-muted-foreground mb-1">{exp.period}</div>
                          <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                          <p className="text-primary font-medium mb-2">{exp.place}</p>
                          <p className="text-muted-foreground text-sm">{exp.description}</p>
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

export default About;