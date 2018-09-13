import { env } from "./env";

import { UserModuleConfig } from "@soushians/user";

export class NgsUserModuleConfig implements UserModuleConfig {
	static env = env;
	static responseToUserInfo(resp$) {
		return resp$.map(function(resp) {
			return resp.Result;
		});
	}
	static mapUserDisplayName(user$) {
		return user$.map(function(user) {
			return user.DisplayName;
		});
	}
}
