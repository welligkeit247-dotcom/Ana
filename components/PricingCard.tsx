import React from 'react';
import { ServicePackage, ClearanceLevel } from '../types';
import { Check, ShieldAlert, Lock, Activity, Wallet, CreditCard, MessageCircle, Info } from 'lucide-react';

interface PricingCardProps {
  pkg: ServicePackage;
}

export const PricingCard: React.FC<PricingCardProps> = ({ pkg }) => {
  const isTopSecret = pkg.clearance === ClearanceLevel.TOP_SECRET;

  // Configuración de WhatsApp
  const phoneNumber = "5492616615671"; // Formato internacional para Argentina
  const message = `Saludos WELLigLIFE. Solicito información y acceso para adquirir el servicio: ${pkg.codeName} - ${pkg.name}. Quedo a la espera de instrucciones de pago.`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Lógica de colores y estilos basada en el precio/nivel (Verde -> Naranja -> Rojo)
  const getThemeStyles = () => {
    switch (pkg.clearance) {
      case ClearanceLevel.RESTRICTED: // Barato - Verde
        return {
          icon: <Activity className="w-6 h-6 text-green-500" />,
          title: "Monitor de Signos Vitales HEV",
          borderColor: "border-green-900 hover:border-green-500/50",
          priceColor: "text-green-500",
          checkBase: "text-green-800",
          checkHover: "group-hover/feature:text-green-400",
          textHover: "group-hover/feature:text-green-100 group-hover/feature:drop-shadow-[0_0_5px_rgba(74,222,128,0.8)]",
          buttonClass: "border-green-900 text-green-700 hover:border-green-500 hover:text-green-400 hover:bg-green-900/20"
        };
      case ClearanceLevel.CONFIDENTIAL: // Intermedio - Naranja
        return {
          icon: <Lock className="w-6 h-6 text-hl-orange" />,
          title: "Acceso de Seguridad Nivel 3",
          borderColor: "border-orange-900/50 hover:border-hl-orange/50",
          priceColor: "text-hl-orange",
          checkBase: "text-orange-800",
          checkHover: "group-hover/feature:text-orange-400",
          textHover: "group-hover/feature:text-orange-100 group-hover/feature:drop-shadow-[0_0_5px_rgba(255,148,0,0.8)]",
          buttonClass: "border-orange-900 text-orange-700 hover:border-hl-orange hover:text-hl-orange hover:bg-orange-900/20"
        };
      case ClearanceLevel.TOP_SECRET: // Caro - Rojo
        return {
          icon: <ShieldAlert className="w-6 h-6 text-red-600 animate-pulse" />,
          title: "Alerta de Protección Civil",
          borderColor: "border-red-900 hover:border-red-600",
          priceColor: "text-red-600",
          checkBase: "text-red-900",
          checkHover: "group-hover/feature:text-red-500",
          textHover: "group-hover/feature:text-red-100 group-hover/feature:drop-shadow-[0_0_8px_rgba(220,38,38,0.9)]",
          buttonClass: "bg-red-900/10 border-red-800 text-red-600 hover:bg-red-600 hover:text-black hover:border-red-500 font-bold"
        };
      default:
        return {
          icon: <Info className="w-6 h-6 text-blue-400" />,
          title: "Información del Sistema",
          borderColor: "border-gray-700",
          priceColor: "text-white",
          checkBase: "text-gray-600",
          checkHover: "group-hover/feature:text-white",
          textHover: "group-hover/feature:text-white",
          buttonClass: "border-gray-600 text-gray-400"
        };
    }
  };

  const theme = getThemeStyles();

  return (
    <div className={`relative group border ${theme.borderColor} bg-hl-dark/90 backdrop-blur-sm p-6 flex flex-col hover:bg-black transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]`}>
      {isTopSecret && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-600 text-black px-3 py-1 text-xs font-bold font-mono tracking-widest uppercase shadow-[0_0_10px_rgba(220,38,38,0.6)]">
          Acceso de Administrador
        </div>
      )}
      
      <div className="flex justify-between items-start mb-6 border-b border-gray-800 pb-4">
        <div>
          <h3 className={`text-xl font-bold font-mono uppercase tracking-widest ${theme.priceColor}`}>
            {pkg.codeName}
          </h3>
          <p className="text-xs text-gray-500 mt-1 font-mono">{pkg.name}</p>
        </div>
        <div className="p-2 border border-gray-800 rounded-sm bg-black/40 shadow-inner" title={theme.title}>
          {theme.icon}
        </div>
      </div>

      <div className="mb-6">
        <span className={`text-3xl font-mono font-bold ${theme.priceColor} drop-shadow-md`}>{pkg.price}</span>
        <span className="text-gray-600 text-sm font-mono"> / {pkg.frequency === 'Monthly' ? 'Mensual' : 'Anual'}</span>
      </div>

      <div className="flex-grow space-y-3 mb-8">
        {pkg.features.map((feature, i) => (
          <div key={i} className="flex items-start group/feature cursor-default p-1 -ml-1 rounded hover:bg-white/5 transition-colors duration-300">
            <Check className={`w-4 h-4 mt-1 mr-3 flex-shrink-0 transition-colors duration-300 ${theme.checkBase} ${theme.checkHover}`} />
            <span className={`text-sm text-gray-400 font-mono transition-all duration-300 ${theme.textHover}`}>
              {feature}
            </span>
          </div>
        ))}
      </div>

      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full py-3 border font-mono uppercase tracking-wider text-sm transition-all duration-300 mb-4 flex items-center justify-center gap-2 ${theme.buttonClass}`}>
        <MessageCircle className="w-4 h-4" />
        Iniciar Protocolo
      </a>
      
      <div className="border-t border-gray-800 pt-4">
        <div className="flex items-center justify-between text-[10px] text-gray-600 font-mono uppercase">
            <div className="flex items-center gap-1 group/wallet cursor-help" title="Se acepta Phantom Wallet">
                <Wallet className="w-3 h-3 text-gray-500 group-hover/wallet:text-hl-orange transition-colors" />
                <span className="group-hover/wallet:text-gray-300 transition-colors">Phantom</span>
            </div>
             <div className="flex items-center gap-1 group/card cursor-help" title="Billeteras Regionales (ARG) Aceptadas">
                <CreditCard className="w-3 h-3 text-gray-500 group-hover/card:text-blue-400 transition-colors" />
                <span className="group-hover/card:text-gray-300 transition-colors">Billeteras (ARG)</span>
            </div>
        </div>
      </div>
      
      <div className="mt-2 text-[10px] text-gray-800 font-mono text-center selection:bg-none">
        AUTORIZACIÓN: {pkg.clearance}
      </div>
    </div>
  );
};