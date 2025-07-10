
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Calendar, TrendingUp, Users, DollarSign } from "lucide-react";

const Reports = () => {
  const reports = [
    {
      title: "Monthly Revenue Report",
      description: "Comprehensive revenue analysis for the current month",
      date: "December 2024",
      status: "Ready",
      icon: DollarSign,
    },
    {
      title: "User Growth Analysis",
      description: "User acquisition and retention metrics",
      date: "November 2024",
      status: "Ready",
      icon: Users,
    },
    {
      title: "Performance Trends",
      description: "Key performance indicators and trends",
      date: "December 2024",
      status: "Processing",
      icon: TrendingUp,
    },
    {
      title: "Quarterly Summary",
      description: "Q4 2024 business performance summary",
      date: "Q4 2024",
      status: "Draft",
      icon: Calendar,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Reports</h1>
            <p className="text-gray-600 mt-2">Generate and download business reports</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <FileText className="w-4 h-4 mr-2" />
            New Report
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reports.map((report, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <report.icon className="w-8 h-8 text-blue-600" />
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    report.status === 'Ready' ? 'bg-green-100 text-green-800' :
                    report.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {report.status}
                  </span>
                </div>
                <CardTitle className="text-lg">{report.title}</CardTitle>
                <CardDescription>{report.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{report.date}</span>
                  <Button 
                    variant="outline" 
                    size="sm"
                    disabled={report.status !== 'Ready'}
                  >
                    <Download className="w-4 h-4 mr-1" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Report Analytics</CardTitle>
            <CardDescription>Overview of report generation and downloads</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">24</div>
                <div className="text-sm text-gray-600">Reports Generated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">18</div>
                <div className="text-sm text-gray-600">Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600">3</div>
                <div className="text-sm text-gray-600">In Progress</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">12</div>
                <div className="text-sm text-gray-600">Scheduled</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Reports;
