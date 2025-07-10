
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, UserPlus, Shield, Crown, Users as UsersIcon } from "lucide-react";

const Users = () => {
  const users = [
    {
      id: 1,
      name: "John Kamau",
      email: "john.kamau@email.com",
      role: "Admin",
      status: "Active",
      joinDate: "Jan 2024",
      avatar: "JK"
    },
    {
      id: 2,
      name: "Mary Wanjiku",
      email: "mary.wanjiku@email.com",
      role: "Manager",
      status: "Active",
      joinDate: "Feb 2024",
      avatar: "MW"
    },
    {
      id: 3,
      name: "David Ochieng",
      email: "david.ochieng@email.com",
      role: "User",
      status: "Inactive",
      joinDate: "Mar 2024",
      avatar: "DO"
    },
    {
      id: 4,
      name: "Grace Nyong'o",
      email: "grace.nyongo@email.com",
      role: "User",
      status: "Active",
      joinDate: "Nov 2024",
      avatar: "GN"
    },
  ];

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'Admin':
        return <Crown className="w-4 h-4 text-yellow-500" />;
      case 'Manager':
        return <Shield className="w-4 h-4 text-blue-500" />;
      default:
        return <User className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Users</h1>
            <p className="text-gray-600 mt-2">Manage user accounts and permissions</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <UserPlus className="w-4 h-4 mr-2" />
            Add User
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Total Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <UsersIcon className="w-5 h-5 text-blue-600" />
                <span className="text-2xl font-bold">1,247</span>
              </div>
              <p className="text-sm text-green-600 mt-1">+12% from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Active Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-2xl font-bold">1,189</span>
              </div>
              <p className="text-sm text-green-600 mt-1">95.3% active rate</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">New This Month</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <UserPlus className="w-5 h-5 text-purple-600" />
                <span className="text-2xl font-bold">89</span>
              </div>
              <p className="text-sm text-purple-600 mt-1">New registrations</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>User Management</CardTitle>
            <CardDescription>View and manage all user accounts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {users.map((user) => (
                <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-medium">
                      {user.avatar}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{user.name}</h3>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      {getRoleIcon(user.role)}
                      <span className="text-sm text-gray-600">{user.role}</span>
                    </div>
                    
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      user.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {user.status}
                    </span>
                    
                    <span className="text-sm text-gray-500">{user.joinDate}</span>
                    
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Users;
