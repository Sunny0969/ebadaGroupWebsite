import { useState, useEffect } from "react";
import "./AnalyticsDashboard.css";

interface AnalyticsData {
  totalCandidates: number;
  activeJobs: number;
  placements: number;
  employers: number;
  applicationsToday: number;
  interviewsScheduled: number;
  conversionRate: number;
  avgTimeToHire: number;
}

export default function AnalyticsDashboard() {
  const [data, setData] = useState<AnalyticsData>({
    totalCandidates: 0,
    activeJobs: 0,
    placements: 0,
    employers: 0,
    applicationsToday: 0,
    interviewsScheduled: 0,
    conversionRate: 0,
    avgTimeToHire: 0
  });

  const [timeRange, setTimeRange] = useState<"today" | "week" | "month" | "year">("month");

  useEffect(() => {
    // Simulate API call
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      setData({
        totalCandidates: 12450,
        activeJobs: 342,
        placements: 1240,
        employers: 156,
        applicationsToday: 89,
        interviewsScheduled: 23,
        conversionRate: 68.5,
        avgTimeToHire: 12.5
      });
    };
    fetchData();
  }, [timeRange]);

  const stats = [
    { label: "Total Candidates", value: data.totalCandidates.toLocaleString(), icon: "👥", color: "var(--navy)" },
    { label: "Active Jobs", value: data.activeJobs.toLocaleString(), icon: "💼", color: "var(--accent)" },
    { label: "Placements", value: data.placements.toLocaleString(), icon: "✅", color: "#10b981" },
    { label: "Active Employers", value: data.employers.toLocaleString(), icon: "🏢", color: "#3b82f6" },
    { label: "Applications Today", value: data.applicationsToday.toLocaleString(), icon: "📝", color: "#f59e0b" },
    { label: "Interviews Scheduled", value: data.interviewsScheduled.toLocaleString(), icon: "📅", color: "#8b5cf6" },
    { label: "Conversion Rate", value: `${data.conversionRate}%`, icon: "📊", color: "#ef4444" },
    { label: "Avg. Time to Hire", value: `${data.avgTimeToHire} days`, icon: "⏱️", color: "#06b6d4" },
  ];

  return (
    <div className="analytics-dashboard">
      <div className="analytics-dashboard__header">
        <h2>Analytics Dashboard</h2>
        <div className="analytics-dashboard__filters">
          {(["today", "week", "month", "year"] as const).map((range) => (
            <button
              key={range}
              className={`analytics-dashboard__filter ${timeRange === range ? "active" : ""}`}
              onClick={() => setTimeRange(range)}
            >
              {range.charAt(0).toUpperCase() + range.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="analytics-dashboard__stats">
        {stats.map((stat, index) => (
          <div key={index} className="analytics-dashboard__stat-card">
            <div className="analytics-dashboard__stat-icon" style={{ background: `${stat.color}15`, color: stat.color }}>
              {stat.icon}
            </div>
            <div className="analytics-dashboard__stat-content">
              <div className="analytics-dashboard__stat-value">{stat.value}</div>
              <div className="analytics-dashboard__stat-label">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="analytics-dashboard__charts">
        <div className="analytics-dashboard__chart">
          <h3>Application Trends</h3>
          <div className="analytics-dashboard__chart-placeholder">
            <p>Chart visualization would appear here</p>
            <p style={{ fontSize: "0.85rem", color: "var(--txt-2)" }}>Integration with Chart.js or similar library</p>
          </div>
        </div>
        <div className="analytics-dashboard__chart">
          <h3>Top Industries</h3>
          <div className="analytics-dashboard__chart-placeholder">
            <p>Chart visualization would appear here</p>
            <p style={{ fontSize: "0.85rem", color: "var(--txt-2)" }}>Integration with Chart.js or similar library</p>
          </div>
        </div>
      </div>
    </div>
  );
}
