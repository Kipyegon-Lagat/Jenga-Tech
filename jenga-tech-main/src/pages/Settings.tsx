
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings as SettingsIcon, User, Bell, Shield, Database, Palette, Globe, Download } from "lucide-react";

const Settings = () => {
  const settingsCategories = [
    {
      title: "Profile Settings",
      description: "Manage your account information and preferences",
      icon: User,
      items: [
        { name: "Personal Information", description: "Update your name, email, and contact details" },
        { name: "Password & Security", description: "Change password and security settings" },
        { name: "Account Preferences", description: "Language, timezone, and display options" },
      ]
    },
    {
      title: "Notifications",
      description: "Control how and when you receive notifications",
      icon: Bell,
      items: [
        { name: "Email Notifications", description: "Reports, alerts, and system updates" },
        { name: "Push Notifications", description: "Real-time alerts and reminders" },
        { name: "SMS Notifications", description: "Critical alerts via SMS" },
      ]
    },
    {
      title: "Security & Privacy",
      description: "Manage data privacy and security settings",
      icon: Shield,
      items: [
        { name: "Two-Factor Authentication", description: "Enable 2FA for enhanced security" },
        { name: "Session Management", description: "View and manage active sessions" },
        { name: "Data Privacy", description: "Control data sharing and privacy settings" },
      ]
    },
    {
      title: "Data Management",
      description: "Backup, export, and manage your data",
      icon: Database,
      items: [
        { name: "Data Export", description: "Download your data in various formats" },
        { name: "Backup Settings", description: "Automatic backup configuration" },
        { name: "Data Retention", description: "Set data retention policies" },
      ]
    },
  ];

  const systemSettings = [
    { name: "Theme", value: "Light Mode", icon: Palette },
    { name: "Language", value: "English (Kenya)", icon: Globe },
    { name: "Timezone", value: "East Africa Time (EAT)", icon: Globe },
    { name: "Currency", value: "Kenyan Shilling (KES)", icon: Globe },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600 mt-2">Manage your account and application preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {settingsCategories.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <category.icon className="w-6 h-6 text-blue-600" />
                    <div>
                      <CardTitle>{category.title}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                        <div>
                          <h4 className="font-medium text-gray-900">{item.name}</h4>
                          <p className="text-sm text-gray-500">{item.description}</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Configure
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <SettingsIcon className="w-5 h-5" />
                  <span>System Settings</span>
                </CardTitle>
                <CardDescription>Current system configuration</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {systemSettings.map((setting, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <setting.icon className="w-4 h-4 text-gray-500" />
                        <span className="text-sm font-medium text-gray-700">{setting.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">{setting.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common administrative tasks</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Export Data
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Database className="w-4 h-4 mr-2" />
                  Backup Settings
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Shield className="w-4 h-4 mr-2" />
                  Security Audit
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>System Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Database</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-green-600">Online</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">API Status</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-green-600">Operational</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Last Backup</span>
                    <span className="text-sm text-gray-500">2 hours ago</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
