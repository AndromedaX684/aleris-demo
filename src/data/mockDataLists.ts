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
    title: "Operating Room Setup",
    clinic: "Oslo",
    type: "Operasjonssalen",
    checkpointAmount: 15
  },
  {
    id: "2",
    title: "Emergency Cart Check",
    clinic: "Trondheim",
    type: "Akuttvogn",
    checkpointAmount: 8
  },
  {
    id: "3",
    title: "Sterilization Procedure",
    clinic: "Trondheim",
    type: "Sterilisering",
    checkpointAmount: 12
  },
  {
    id: "4",
    title: "Patient Admission Process",
    clinic: "Oslo",
    type: "Pasientopptak",
    checkpointAmount: 10
  },
  {
    id: "5",
    title: "Pharmacy Inventory Audit",
    clinic: "Bergen",
    type: "Apotek",
    checkpointAmount: 20
  },
  {
    id: "6",
    title: "Safety Compliance Checklist",
    clinic: "Oslo",
    type: "Sikkerhet",
    checkpointAmount: 14
  },
  {
    id: "7",
    title: "Medical Equipment Maintenance",
    clinic: "Trondheim",
    type: "Utstyr",
    checkpointAmount: 18
  },
  {
    id: "8",
    title: "Discharge Protocol Review",
    clinic: "Bergen",
    type: "Utskrivelse",
    checkpointAmount: 9
  },
  {
    id: "9",
    title: "Ambulance Inspection",
    clinic: "Oslo",
    type: "Ambulanse",
    checkpointAmount: 7
  },
  {
    id: "10",
    title: "Ward Cleanliness Audit",
    clinic: "Trondheim",
    type: "Hygiene",
    checkpointAmount: 11
  },
  {
    id: "11",
    title: "Emergency Preparedness Drill",
    clinic: "Bergen",
    type: "Beredskap",
    checkpointAmount: 13
  },
  {
    id: "12",
    title: "Infection Control Checklist",
    clinic: "Trondheim",
    type: "Infeksjonskontroll",
    checkpointAmount: 16
  },
];

export const clinics = ["Trondheim", "Oslo", "Bergen"];