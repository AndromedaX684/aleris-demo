export type Vaccine = {
	id: number;
	name: string;
	manufacturer: string;
	dose: string;
	fhiLink: string;
	notes: string;
	injectionTechnique: string;
	price: string;
	interval: string;
	duration: string;
};

// Expanded Vaccine List
export const mockVaccines: Vaccine[] = [
	{
		id: 1,
		name: "Gulfeber",
		manufacturer: "Stamaril",
		dose: "1 dose",
		fhiLink:
			"https://www.fhi.no/va/vaksinasjonshandboka/vaksiner-mot-de-enkelte-sykdommene/gulfebervaksinasjon/?term=",
		notes:
			"• Må tas senest 10 dager før avreise\n• Levende vaksine\n• MÅ få vaksinekort for gulfeber med stempel og underskrift",
		injectionTechnique: "i.m",
		price: "kr380.00",
		interval: "-",
		duration: "Livslang beskyttelse",
	},
	{
		id: 2,
		name: "Tyfoidfeber",
		manufacturer: "Typhim VI",
		dose: "1 dose",
		fhiLink:
			"https://www.fhi.no/va/vaksinasjonshandboka/vaksiner-mot-de-enkelte-sykdommene/tyfoidvaksinasjon/?term=#tyfoidvaksiner",
		notes:
			"• Anbefales minst 2 uker før avreise\n• Smitter fra person til person, dårlig hygiene, forurenset vann/mat.",
		injectionTechnique: "i.m eller s.c",
		price: "kr236.00",
		interval: "-",
		duration: "3 år",
	},
	{
		id: 3,
		name: "Skogflåttencefalitt / TBE",
		manufacturer: "Ticovac",
		dose: "3 doser",
		fhiLink:
			"https://www.fhi.no/va/vaksinasjonshandboka/vaksiner-mot-de-enkelte-sykdommene/skogflattencefalittvaksinasjon/?term=",
		notes:
			"• 3 dose kan gis ved behov for lengre beskyttelse\n• Ved 2 doser kan mer enn 90% forvente beskyttelse for nåværende flåttsesong\n• Sykdommen smitter ikke mellom mennesker\n• Beskytter ikke mot borrelia",
		injectionTechnique: "i.m",
		price: "kr369.00",
		interval:
			"- 1-3 måneders\n- Intervallet mellom 1. og 2. dose kan reduseres til 14 dager hvis det er behov for rask beskyttelse.",
		duration: "2 doser gir varigheten for sesongen",
	},
	{
		id: 4,
		name: "Difteri, stivkrampe, kikhoste og polio",
		manufacturer: "Repevax",
		dose: "1 dose",
		fhiLink:
			"https://www.fhi.no/va/barnevaksinasjonsprogrammet/vaksinene-i-barnevaksinasjonsprogrammet/vaksine-mot-difteri-stivkrampe-kikhoste-og-poliomyelitt/",
		notes: "• Anbefalt hvert 10 år\n• IKKE grunnvaksine, kun oppfriskning",
		injectionTechnique: "i.m",
		price: "kr336.00",
		interval: "-",
		duration: "10 år",
	},
	{
		id: 5,
		name: "Denguefeber",
		manufacturer: "Qdenga",
		dose: "2 doser",
		fhiLink:
			"https://www.fhi.no/va/vaksinasjonshandboka/vaksiner-mot-de-enkelte-sykdommene/denguefeber/?term=",
		notes:
			"• Anbefalt senest 3 uker før avreise\n• Levende vaksine\n• 1 dose gir 80% beskyttelse, om man ikke rekker to doser er 1. før reise likevel bedre enn ingen\n• Ved flere vaksiner må denne settes alene / i annen arm\n• Anbefal DEET myggmiddel",
		injectionTechnique: "s.c",
		price: "kr977.00",
		interval: "3 måneder mellom dosene",
		duration: "-",
	},
	{
		id: 6,
		name: "Japansk Encefalitt",
		manufacturer: "Ixiaro",
		dose: "2 doser",
		fhiLink:
			"https://www.fhi.no/va/vaksinasjonshandboka/vaksiner-mot-de-enkelte-sykdommene/japansk-encefalittvaksinasjon/?term=",
		notes:
			"• Anbefal DEET myggmiddel\n• Bør settes minst én uke før avreise\n• Kan settes i kortere intervall ved tidsnød",
		injectionTechnique: "i.m",
		price: "kr892.00",
		interval: "28 dager",
		duration:
			"2 doser gir beskyttelse i minst 1 år. Boosterdose kan gis etter 12-24 måneder ved behov for lengre beskyttelse",
	},
	{
		id: 7,
		name: "Rabies",
		manufacturer: "Rabipur",
		dose: "2 doser",
		fhiLink:
			"https://www.fhi.no/va/vaksinasjonshandboka/vaksiner-mot-de-enkelte-sykdommene/rabiesvaksinasjon/?term=",
		notes: "-",
		injectionTechnique: "i.m",
		price: "kr815.00",
		interval: "Minimum 7 dager",
		duration: "Vurdering",
	},
	{
		id: 8,
		name: "Hepatitt A",
		manufacturer: "Havrix",
		dose: "2 doser",
		fhiLink:
			"https://www.fhi.no/va/vaksinasjonshandboka/vaksiner-mot-de-enkelte-sykdommene/hepatitt-a-vaksinasjon-og-normalt-immunglobulin/?term=",
		notes: "• Anbefales 1 måned før avreise.",
		injectionTechnique: "i.m",
		price: "kr308.00",
		interval: "Dose to tidligst etter 6. måneder.",
		duration: "1. dose = 1 år, 2. doser = flere tiår",
	},
	{
		id: 9,
		name: "Hepatitt B",
		manufacturer: "Engerix",
		dose: "3 doser",
		fhiLink:
			"https://www.fhi.no/va/vaksinasjonshandboka/vaksiner-mot-de-enkelte-sykdommene/hepatitt-b-vaksinasjon-og-immunglobulin/?term=",
		notes:
			"• Ved behov for rask beskyttelse kan et hurtigintervall benyttes: dag 0, dag 7 og dag 21. En fjerde dose anbefales etter 12 måneder.",
		injectionTechnique: "i.m",
		price: "kr266.00",
		interval:
			"Dose 2 tidligst 1 mnd etter første dose, og dose 3 tidligst 6 måneder etter første dose.",
		duration:
			"Etter fullvaksinasjon har man sannsynligvis livslang beskyttelse",
	},
];
