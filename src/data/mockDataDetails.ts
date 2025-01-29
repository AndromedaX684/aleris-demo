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
    checkpointAmount: 14, // Updated to reflect the new total number of checkpoints
    checkpoints: [
      {
        title: "Steril instrumenter på plass",
        notes: "Kontroller at alle instrumenter er sterilisert",
      },
      {
        title: "Anestesimaskin kontrollert",
        notes: "Sjekk O2-nivå og trykkmåler",
      },
      {
        title: "Nødutstyr tilgjengelig",
        notes: "Defibrillator og nødmedisiner må være klart",
      },
      {
        title: "Pasientdokumentasjon klar",
      },
      // ✅ 10 Additional Dummy Checkpoints
      {
        title: "Kirurgisk team informert",
        notes: "Sørg for at alle i teamet kjenner til dagens prosedyrer",
      },
      {
        title: "Sterilt område markert",
        notes: "Sikre at det sterile området er tydelig definert",
      },
      {
        title: "Lys og utstyr testet",
        notes: "Alle lamper og kirurgiske enheter fungerer som de skal",
      },
      {
        title: "Blodforsyning sjekket",
        notes: "Bekreft at blodprodukter er tilgjengelige ved behov",
      },
      {
        title: "Kommunikasjonsutstyr testet",
        notes: "Walkie-talkie og nødtelefon fungerer korrekt",
      },
      {
        title: "Pasientposisjonering bekreftet",
        notes: "Pasienten er riktig plassert for inngrepet",
      },
      {
        title: "Sterile hansker og frakker tilgjengelig",
        notes: "Ekstra sett i tilfelle behov",
      },
      {
        title: "Temperatur og luftkvalitet sjekket",
        notes: "Sikre optimale forhold i operasjonsrommet",
      },
      {
        title: "Postoperativ overvåkning planlagt",
        notes: "Bekreft hvor pasienten skal etter inngrepet",
      },
      {
        title: "Siste gjennomgang før start",
        notes: "Teamet går gjennom siste sjekkliste før første snitt",
      },
    ],
  },
];