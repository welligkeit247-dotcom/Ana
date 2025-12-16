import { GoogleGenAI } from "@google/genai";
import { AnalysisResult } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const analyzeTargetResonance = async (target: string, sector: 'CORPORATE' | 'GOVERNMENT'): Promise<AnalysisResult> => {
  
  const prompt = `
    Eres la IA del Sistema Central del "Complejo Lambda" (similar a la voz del traje HEV o una terminal en Half-Life).
    
    El usuario está pidiendo un "Análisis de Resonancia" de un ID de objetivo específico (que en realidad es un usuario de redes sociales: "${target}").
    
    El contexto real es que somos una agencia de marketing encubierta que manipula algoritmos. Sin embargo, disfrazamos esto como "Protección de Datos" y "Estabilización de Señal".
    
    Genera una respuesta JSON representando un escaneo del sistema.
    
    Reglas:
    1. Usa jerga científica, distópica y de alta tecnología en ESPAÑOL (ej. "Espectrómetro antimateria", "Cascada de Resonancia", "Materiales Anómalos", "Energía de Punto Cero", "Viscerador").
    2. "Resonance Score" debe estar entre 10 y 100 (representa potencial viral).
    3. "Anomaly Detected" es true si el puntaje es bajo (necesita arreglos).
    4. "Recommendation" debe sonar como un protocolo de contención pero implicar una estrategia de marketing (ej. "Desplegar inyección de cascada rápida" = Comprar anuncios/bots).
    5. "Logs" deben ser 3 líneas crípticas del sistema en ESPAÑOL.
    
    Contexto del Sector: ${sector}
    
    Retorna SOLO JSON crudo que coincida con este esquema:
    {
      "target": "${target}",
      "resonanceScore": number,
      "anomalyDetected": boolean,
      "recommendation": "string",
      "logs": ["string", "string", "string"]
    }
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json"
      }
    });

    const text = response.text;
    if (!text) throw new Error("Mal funcionamiento del sistema. Respuesta vacía.");
    
    return JSON.parse(text) as AnalysisResult;
  } catch (error) {
    console.error("Conexión con Gemini fallida", error);
    return {
      target,
      resonanceScore: 0,
      anomalyDetected: true,
      recommendation: "CONEXIÓN CORTADA. SE REQUIERE INTERVENCIÓN MANUAL.",
      logs: ["ERROR 404", "SEÑAL PERDIDA", "PROTOCOLO DE REINTENTO"]
    };
  }
};