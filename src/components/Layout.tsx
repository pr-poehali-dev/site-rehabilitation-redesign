import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Главная' },
    { path: '/about', label: 'Обо мне' },
    { path: '/education', label: 'Образование' },
    { path: '/methods', label: 'Методики' },
    { path: '/results', label: 'Результаты' },
    { path: '/publications', label: 'Публикации' },
    { path: '/consultations', label: 'Консультации' },
    { path: '/contacts', label: 'Контакты' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Icon name="HeartPulse" className="text-primary" size={32} />
              <span className="text-xl font-bold text-primary">Рассохин М.Ю.</span>
            </Link>
            
            <div className="hidden lg:flex space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`transition-colors font-medium ${
                    isActive(item.path) 
                      ? 'text-primary font-semibold' 
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <button
              className="lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Icon name={menuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>

          {menuOpen && (
            <div className="lg:hidden mt-4 pb-4 space-y-3 animate-fade-in">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    isActive(item.path)
                      ? 'bg-primary/10 text-primary font-semibold'
                      : 'hover:bg-muted'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      <main className="flex-grow pt-20">
        {children}
      </main>

      <footer className="bg-foreground text-white py-8 px-4 mt-16">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-6">
            <div>
              <h3 className="font-semibold text-lg mb-3">Рассохин М.Ю.</h3>
              <p className="text-sm text-white/70">
                Специалист по медицинской реабилитации с более чем 15-летним опытом работы
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">Контакты</h3>
              <div className="space-y-2 text-sm text-white/70">
                <p>Телефон: +7 (495) 123-45-67</p>
                <p>Email: info@rassokhin.ru</p>
                <p>Адрес: Москва, ул. Примерная, д. 1</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">Режим работы</h3>
              <div className="space-y-1 text-sm text-white/70">
                <p>Пн-Пт: 9:00 - 20:00</p>
                <p>Сб: 10:00 - 18:00</p>
                <p>Вс: Выходной</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-6 text-center">
            <p className="text-sm">
              © 2025 Рассохин Максим Юрьевич. Специалист по медицинской реабилитации
            </p>
            <p className="text-xs mt-2 text-white/70">
              specmedreabilitation-rassokhin.ru
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;