export class PolicyCompareModel {
	InsuranceCompany: string;
	InsuranceCompanyStatistics: InsuranceCompanyStatistics;
	Prices: PriceModel[];

	constructor() {}
}

export interface PriceModel {
	Description: string;
	DiscountPercent: number;
	FinalPrice: FinalPrice;
	Price: FinalPrice;
	ProductId: number;
}

interface FinalPrice {
	Amount: number;
	CurrencyCode: string;
	DisplayValue: string;
}

interface InsuranceCompanyStatistics {
	MizaneShekayateMoshtariyan: number;
	ModatZamanePasokhgoieBeShekayat: number;
	RotbeyeRezayateMoshtary: number;
	SahmAzBazar: number;
	SatheTavangariyeMali: number;
	TedadeMarakezePardakhteKhesarat: number;
}
