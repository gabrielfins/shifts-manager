import { Hospital } from './hospital.model';
import { Medico } from './medico.model';

export interface Proposta {
  id: number;
  dataInicio: string;
  horaInicio: string;
  duracao: number;
  dataFim: string;
  horaFim: string;
  especialidade: number;
  valorPlantao: number;
  hospital: Hospital;
  medico: Medico | null;
}
