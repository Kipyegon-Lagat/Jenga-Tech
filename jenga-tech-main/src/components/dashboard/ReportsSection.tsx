
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Eye, Calendar } from "lucide-react";

const reports = [
  {
    title: "M-Pesa Transaction Report",
    description: "Monthly mobile money transaction analysis",
    status: "Ready",
    lastUpdated: "2 hours ago",
    size: "3.2 MB",
    type: "PDF"
  },
  {
    title: "Nairobi Sales Analytics",
    description: "Regional sales performance and customer insights",
    status: "Processing",
    lastUpdated: "5 minutes ago",
    size: "2.1 MB",
    type: "Excel"
  },
  {
    title: "KES Financial Summary",
    description: "Revenue and expense breakdown in Kenyan Shillings",
    status: "Ready",
    lastUpdated: "1 day ago",
    size: "1.4 MB",
    type: "PDF"
  },
  {
    title: "Agricultural Sector Performance",
    description: "Farm-to-market supply chain analysis",
    status: "Ready",
    lastUpdated: "3 hours ago",
    size: "4.1 MB",
    type: "PowerPoint"
  },
];

export function ReportsSection() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-gray-900">
            Recent Reports
          </CardTitle>
          <Button variant="outline" size="sm">
            <FileText className="w-4 h-4 mr-2" />
            Generate Report
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {reports.map((report, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{report.title}</h3>
                  <p className="text-sm text-gray-500">{report.description}</p>
                  <div className="flex items-center space-x-4 mt-2">
                    <Badge 
                      variant={report.status === "Ready" ? "default" : "secondary"}
                      className={report.status === "Ready" ? "bg-green-100 text-green-700" : ""}
                    >
                      {report.status}
                    </Badge>
                    <span className="text-xs text-gray-400 flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {report.lastUpdated}
                    </span>
                    <span className="text-xs text-gray-400">{report.size}</span>
                    <span className="text-xs text-gray-400">{report.type}</span>
                  </div>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button variant="ghost" size="sm">
                  <Eye className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" disabled={report.status !== "Ready"}>
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
