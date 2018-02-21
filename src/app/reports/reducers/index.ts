import { createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';


// import * as detailReportReport from './detail-reports-report.reducer';

export interface ReportState {
    // detailReportReport: detailReportReport.State
}

export interface FeatureState {
        'reports': ReportState;
}

export const ReportReducers = {
    // detailReportReport: detailReportReport.Reducer
};



//#region selectors

export const selectReportState = createFeatureSelector<ReportState>("reports");


//#region MonthlyReportReport selectors

// export const selectMonthlyReportReportState = createSelector(
//         selectReportState,
//         (state: ReportState) => state.monthlyReportReport
// );

// export const getMonthlyReportReportData = createSelector(
//         selectMonthlyReportReportState,
//         monthlyReportReport.getMonthlyReportReportData
// );

// export const getMonthlyReportReportStatus = createSelector(
//         selectMonthlyReportReportState,
//         monthlyReportReport.getMonthlyReportReportDataStatus
// );

//#endregion