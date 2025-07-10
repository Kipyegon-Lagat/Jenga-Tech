
import { TrendingUp, TrendingDown, Users, DollarSign, ShoppingCart, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const metrics = [
  {
    title: "Total Revenue",
    value: "KES 2,847,530",
    change: "+12.5%",
    trending: "up",
    icon: DollarSign,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "Active Users",
    value: "24,589",
    change: "+8.2%",
    trending: "up",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Total Orders",
    value: "3,247",
    change: "-3.1%",
    trending: "down",
    icon: ShoppingCart,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    title: "M-Pesa Transactions",
    value: "KES 1,856,420",
    change: "+18.7%",
    trending: "up",
    icon: Eye,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
];

export function MetricsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              {metric.title}
            </CardTitle>
            <div className={`p-2 rounded-lg ${metric.bgColor}`}>
              <metric.icon className={`w-4 h-4 ${metric.color}`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
            <div className="flex items-center mt-2">
              {metric.trending === "up" ? (
                <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
              ) : (
                <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
              )}
              <span
                className={`text-sm font-medium ${
                  metric.trending === "up" ? "text-green-600" : "text-red-600"
                }`}
              >
                {metric.change}
              </span>
              <span className="text-sm text-gray-500 ml-1">vs last month</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
