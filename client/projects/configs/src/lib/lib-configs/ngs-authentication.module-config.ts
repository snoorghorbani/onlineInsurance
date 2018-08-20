import { env } from "./env";
import { of } from "rxjs";

export class NgsAuthenticationModuleConfig {
	static env = env;
	static afterSignoutRedirectTo = "/";
	static signupValidator = value => {
		return of(value.Password == value.PasswordConfirm);
	};
}
