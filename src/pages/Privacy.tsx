
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Brain, Clock, ArrowLeft } from 'lucide-react';

const Privacy = () => {
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
            <h2 className="text-3xl font-bold text-white mb-8">Política de Privacidade</h2>
            
            <div className="space-y-6 text-white/80">
              <section>
                <h3 className="text-xl font-semibold text-white mb-3">1. Informações que Coletamos</h3>
                <p className="mb-2">Coletamos as seguintes informações:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Informações de cadastro (nome, email, perfil de estudante)</li>
                  <li>Dados de uso do aplicativo (sessões de estudo, progresso, preferências)</li>
                  <li>Informações técnicas (dispositivo, sistema operacional, versão do app)</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-3">2. Como Usamos suas Informações</h3>
                <p className="mb-2">Usamos suas informações para:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Personalizar sua experiência de aprendizado</li>
                  <li>Gerar relatórios e insights com IA</li>
                  <li>Melhorar nossos serviços e funcionalidades</li>
                  <li>Enviar notificações relevantes sobre seus estudos</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-3">3. Compartilhamento de Dados</h3>
                <p>
                  Não vendemos, comercializamos ou transferimos suas informações pessoais para terceiros, 
                  exceto quando necessário para fornecer nossos serviços ou quando exigido por lei.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-3">4. Segurança dos Dados</h3>
                <p>
                  Implementamos medidas de segurança adequadas para proteger suas informações pessoais 
                  contra acesso não autorizado, alteração, divulgação ou destruição.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-3">5. Cookies e Tecnologias Similares</h3>
                <p>
                  Utilizamos cookies e tecnologias similares para melhorar sua experiência no aplicativo, 
                  analisar padrões de uso e personalizar conteúdo.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-3">6. Seus Direitos</h3>
                <p className="mb-2">Você tem o direito de:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Acessar suas informações pessoais</li>
                  <li>Corrigir dados incorretos ou incompletos</li>
                  <li>Solicitar a exclusão de seus dados</li>
                  <li>Portabilidade de dados</li>
                  <li>Retirar o consentimento a qualquer momento</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-3">7. Retenção de Dados</h3>
                <p>
                  Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir os 
                  propósitos descritos nesta política, a menos que um período de retenção mais longo 
                  seja exigido por lei.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-3">8. Menores de Idade</h3>
                <p>
                  Nosso serviço não é direcionado a menores de 13 anos. Não coletamos intencionalmente 
                  informações pessoais de crianças menores de 13 anos.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-3">9. Alterações nesta Política</h3>
                <p>
                  Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre 
                  quaisquer alterações publicando a nova política nesta página.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-3">10. Contato</h3>
                <p>
                  Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                  <li>Email: privacidade@estudai.com.br</li>
                  <li>Telefone: (11) 9999-9999</li>
                </ul>
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

export default Privacy;
