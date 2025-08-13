"use client";

import AdminLayout from "../../components/admin-layout";
import { AuthProvider } from "../../components/auth-provider";
import { useEffect, useState } from "react";
import { MapPin, Users, Images, TrendingUp } from "lucide-react";

interface DashboardStats {
  destinations: number;
  totalImages: number;
  publishedDestinations: number;
  draftDestinations: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    destinations: 0,
    totalImages: 0,
    publishedDestinations: 0,
    draftDestinations: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch("/api/admin/stats");
        if (response.ok) {
          const data = await response.json();
          setStats(data);
        }
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    {
      title: "Total Destinations",
      value: stats.destinations,
      icon: MapPin,
      color: "bg-blue-500",
    },
    {
      title: "Published",
      value: stats.publishedDestinations,
      icon: TrendingUp,
      color: "bg-green-500",
    },
    {
      title: "Drafts",
      value: stats.draftDestinations,
      icon: Users,
      color: "bg-yellow-500",
    },
    {
      title: "Total Images",
      value: stats.totalImages,
      icon: Images,
      color: "bg-purple-500",
    },
  ];

  return (
    <AuthProvider>
      <AdminLayout title="Dashboard">
        <div className="space-y-6">
          {/* Welcome Header */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Welcome to Ceylon Wanderer Admin
            </h1>
            <p className="text-gray-600">
              Manage your destinations, content, and images from this dashboard.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statCards.map((card, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{card.title}</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {loading ? "..." : card.value}
                    </p>
                  </div>
                  <div className={`${card.color} rounded-full p-3`}>
                    <card.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a
                href="/admin/destinations/new"
                className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <MapPin className="w-8 h-8 text-primary mr-3" />
                <div>
                  <h3 className="font-medium text-gray-900">Add New Destination</h3>
                  <p className="text-sm text-gray-600">Create a new travel destination</p>
                </div>
              </a>
              
              <a
                href="/admin/destinations"
                className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <TrendingUp className="w-8 h-8 text-green-500 mr-3" />
                <div>
                  <h3 className="font-medium text-gray-900">Manage Destinations</h3>
                  <p className="text-sm text-gray-600">Edit existing destinations</p>
                </div>
              </a>
              
              <a
                href="/admin/images"
                className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Images className="w-8 h-8 text-purple-500 mr-3" />
                <div>
                  <h3 className="font-medium text-gray-900">Manage Images</h3>
                  <p className="text-sm text-gray-600">Upload and organize images</p>
                </div>
              </a>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
            <div className="space-y-3">
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Database migration completed</p>
                  <p className="text-xs text-gray-600">Destinations successfully migrated to PostgreSQL</p>
                </div>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Admin panel initialized</p>
                  <p className="text-xs text-gray-600">Admin authentication system set up</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    </AuthProvider>
  );
}
