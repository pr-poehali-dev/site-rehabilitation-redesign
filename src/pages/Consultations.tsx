import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import Layout from '@/components/Layout';

const Consultations = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    consultationType: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', email: '', consultationType: '', message: '' });
  };

  const consultationTypes = [
    {
      icon: 'Stethoscope',
      title: 'Первичная консультация',
      duration: '60 минут',
      description: 'Комплексный осмотр, функциональная диагностика, разработка индивидуального плана реабилитации',
      includes: [
        'Сбор анамнеза',
        'Физикальный осмотр',
        'Функциональные тесты',
        'Рекомендации по лечению'
      ]
    },
    {
      icon: 'RefreshCw',
      title: 'Повторная консультация',
      duration: '40 минут',
      description: 'Оценка динамики восстановления, корректировка программы реабилитации',
      includes: [
        'Оценка прогресса',
        'Корректировка упражнений',
        'Новые рекомендации',
        'Ответы на вопросы'
      ]
    },
    {
      icon: 'Video',
      title: 'Онлайн-консультация',
      duration: '45 минут',
      description: 'Дистанционная консультация с возможностью демонстрации упражнений',
      includes: [
        'Видеосвязь',
        'Разбор документов',
        'Обучение упражнениям',
        'План на дом'
      ]
    },
    {
      icon: 'FileText',
      title: 'Консультация по документам',
      duration: '30 минут',
      description: 'Анализ медицинских документов, рекомендации по дальнейшему обследованию и лечению',
      includes: [
        'Анализ снимков и анализов',
        'Письменное заключение',
        'Рекомендации по обследованию',
        'План действий'
      ]
    }
  ];

  const benefits = [
    {
      icon: 'Target',
      title: 'Индивидуальный подход',
      description: 'Программа реабилитации разрабатывается персонально'
    },
    {
      icon: 'Clock',
      title: 'Без очередей',
      description: 'Прием строго по записи в удобное время'
    },
    {
      icon: 'Award',
      title: 'Высокая квалификация',
      description: 'Врач высшей категории с опытом 15+ лет'
    },
    {
      icon: 'Shield',
      title: 'Конфиденциальность',
      description: 'Полная конфиденциальность ваших данных'
    }
  ];

  const process = [
    {
      number: '1',
      title: 'Запись',
      description: 'Заполните форму или позвоните по телефону'
    },
    {
      number: '2',
      title: 'Подтверждение',
      description: 'Мы свяжемся с вами для уточнения деталей'
    },
    {
      number: '3',
      title: 'Консультация',
      description: 'Проведение осмотра и диагностики'
    },
    {
      number: '4',
      title: 'План лечения',
      description: 'Получение индивидуальной программы'
    }
  ];

  return (
    <Layout>
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold text-center mb-4 animate-fade-in">Консультации</h1>
            <p className="text-center text-lg text-muted-foreground mb-12 animate-fade-in">
              Запись на прием к специалисту по медицинской реабилитации
            </p>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Типы консультаций</h2>
                  <div className="space-y-4">
                    {consultationTypes.map((type, index) => (
                      <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="bg-primary/10 p-3 rounded-lg">
                              <Icon name={type.icon} className="text-primary" size={24} />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h3 className="text-lg font-semibold">{type.title}</h3>
                                <span className="text-sm text-muted-foreground">{type.duration}</span>
                              </div>
                              <p className="text-muted-foreground text-sm mb-3">{type.description}</p>
                              <div className="space-y-1">
                                {type.includes.map((item, idx) => (
                                  <div key={idx} className="flex items-center space-x-2">
                                    <Icon name="Check" className="text-secondary" size={14} />
                                    <span className="text-xs text-muted-foreground">{item}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <CardContent className="p-4 text-center">
                        <Icon name={benefit.icon} className="text-primary mx-auto mb-2" size={32} />
                        <h4 className="font-semibold text-sm mb-1">{benefit.title}</h4>
                        <p className="text-xs text-muted-foreground">{benefit.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <Card className="shadow-xl sticky top-24">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6">Записаться на приём</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Ваше имя *</label>
                        <Input
                          placeholder="Иван Иванов"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Телефон *</label>
                        <Input
                          type="tel"
                          placeholder="+7 (999) 123-45-67"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Email *</label>
                        <Input
                          type="email"
                          placeholder="example@mail.ru"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Тип консультации</label>
                        <Select 
                          value={formData.consultationType}
                          onValueChange={(value) => setFormData({...formData, consultationType: value})}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите тип консультации" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="primary">Первичная консультация</SelectItem>
                            <SelectItem value="repeat">Повторная консультация</SelectItem>
                            <SelectItem value="online">Онлайн-консультация</SelectItem>
                            <SelectItem value="documents">Консультация по документам</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Сообщение</label>
                        <Textarea
                          placeholder="Опишите вашу проблему или вопрос..."
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          rows={4}
                        />
                      </div>
                      <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                        Отправить заявку
                      </Button>
                      <p className="text-xs text-center text-muted-foreground">
                        Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-8">Как проходит консультация</h2>
              <div className="grid md:grid-cols-4 gap-6">
                {process.map((step, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                        {step.number}
                      </div>
                      <h3 className="font-semibold mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-none">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                  <div className="flex items-center space-x-4">
                    <Icon name="Phone" className="text-primary" size={48} />
                    <div>
                      <h3 className="text-xl font-bold mb-1">Есть вопросы?</h3>
                      <p className="text-muted-foreground">Позвоните нам для получения консультации</p>
                    </div>
                  </div>
                  <div className="text-center md:text-right">
                    <a href="tel:+74951234567" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
                      +7 (495) 123-45-67
                    </a>
                    <p className="text-sm text-muted-foreground">Пн-Пт: 9:00 - 20:00, Сб: 10:00 - 18:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Consultations;