export interface FieldModel {
	Value: any;
	DisplayValue: string;
	Description: string;
	Label: string;
	Name: string;
	Options: FieldOptionModel[];
	SequenceIndex: number;
	Status: number;
	ExtensionData: any;
}

export interface FieldOptionModel {
	DisplayValue?: string;
	DisplayName?: string;
	Value: number | string | boolean;
}
