export interface JobListing {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Vollzeit' | 'Teilzeit' | 'Projektbasis';
  salary: string;
  description: string;
  postedDate: string;
}

export interface GeoLocation {
  city: string;
  state: string;
  zip: string;
}

export enum AssistantState {
  IDLE = 'IDLE',
  CONNECTING = 'CONNECTING',
  LISTENING = 'LISTENING',
  SPEAKING = 'SPEAKING',
  ERROR = 'ERROR'
}
