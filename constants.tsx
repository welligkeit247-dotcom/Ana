import { ServicePackage, ClearanceLevel } from './types';

export const PACKAGES: ServicePackage[] = [
  {
    id: 'p1',
    name: 'Estabilización de Señal',
    codeName: 'PROTOCOLO: ECO',
    price: '$2,500',
    frequency: 'Monthly',
    description: 'Corrección algorítmica básica para entidades experimentando decaimiento de alcance.',
    features: [
      'Monitoreo de Frecuencia (24/7)',
      'Amplificación de Señal (Bots/Boost)',
      'Detección de Anomalías',
      'Encriptación de Datos',
      'Registros Básicos de Reporte'
    ],
    clearance: ClearanceLevel.RESTRICTED,
    icon: 'activity'
  },
  {
    id: 'p2',
    name: 'Control de Resonancia',
    codeName: 'PROTOCOLO: CASCADA',
    price: '$8,000',
    frequency: 'Monthly',
    description: 'Dominio de espectro completo para entidades corporativas que requieren saturación de mercado.',
    features: [
      'Análisis de Sector Profundo',
      'Interferencia de Señal Competidora',
      'Anulación de Algoritmo',
      'Equipo de Contención de Crisis',
      'Equipo Científico Dedicado (5 Agentes)'
    ],
    clearance: ClearanceLevel.CONFIDENTIAL,
    icon: 'lock'
  },
  {
    id: 'p3',
    name: 'Gobernanza Overwatch',
    codeName: 'PROTOCOLO: CIUDADELA',
    price: '$300,000',
    frequency: 'Annual',
    description: 'Infraestructura estatal para gestión de percepción regional.',
    features: [
      'Conciencia Total de Información',
      'Manipulación de Sentimiento Regional',
      'Acceso Infraestructura Clase 5 (20+ Agentes)',
      'Interfaz Neuronal/Algo Directa',
      'Paraísos de Datos Offshore'
    ],
    clearance: ClearanceLevel.TOP_SECRET,
    icon: 'shield'
  }
];

export const NAV_LINKS = [
  { name: 'SECTOR C', href: '#sector-c' },
  { name: 'NIVELES DE ACCESO', href: '#pricing' },
  { name: 'SIMULACIÓN', href: '#demo' },
  { name: 'ENLACE', href: '#contact' },
];