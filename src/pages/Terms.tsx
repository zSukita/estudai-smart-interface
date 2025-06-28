
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Brain, Clock, ArrowLeft } from 'lucide-react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative">
        {/* Header */}
        <div className="p-6 border-b border-white/10">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Brain className="w-8 h-8 text-teal-400 stroke-[1.5]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Clock className="w-3 h-3 text-teal-400" />
                </div>
              </div>
              <h1 className="text-2xl font-bold text-white">ESTUDAÍ</h1>
            </div>
            
            <Link to="/login">
              <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
            </Link>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto p-6">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-8">Termos de Uso</h2>
            
            <div className="space-y-6 text-white/80">
              <section>
                <h3 className="text-xl font-semibold text-white mb-3">1. Aceitação dos Termos</h3>
                <p>
                  Ao acessar e usar o Estudaí, você concorda com estes Termos de Uso. Se você não concordar 
                  com qualquer parte destes termos, não deve usar nosso aplicativo.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-3">2. Descrição do Serviço</h3>
                <p>
                  O Estudaí é uma plataforma de gestão de estudos que utiliza inteligência artificial para 
                  otimizar a produtividade e bem-estar mental dos estudantes, oferecendo funcionalidades como 
                  cronogramas personalizados, timer Pomodoro e relatórios de progresso.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-3">3. Conta do Usuário</h3>
                <p>
                  Você é responsável por manter a confidencialidade de sua conta e senha. Você concorda em 
                  aceitar a responsabilidade por todas as atividades que ocorrerem sob sua conta.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-3">4. Uso Aceitável</h3>
                <p>
                  Você concorda em usar o Estudaí apenas para fins legítimos de estudo e educação. É proibido 
                  usar o serviço para qualquer atividade ilegal ou não autorizada.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-3">5. Propriedade Intelectual</h3>
                <p>
                  Todo o conteúdo, funcionalidades e tecnologia do Estudaí são propriedade exclusiva da empresa 
                  e são protegidos por leis de direitos autorais e outras leis de propriedade intelectual.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-3">6. Limitação de Responsabilidade</h3>
                <p>
                  O Estudaí não será responsável por quaisquer danos diretos, indiretos, incidentais ou 
                  consequenciais decorrentes do uso ou incapacidade de usar nosso serviço.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-3">7. Modificações dos Termos</h3>
                <p>
                  Reservamos o direito de modificar estes termos a qualquer momento. As alterações entrarão 
                  em vigor imediatamente após a publicação no aplicativo.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-3">8. Contato</h3>
                <p>
                  Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco através do 
                  email: suporte@estudai.com.br
                </p>
              </section>
            </div>

            <div className="mt-8 pt-6 border-t border-white/20 text-center">
              <p className="text-white/60 text-sm">
                Última atualização: {new Date().toLocaleDateString('pt-BR')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
