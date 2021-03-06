/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { createSelector, createFeatureSelector } from "@ngrx/store";
import * as configList from "./config-list.reducer";
import { ConfigLoadedFailedAction } from "../actions";
/**
 * @record
 */
export function ConfigState() { }
function ConfigState_tsickle_Closure_declarations() {
    /** @type {?} */
    ConfigState.prototype.list;
}
ConfigLoadedFailedAction;
export var /** @type {?} */ ConfigReducers = {
    list: configList.Reducer
};
/**
 * @record
 */
export function FeatureState() { }
function FeatureState_tsickle_Closure_declarations() {
    /** @type {?} */
    FeatureState.prototype.configs;
}
//#region selectors
export var /** @type {?} */ selectConfigState = createFeatureSelector("config");
//#endregion
export var /** @type {?} */ getConfigListState = createSelector(selectConfigState, function (state) { return state.list; });
export var /** @type {?} */ getConfigs = createSelector(getConfigListState, configList.getConfigs);
export var /** @type {?} */ getAppConfig = createSelector(getConfigListState, configList.getAppConfig);
export var /** @type {?} */ getAuthenticationModuleConfig = createSelector(getConfigListState, configList.getAuthenticationModuleConfig);
export var /** @type {?} */ getUserModuleConfig = createSelector(getConfigListState, configList.getUserModuleConfig);
export var /** @type {?} */ getConfigModuleConfig = createSelector(getConfigListState, configList.getConfigModuleConfig);
export var /** @type {?} */ getFormModuleConfig = createSelector(getConfigListState, configList.getFormModuleConfig);
export var /** @type {?} */ getSocketModuleConfig = createSelector(getConfigListState, configList.getSocketModuleConfig);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2NvbmZpZy8iLCJzb3VyY2VzIjpbImxpYi9yZWR1Y2Vycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxxQkFBcUIsRUFBb0IsTUFBTSxhQUFhLENBQUM7QUFFdEYsT0FBTyxLQUFLLFVBQVUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsd0JBQXdCLEVBQTZCLE1BQU0sWUFBWSxDQUFDOzs7Ozs7Ozs7QUFJakYsd0JBQXdCLENBQUM7QUFDekIsTUFBTSxDQUFDLHFCQUFNLGNBQWMsR0FBRztJQUM3QixJQUFJLEVBQUUsVUFBVSxDQUFDLE9BQU87Q0FDeEIsQ0FBQzs7Ozs7Ozs7OztBQVFGLE1BQU0sQ0FBQyxxQkFBTSxpQkFBaUIsR0FBRyxxQkFBcUIsQ0FBYyxRQUFRLENBQUMsQ0FBQzs7QUFJOUUsTUFBTSxDQUFDLHFCQUFNLGtCQUFrQixHQUFHLGNBQWMsQ0FBQyxpQkFBaUIsRUFBRSxVQUFDLEtBQWtCLElBQUssT0FBQSxLQUFLLENBQUMsSUFBSSxFQUFWLENBQVUsQ0FBQyxDQUFDO0FBQ3hHLE1BQU0sQ0FBQyxxQkFBTSxVQUFVLEdBQUcsY0FBYyxDQUFDLGtCQUFrQixFQUFFLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNwRixNQUFNLENBQUMscUJBQU0sWUFBWSxHQUFHLGNBQWMsQ0FBQyxrQkFBa0IsRUFBRSxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDeEYsTUFBTSxDQUFDLHFCQUFNLDZCQUE2QixHQUFHLGNBQWMsQ0FDMUQsa0JBQWtCLEVBQ2xCLFVBQVUsQ0FBQyw2QkFBNkIsQ0FDeEMsQ0FBQztBQUNGLE1BQU0sQ0FBQyxxQkFBTSxtQkFBbUIsR0FBRyxjQUFjLENBQUMsa0JBQWtCLEVBQUUsVUFBVSxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDdEcsTUFBTSxDQUFDLHFCQUFNLHFCQUFxQixHQUFHLGNBQWMsQ0FBQyxrQkFBa0IsRUFBRSxVQUFVLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUMxRyxNQUFNLENBQUMscUJBQU0sbUJBQW1CLEdBQUcsY0FBYyxDQUFDLGtCQUFrQixFQUFFLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ3RHLE1BQU0sQ0FBQyxxQkFBTSxxQkFBcUIsR0FBRyxjQUFjLENBQUMsa0JBQWtCLEVBQUUsVUFBVSxDQUFDLHFCQUFxQixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgY3JlYXRlRmVhdHVyZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBjb25maWdMaXN0IGZyb20gXCIuL2NvbmZpZy1saXN0LnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgQ29uZmlnTG9hZGVkRmFpbGVkQWN0aW9uLCBDb25maWdMb2FkZWRTdWNjZWVkQWN0aW9uIH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuZXhwb3J0IGludGVyZmFjZSBDb25maWdTdGF0ZSB7XHJcblx0bGlzdDogY29uZmlnTGlzdC5TdGF0ZTtcclxufVxyXG5Db25maWdMb2FkZWRGYWlsZWRBY3Rpb247XHJcbmV4cG9ydCBjb25zdCBDb25maWdSZWR1Y2VycyA9IHtcclxuXHRsaXN0OiBjb25maWdMaXN0LlJlZHVjZXJcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmVhdHVyZVN0YXRlIHtcclxuXHRcImNvbmZpZ3NcIjogQ29uZmlnU3RhdGU7XHJcbn1cclxuXHJcbi8vI3JlZ2lvbiBzZWxlY3RvcnNcclxuXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RDb25maWdTdGF0ZSA9IGNyZWF0ZUZlYXR1cmVTZWxlY3RvcjxDb25maWdTdGF0ZT4oXCJjb25maWdcIik7XHJcblxyXG4vLyNlbmRyZWdpb25cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb25maWdMaXN0U3RhdGUgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RDb25maWdTdGF0ZSwgKHN0YXRlOiBDb25maWdTdGF0ZSkgPT4gc3RhdGUubGlzdCk7XHJcbmV4cG9ydCBjb25zdCBnZXRDb25maWdzID0gY3JlYXRlU2VsZWN0b3IoZ2V0Q29uZmlnTGlzdFN0YXRlLCBjb25maWdMaXN0LmdldENvbmZpZ3MpO1xyXG5leHBvcnQgY29uc3QgZ2V0QXBwQ29uZmlnID0gY3JlYXRlU2VsZWN0b3IoZ2V0Q29uZmlnTGlzdFN0YXRlLCBjb25maWdMaXN0LmdldEFwcENvbmZpZyk7XHJcbmV4cG9ydCBjb25zdCBnZXRBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZyA9IGNyZWF0ZVNlbGVjdG9yKFxyXG5cdGdldENvbmZpZ0xpc3RTdGF0ZSxcclxuXHRjb25maWdMaXN0LmdldEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnXHJcbik7XHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyTW9kdWxlQ29uZmlnID0gY3JlYXRlU2VsZWN0b3IoZ2V0Q29uZmlnTGlzdFN0YXRlLCBjb25maWdMaXN0LmdldFVzZXJNb2R1bGVDb25maWcpO1xyXG5leHBvcnQgY29uc3QgZ2V0Q29uZmlnTW9kdWxlQ29uZmlnID0gY3JlYXRlU2VsZWN0b3IoZ2V0Q29uZmlnTGlzdFN0YXRlLCBjb25maWdMaXN0LmdldENvbmZpZ01vZHVsZUNvbmZpZyk7XHJcbmV4cG9ydCBjb25zdCBnZXRGb3JtTW9kdWxlQ29uZmlnID0gY3JlYXRlU2VsZWN0b3IoZ2V0Q29uZmlnTGlzdFN0YXRlLCBjb25maWdMaXN0LmdldEZvcm1Nb2R1bGVDb25maWcpO1xyXG5leHBvcnQgY29uc3QgZ2V0U29ja2V0TW9kdWxlQ29uZmlnID0gY3JlYXRlU2VsZWN0b3IoZ2V0Q29uZmlnTGlzdFN0YXRlLCBjb25maWdMaXN0LmdldFNvY2tldE1vZHVsZUNvbmZpZyk7XHJcbiJdfQ==