// data/mockChecklists.ts
export interface Checklist {
  id: string;
  title: string;
  clinic: string;
  type: string;
  checkpointAmount: number;
  checkpoints?: Checkpoint[];
}

export interface Checkpoint {
  title: string;
  notes?: string;
}

// Update mock data with checkpoints
export const mockDataDetails: Checklist[] = [
  {
    id: "1",
    title: "Operating Room Setup",
    clinic: "Oslo",
    type: "Operasjonssalen",
    checkpointAmount: 4,
    checkpoints: [
      {
        title: "Steril instrumenter på plass",
        notes: "Kontroller at alle instrumenter er sterilisert"
      },
      {
        title: "Anestesimaskin kontrollert",
        notes: "Sjekk O2-nivå og trykkmåler"
      },
      {
        title: "Nødutstyr tilgjengelig",
        notes: "Defibrillator og nødmedisiner må være klart"
      },
      {
        title: "Pasientdokumentasjon klar",
      },
    ]
  }
];