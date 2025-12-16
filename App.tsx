import React, { useState } from 'react';
import { PACKAGES, NAV_LINKS } from './constants';
import { PricingCard } from './components/PricingCard';
import { Analyzer } from './components/Analyzer';
import { Radiation, Terminal as TerminalIcon, Shield, Globe, Cpu, Mail, Phone, Lock, Copy, Check } from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, setter: (val: boolean) => void) => {
    navigator.clipboard.writeText(text).then(() => {
      setter(true);
      setTimeout(() => setter(false), 2000);
    }).catch(err => {
      console.error('Error al copiar: ', err);
    });
  };

  return (
    <div className="min-h-screen bg-hl-dark text-hl-text font-sans selection:bg-hl-orange selection:text-black overflow-x-hidden">
      <div className="scanline"></div>
      
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-hl-dark/90 backdrop-blur border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 border-2 border-hl-orange rounded-full flex items-center justify-center">
                <span className="font-mono font-bold text-hl-orange text-lg">λ</span>
              </div>
              <span className="font-mono text-white tracking-widest font-bold uppercase hidden sm:block">
                WELLigLIFE
              </span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="font-mono text-xs uppercase tracking-widest text-gray-400 hover:text-hl-orange transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="md:hidden">
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-hl-orange">
                    <TerminalIcon />
                </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
             <div className="md:hidden bg-black border-b border-hl-orange">
                {NAV_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 font-mono text-xs uppercase text-gray-400 hover:bg-gray-900 hover:text-hl-orange border-b border-gray-800"
                >
                  {link.name}
                </a>
              ))}
             </div>
        )}
      </header>

      {/* Hero Section - Sector C */}
      <section id="sector-c" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-grid-pattern overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <div className="absolute top-20 right-20 w-96 h-96 bg-hl-orange rounded-full blur-[120px]"></div>
            <div className="absolute bottom-20 left-20 w-64 h-64 bg-gray-600 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-1 border border-hl-orange/30 bg-hl-orange/5 text-hl-orange font-mono text-xs tracking-[0.2em] uppercase">
                Contención y Propagación de Datos Segura
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                CONTROLA LA <span className="text-hl-orange">RESONANCIA</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-gray-400 font-mono mb-10 leading-relaxed">
                Proveemos manejo de materiales anómalos para ecosistemas digitales.
                Nuestra infraestructura asegura que tu señal permanezca dominante en el ruido.
                Indetectable. Absoluto.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="#demo" className="px-8 py-4 bg-hl-orange text-black font-bold font-mono uppercase tracking-widest hover:bg-orange-400 transition-colors clip-path-polygon">
                    Iniciar Análisis
                </a>
                <a href="#services" className="px-8 py-4 border border-gray-600 text-gray-300 font-mono uppercase tracking-widest hover:border-white hover:text-white transition-colors">
                    Acceder a Protocolos
                </a>
            </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="services" className="py-20 bg-black/50 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 border border-gray-800 hover:border-hl-orange/50 transition-colors group">
                    <Globe className="w-8 h-8 text-gray-600 group-hover:text-hl-orange mb-4" />
                    <h3 className="text-xl font-mono text-white mb-2">Infraestructura Global</h3>
                    <p className="text-gray-500 text-sm">
                        20+ agentes activos operando en paraísos de datos offshore (Sector 17).
                        Nodos descentralizados aseguran cero tiempo de inactividad y negación total.
                    </p>
                </div>
                <div className="p-6 border border-gray-800 hover:border-hl-orange/50 transition-colors group">
                    <Shield className="w-8 h-8 text-gray-600 group-hover:text-hl-orange mb-4" />
                    <h3 className="text-xl font-mono text-white mb-2">Protección de Imagen</h3>
                    <p className="text-gray-500 text-sm">
                        Contención proactiva de anomalías de sentimiento negativo.
                        Reescribimos la narrativa antes de que ocurra el evento en cascada.
                    </p>
                </div>
                <div className="p-6 border border-gray-800 hover:border-hl-orange/50 transition-colors group">
                    <Cpu className="w-8 h-8 text-gray-600 group-hover:text-hl-orange mb-4" />
                    <h3 className="text-xl font-mono text-white mb-2">Inyección Algorítmica</h3>
                    <p className="text-gray-500 text-sm">
                        Interfaz directa con variables de grafos sociales.
                        No solo predecimos el algoritmo; lo administramos.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* Analyzer Demo Section */}
      <section id="demo" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
                <Radiation className="w-12 h-12 text-hl-orange mx-auto mb-4 animate-spin-slow" />
                <h2 className="text-3xl font-mono text-white uppercase tracking-widest">Simulación del Sistema</h2>
                <p className="text-gray-500 font-mono mt-2">Prueba la integridad de tu huella digital actual.</p>
            </div>
            <Analyzer />
          </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-mono text-white uppercase tracking-widest mb-4">Niveles de Autorización</h2>
            <p className="text-gray-500 max-w-xl mx-auto font-mono text-sm">
                Solo personal autorizado. Selecciona el protocolo que coincida con tus requisitos de contención.
                Contratos Corporativos y Gubernamentales disponibles.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {PACKAGES.map((pkg) => (
              <PricingCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black relative border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border border-hl-orange/20 bg-gray-900/50 p-8 backdrop-blur">
                <div className="flex items-center gap-4 mb-6">
                    <Lock className="w-6 h-6 text-hl-orange" />
                    <h2 className="text-2xl font-mono text-white uppercase tracking-widest">Enlace Seguro</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Email Block */}
                    <div className="flex items-center justify-between p-4 border border-gray-700 hover:border-hl-orange/50 transition-colors group">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-black border border-gray-800">
                                <Mail className="w-5 h-5 text-gray-400" />
                            </div>
                            <div className="overflow-hidden">
                                <span className="block text-xs font-mono text-gray-500 uppercase">Correo Encriptado</span>
                                <span className="font-mono text-hl-orange text-sm md:text-base break-all">Welligkeit247@gmail.com</span>
                            </div>
                        </div>
                        <button 
                            onClick={() => copyToClipboard("Welligkeit247@gmail.com", setCopiedEmail)}
                            className="ml-2 p-2 text-gray-500 hover:text-hl-orange hover:bg-white/5 rounded transition-all"
                            title="Copiar al portapapeles"
                        >
                            {copiedEmail ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                        </button>
                    </div>

                    {/* Phone Block */}
                    <div className="flex items-center justify-between p-4 border border-gray-700 hover:border-hl-orange/50 transition-colors group">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-black border border-gray-800">
                                <Phone className="w-5 h-5 text-gray-400" />
                            </div>
                            <div>
                                <span className="block text-xs font-mono text-gray-500 uppercase">Línea de Voz Segura</span>
                                <span className="font-mono text-hl-orange text-sm md:text-base">2616615671</span>
                            </div>
                        </div>
                        <button 
                            onClick={() => copyToClipboard("2616615671", setCopiedPhone)}
                            className="ml-2 p-2 text-gray-500 hover:text-hl-orange hover:bg-white/5 rounded transition-all"
                            title="Copiar al portapapeles"
                        >
                            {copiedPhone ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
                <p className="mt-6 text-xs text-gray-600 font-mono text-center">
                    // NOTA: TODAS LAS COMUNICACIONES ESTÁN ENCRIPTADAS DE PUNTA A PUNTA. NO REVELE DETALLES DE LA OPERACIÓN EN LÍNEAS NO SEGURAS.
                </p>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
                <span className="font-mono text-gray-600 text-xs">
                    © 2024 WELLigLIFE SYSTEMS. TODOS LOS DERECHOS RESERVADOS.
                </span>
            </div>
            <div className="flex gap-6 font-mono text-xs text-gray-600">
                <a href="#" className="hover:text-hl-orange">PRIVACIDAD DE DATOS</a>
                <a href="#" className="hover:text-hl-orange">COMITÉ DE ÉTICA</a>
                <a href="#" className="hover:text-hl-orange">PORTAL DE EMPLEADOS</a>
            </div>
        </div>
      </footer>
    </div>
  );
}