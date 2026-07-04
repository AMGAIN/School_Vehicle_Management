import { Injectable } from '@nestjs/common';

@Injectable()
export class ReportAnalyticsService {
    getReportSummary() {
        return [
            {
                title: "Avg Attendance",
                value: "94.3%",
                trend: "+2.1% vs last month",

            },
            {
                title: "On-Time Rate",
                value: "85.8%",
                trend: "+5.2% vs last month",
            },
            {
                title: "Avg Delay (min)",
                value: "5.2",
                trend: "-1.3 vs last month",
            },
            {
                title: "Total Trips",
                value: "1,245",
                trend: "This month",
            },
        ];
    }
}
