import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';

const Home = () => {
  const highlights = [
    {
      icon: 'Award',
      title: '15+ лет',
      description: 'Опыта работы'
    },
    {
      icon: 'Users',
      title: '500+',
      description: 'Довольных пациентов'
    },
    {
      icon: 'TrendingUp',
      title: '95%',
      description: 'Успешных случаев'
    },
    {
      icon: 'Certificate',
      title: '30+',
      description: 'Сертификатов'
    }
  ];

  const services = [
    {
      icon: 'Stethoscope',
      title: 'Кинезиотерапия',
      description: 'Лечение движением для восстановления функций',
      link: '/methods'
    },
    {
      icon: 'Heart',
      title: 'Физиотерапия',
      description: 'Современные методы физического воздействия',
      link: '/methods'
    },
    {
      icon: 'Activity',
      title: 'ЛФК',
      description: 'Индивидуальные программы лечебной физкультуры',
      link: '/methods'
    },
    {
      icon: 'Brain',
      title: 'Неврологическая реабилитация',
      description: 'Восстановление после инсульта и травм',
      link: '/methods'
    }
  ];

  return (
    <Layout>
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Специалист по медицинской реабилитации
              </h1>
              <p className="text-xl text-muted-foreground">
                Рассохин Максим Юрьевич - эксперт в области физической и реабилитационной медицины с индивидуальным подходом к каждому пациенту
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/consultations">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Записаться на консультацию
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outline">
                    Узнать больше
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="/img/120552f1-670b-4162-ae7b-87ad83f089b2.jpg"
                alt="Рассохин М.Ю."
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-secondary text-white p-6 rounded-xl shadow-lg">
                <p className="text-3xl font-bold">15+</p>
                <p className="text-sm">лет опыта</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 space-y-3">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                    <Icon name={item.icon} className="text-primary" size={32} />
                  </div>
                  <h3 className="text-3xl font-bold text-primary">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Методики лечения</h2>
            <p className="text-lg text-muted-foreground">
              Современные научно-обоснованные подходы к реабилитации
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link key={index} to={service.link}>
                <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                      <Icon name={service.icon} className="text-primary" size={32} />
                    </div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/methods">
              <Button size="lg" variant="outline">
                Все методики
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-secondary/10">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold">Почему выбирают меня?</h2>
            <p className="text-lg text-muted-foreground">
              Врач-реабилитолог высшей категории с более чем 15-летним опытом работы. 
              Специализируюсь на комплексном подходе к восстановлению пациентов после травм, 
              операций и неврологических заболеваний.
            </p>
            <Link to="/about">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Подробнее обо мне
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;