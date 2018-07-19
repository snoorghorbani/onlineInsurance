import { OrderFormModel } from './order-form.model';
import { FirePolicyOrderFormModel } from './fire-policy-order-form.model';
import { EarthquakePolicyOrderFormModel } from './earthquake-policy-order-form.model';
import { MedicalPolicyOrderFormModel } from './medical-policy-order-form.model';
import { ThirdPartyPolicyOrderFormModel } from './third-party-policy-order-form.model';
import { MotorcyclePolicyOrderFormModel } from './motorcycle-policy-order-form.model';

export type OrderFormType =
	| OrderFormModel
	| FirePolicyOrderFormModel
	| ThirdPartyPolicyOrderFormModel
	| MotorcyclePolicyOrderFormModel
	| EarthquakePolicyOrderFormModel
	| MedicalPolicyOrderFormModel;
