export enum ClearanceLevel {
  RESTRICTED = 'RESTRICTED',
  CONFIDENTIAL = 'CONFIDENTIAL',
  TOP_SECRET = 'TOP SECRET',
}

export interface ServicePackage {
  id: string;
  name: string;
  codeName: string;
  price: string;
  frequency: 'Monthly' | 'Annual';
  description: string;
  features: string[];
  clearance: ClearanceLevel;
  icon: string;
}

export interface AnalysisResult {
  target: string;
  resonanceScore: number;
  anomalyDetected: boolean;
  recommendation: string;
  logs: string[];
}
