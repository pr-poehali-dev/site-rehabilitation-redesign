import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const sections = [
    { id: 'home', label: 'Главная' },
    { id: 'about', label: 'Обо мне' },
    { id: 'education', label: 'Образование' },
    { id: 'methods', label: 'Методики' },
    { id: 'results', label: 'Результаты' },
    { id: 'publications', label: 'Публикации' },
    { id: 'consultations', label: 'Консультации' },
    { id: 'contacts', label: 'Контакты' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const methods = [
    {
      icon: 'Stethoscope',
      title: 'Кинезиотерапия',
      description: 'Лечение движением для восстановления функций опорно-двигательного аппарата'
    },
    {
      icon: 'Heart',
      title: 'Физиотерапия',
      description: 'Современные методы физического воздействия для ускорения реабилитации'
    },
    {
      icon: 'Activity',
      title: 'ЛФК',
      description: 'Индивидуальные программы лечебной физкультуры'
    },
    {
      icon: 'Brain',
      title: 'Неврологическая реабилитация',
      description: 'Восстановление после инсульта и травм нервной системы'
    }
  ];

  const education = [
    {
      year: '2008-2014',
      title: 'Первый Московский Государственный Медицинский Университет',
      description: 'Лечебное дело'
    },
    {
      year: '2014-2016',
      title: 'Ординатура по специальности',
      description: 'Физическая и реабилитационная медицина'
    },
    {
      year: '2016-2020',
      title: 'Повышение квалификации',
      description: 'Современные методы медицинской реабилитации'
    }
  ];

  const results = [
    { number: '500+', label: 'Пациентов' },
    { number: '15+', label: 'Лет опыта' },
    { number: '95%', label: 'Успешных случаев' },
    { number: '30+', label: 'Сертификатов' }
  ];

  const publications = [
    {
      title: 'Современные подходы к реабилитации после эндопротезирования',
      journal: 'Журнал медицинской реабилитации',
      year: '2023'
    },
    {
      title: 'Эффективность кинезиотерапии при хронических болях',
      journal: 'Физиотерапия и реабилитация',
      year: '2022'
    },
    {
      title: 'Интегративный подход в неврологической реабилитации',
      journal: 'Неврология и нейрохирургия',
      year: '2021'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="HeartPulse" className="text-primary" size={32} />
              <span className="text-xl font-bold text-primary">Рассохин М.Ю.</span>
            </div>
            
            <div className="hidden md:flex space-x-6">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {section.label}
                </button>
              ))}
            </div>

            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Icon name={menuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>

          {menuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="block w-full text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors"
                >
                  {section.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <section id="home" className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Специалист по медицинской реабилитации
              </h1>
              <p className="text-xl text-muted-foreground">
                Рассохин Максим Юрьевич - эксперт в области физической и реабилитационной медицины
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection('consultations')}
                  className="bg-primary hover:bg-primary/90"
                >
                  Записаться на консультацию
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => scrollToSection('about')}
                >
                  Узнать больше
                </Button>
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

      <section id="about" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold text-foreground">Обо мне</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Врач-реабилитолог высшей категории с более чем 15-летним опытом работы в области медицинской реабилитации. 
              Специализируюсь на комплексном подходе к восстановлению пациентов после травм, операций и неврологических заболеваний.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Моя миссия - помочь каждому пациенту вернуться к полноценной жизни, используя современные научно-обоснованные методы реабилитации.
              Индивидуальный подход, внимание к деталям и постоянное профессиональное развитие - основа моей практики.
            </p>
          </div>
        </div>
      </section>

      <section id="education" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Образование</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {education.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon name="GraduationCap" className="text-primary" size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-muted-foreground mb-1">{item.year}</div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="methods" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Методики лечения</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methods.map((method, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center space-y-4">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                    <Icon name={method.icon} className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold">{method.title}</h3>
                  <p className="text-muted-foreground text-sm">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="results" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Результаты работы</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {results.map((item, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-5xl font-bold text-primary mb-2">{item.number}</div>
                <div className="text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="publications" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Публикации</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {publications.map((pub, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-secondary/10 p-3 rounded-lg">
                      <Icon name="BookOpen" className="text-secondary" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{pub.title}</h3>
                      <p className="text-muted-foreground text-sm">{pub.journal} • {pub.year}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="consultations" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Консультации</h2>
              <p className="text-lg text-muted-foreground">
                Записывайтесь на первичную консультацию для оценки вашего состояния и разработки индивидуальной программы реабилитации.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" className="text-secondary mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">Комплексная диагностика</h4>
                    <p className="text-sm text-muted-foreground">Полная оценка функционального состояния</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" className="text-secondary mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">Индивидуальный план</h4>
                    <p className="text-sm text-muted-foreground">Персонализированная программа реабилитации</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" className="text-secondary mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">Постоянная поддержка</h4>
                    <p className="text-sm text-muted-foreground">Контроль прогресса на всех этапах</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Записаться на приём</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                    <Input
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Телефон</label>
                    <Input
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input
                      type="email"
                      placeholder="example@mail.ru"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Сообщение</label>
                    <Textarea
                      placeholder="Опишите вашу проблему..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-3">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Phone" className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold">Телефон</h3>
                <p className="text-muted-foreground">+7 (495) 123-45-67</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-3">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Mail" className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-muted-foreground">info@rassokhin.ru</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-3">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="MapPin" className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold">Адрес</h3>
                <p className="text-muted-foreground">Москва, ул. Примерная, д. 1</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            © 2025 Рассохин Максим Юрьевич. Специалист по медицинской реабилитации
          </p>
          <p className="text-xs mt-2 text-white/70">
            specmedreabilitation-rassokhin.ru
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;