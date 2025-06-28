import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Brain, 
  Clock, 
  Target, 
  TrendingUp, 
  Users, 
  Zap, 
  Shield, 
  CheckCircle,
  ArrowRight,
  Play,
  BarChart3,
  Calendar,
  BookOpen
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

const Landing = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  // Redirecionar usuários autenticados para o dashboard
  useEffect(() => {
    if (!loading && user) {
      navigate('/dashboard');
    }
  }, [user, loading, navigate]);

  // Mostrar loading enquanto verifica autenticação
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }

  // Se usuário está logado, não mostrar a landing page
  if (user) {
    return null;
  }

  const features = [
    {
      icon: Brain,
      title: 'IA Personalizada',
      description: 'Algoritmos inteligentes que se adaptam ao seu perfil de estudante e sugerem estratégias personalizadas.'
    },
    {
      icon: Clock,
      title: 'Técnicas Comprovadas',
      description: 'Pomodoro, GTD, Time Blocking, Eisenhower e Kanban integrados em uma única plataforma.'
    },
    {
      icon: Target,
      title: 'Metas Inteligentes',
      description: 'Definição e acompanhamento de objetivos com previsões baseadas em seu histórico de estudos.'
    },
    {
      icon: TrendingUp,
      title: 'Análise Preditiva',
      description: 'Relatórios que preveem seu desempenho e sugerem ajustes para otimizar resultados.'
    },
    {
      icon: Shield,
      title: 'Saúde Mental',
      description: 'Monitoramento de bem-estar com sugestões de pausas e equilíbrio entre estudos e descanso.'
    },
    {
      icon: Zap,
      title: 'Otimização Contínua',
      description: 'Sistema que aprende seus padrões e melhora continuamente suas recomendações.'
    }
  ];

  const benefits = [
    'Aumento de 40% na produtividade dos estudos',
    'Redução de 60% no tempo perdido com procrastinação',
    'Melhoria de 35% na retenção de conteúdo',
    'Diminuição de 50% do estresse relacionado aos estudos'
  ];

  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'Vestibulando',
      content: 'O Estudaí revolucionou minha preparação. Consegui organizar meu tempo e aumentar minha produtividade significativamente.',
      avatar: 'MS'
    },
    {
      name: 'João Santos',
      role: 'Concurseiro',
      content: 'A IA do aplicativo entende exatamente quando preciso de uma pausa. Meu rendimento melhorou muito!',
      avatar: 'JS'
    },
    {
      name: 'Ana Costa',
      role: 'Universitária',
      content: 'Finalmente encontrei uma ferramenta que se adapta ao meu ritmo de estudos. Recomendo para todos!',
      avatar: 'AC'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Estudaí</h1>
                <p className="text-xs text-gray-500">Organize, learn, evolve</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
                  Entrar
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="gradient-primary">
                  Começar Grátis
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Powered by Amazon Bedrock AI
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Estude com
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Inteligência</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transforme sua rotina de estudos com IA personalizada. Otimize seu tempo, 
              melhore sua produtividade e mantenha o equilíbrio mental com o mentor de estudos mais inteligente.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/signup">
                <Button size="lg" className="gradient-primary text-lg px-8 py-4">
                  <Play className="w-5 h-5 mr-2" />
                  Começar Agora - Grátis
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                <Play className="w-5 h-5 mr-2" />
                Ver Demo
              </Button>
            </div>
          </div>
          
          {/* Hero Image/Video Placeholder */}
          <div className="mt-16 relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-0 shadow-soft">
                  <CardContent className="p-6 text-center">
                    <BarChart3 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-900 mb-2">Analytics Inteligente</h3>
                    <p className="text-sm text-gray-600">Relatórios preditivos com IA</p>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-soft">
                  <CardContent className="p-6 text-center">
                    <Calendar className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-900 mb-2">Cronograma Adaptativo</h3>
                    <p className="text-sm text-gray-600">Planejamento que evolui com você</p>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-soft">
                  <CardContent className="p-6 text-center">
                    <BookOpen className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-900 mb-2">Técnicas Científicas</h3>
                    <p className="text-sm text-gray-600">Métodos comprovados integrados</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Por que escolher o Estudaí?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Não é apenas um app de estudos. É seu mentor inteligente que evolui com você.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-soft card-hover">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <feature.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Resultados Comprovados
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Milhares de estudantes já transformaram seus resultados com o Estudaí
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <p className="text-lg text-white font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Como Funciona
            </h2>
            <p className="text-xl text-gray-600">
              Três passos simples para revolucionar seus estudos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Configure seu Perfil</h3>
              <p className="text-gray-600">
                Conte-nos sobre seus objetivos, horários disponíveis e preferências de estudo.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">IA Cria seu Plano</h3>
              <p className="text-gray-600">
                Nossa inteligência artificial analisa seus dados e cria um cronograma personalizado.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Estude e Evolua</h3>
              <p className="text-gray-600">
                Siga as recomendações e veja a IA se adaptar continuamente ao seu progresso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              O que nossos usuários dizem
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-soft">
                <CardContent className="p-8">
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-semibold">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Pronto para transformar seus estudos?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Junte-se a milhares de estudantes que já descobriram o poder da IA nos estudos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
                Começar Gratuitamente
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
          
          <p className="text-blue-200 text-sm mt-4">
            Sem cartão de crédito • Grátis para sempre • Suporte 24/7
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">Estudaí</h3>
              </div>
              <p className="text-gray-400">
                O mentor de estudos inteligente que evolui com você.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Funcionalidades</a></li>
                <li><a href="#" className="hover:text-white">Preços</a></li>
                <li><a href="#" className="hover:text-white">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white">Contato</a></li>
                <li><a href="#" className="hover:text-white">Status</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/privacy" className="hover:text-white">Privacidade</Link></li>
                <li><Link to="/terms" className="hover:text-white">Termos</Link></li>
                <li><a href="#" className="hover:text-white">Cookies</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Estudaí. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;