export interface Checklist {
  id: string;
  title: string;
  clinic: string;
  type: string;
  checkpointAmount: number;
}

export const mockDataLists: Checklist[] = [
  {
    id: "1",
    title: "Oppsett av operasjonsrom",
    clinic: "Oslo",
    type: "Operasjonssalen",
    checkpointAmount: 15,
  },
  {
    id: "2",
    title: "Sjekk av akuttmedisinsk vogn",
    clinic: "Trondheim",
    type: "Akuttvogn",
    checkpointAmount: 8,
  },
  {
    id: "3",
    title: "Steriliseringsprosedyre",
    clinic: "Trondheim",
    type: "Sterilisering",
    checkpointAmount: 12,
  },
  {
    id: "4",
    title: "Pasientinntaksprosess",
    clinic: "Oslo",
    type: "Pasientopptak",
    checkpointAmount: 10,
  },
  {
    id: "5",
    title: "Gjennomgang av apoteklager",
    clinic: "Bergen",
    type: "Apotek",
    checkpointAmount: 20,
  },
  {
    id: "6",
    title: "Sikkerhetssamsvarssjekkliste",
    clinic: "Oslo",
    type: "Sikkerhet",
    checkpointAmount: 14,
  },
  {
    id: "7",
    title: "Vedlikehold av medisinsk utstyr",
    clinic: "Trondheim",
    type: "Utstyr",
    checkpointAmount: 18,
  },
  {
    id: "8",
    title: "Gjennomgang av utskrivningsprotokoll",
    clinic: "Bergen",
    type: "Utskrivelse",
    checkpointAmount: 9,
  },
  {
    id: "9",
    title: "Ambulanseinspeksjon",
    clinic: "Oslo",
    type: "Ambulanse",
    checkpointAmount: 7,
  },
  {
    id: "10",
    title: "Hygieneaudit på sengepost",
    clinic: "Trondheim",
    type: "Hygiene",
    checkpointAmount: 11,
  },
  {
    id: "11",
    title: "Øvelse i beredskapsplan",
    clinic: "Bergen",
    type: "Beredskap",
    checkpointAmount: 13,
  },
  {
    id: "12",
    title: "Sjekkliste for infeksjonskontroll",
    clinic: "Trondheim",
    type: "Infeksjonskontroll",
    checkpointAmount: 16,
  },
];

export const clinics = ["Trondheim", "Oslo", "Bergen"];