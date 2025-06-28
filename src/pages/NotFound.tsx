
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Brain, Clock, Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative text-center">
        {/* Logo Section */}
        <div className="mb-8">
          <div className="relative inline-flex items-center justify-center mb-6">
            <div className="relative">
              <Brain className="w-20 h-20 text-teal-400 stroke-[1.5]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Clock className="w-8 h-8 text-teal-400" />
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl font-bold text-white mb-2">
            ESTUDAÍ
          </h1>
          <p className="text-teal-400 text-lg font-medium">
            Organize, learn, evolve
          </p>
        </div>

        {/* 404 Content */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20 max-w-md mx-auto">
          <div className="text-8xl font-bold text-white/20 mb-4">404</div>
          
          <h2 className="text-3xl font-bold text-white mb-4">
            Página não encontrada
          </h2>
          
          <p className="text-white/70 mb-8 text-lg">
            Ops! A página que você está procurando não existe ou foi movida.
          </p>

          <div className="space-y-4">
            <Link to="/">
              <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-teal-500/25">
                <Home className="w-4 h-4 mr-2" />
                Ir para o Dashboard
              </Button>
            </Link>
            
            <Link to="/login">
              <Button 
                variant="outline" 
                className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar ao Login
              </Button>
            </Link>
          </div>
        </div>

        {/* Help Text */}
        <div className="mt-8">
          <p className="text-white/60 text-sm">
            Se você acha que isso é um erro, entre em contato conosco em{' '}
            <a href="mailto:suporte@estudai.com.br" className="text-teal-400 hover:text-teal-300">
              suporte@estudai.com.br
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
