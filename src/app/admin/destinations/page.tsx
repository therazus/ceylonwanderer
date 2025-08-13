"use client";

import AdminLayout from "../../components/admin-layout";
import { AuthProvider } from "../../components/auth-provider";
import { useEffect, useState } from "react";
import { MapPin, Edit, Eye, Trash2, Plus } from "lucide-react";
import Link from "next/link";

interface Destination {
  id: string;
  slug: string;
  status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
  createdAt: string;
  updatedAt: string;
  content: {
    language: "EN" | "DE";
    name: string;
    description: string;
  }[];
  _count: {
    images: number;
    tourPlans: number;
    thingsToDo: number;
  };
}

export default function DestinationsPage() {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch("/api/admin/destinations");
        if (response.ok) {
          const data = await response.json();
          setDestinations(data);
        } else {
          setError("Failed to fetch destinations");
        }
      } catch (error) {
        console.error("Error fetching destinations:", error);
        setError("Error loading destinations");
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  const getStatusBadge = (status: string) => {
    const statusStyles = {
      DRAFT: "bg-yellow-100 text-yellow-800",
      PUBLISHED: "bg-green-100 text-green-800",
      ARCHIVED: "bg-gray-100 text-gray-800",
    };

    return (
      <span
        className={`px-2 py-1 text-xs font-medium rounded-full ${
          statusStyles[status as keyof typeof statusStyles]
        }`}
      >
        {status}
      </span>
    );
  };

  const getDestinationName = (content: Destination["content"]) => {
    const englishContent = content.find((c) => c.language === "EN");
    return englishContent?.name || content[0]?.name || "Untitled";
  };

  if (loading) {
    return (
      <AuthProvider>
        <AdminLayout title="Destinations">
          <div className="flex items-center justify-center h-64">
            <div className="text-gray-500">Loading destinations...</div>
          </div>
        </AdminLayout>
      </AuthProvider>
    );
  }

  if (error) {
    return (
      <AuthProvider>
        <AdminLayout title="Destinations">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="text-red-800">{error}</div>
          </div>
        </AdminLayout>
      </AuthProvider>
    );
  }

  return (
    <AuthProvider>
      <AdminLayout title="Destinations">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">
                Manage your travel destinations and content
              </p>
            </div>
            <Link
              href="/admin/destinations/new"
              className="bg-primary text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-primary/90 transition-colors"
            >
              <Plus className="w-4 h-4" />
              Add Destination
            </Link>
          </div>

          {/* Destinations Table */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Destination
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Content
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Updated
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {destinations.map((destination) => (
                  <tr key={destination.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <MapPin className="w-5 h-5 text-gray-400 mr-3" />
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {getDestinationName(destination.content)}
                          </div>
                          <div className="text-sm text-gray-500">
                            /{destination.slug}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(destination.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="space-y-1">
                        <div>{destination._count.images} images</div>
                        <div>{destination._count.tourPlans} tour plans</div>
                        <div>{destination._count.thingsToDo} activities</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(destination.updatedAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/destinations/${destination.slug}`}
                          target="_blank"
                          className="text-gray-400 hover:text-gray-600"
                          title="View public page"
                        >
                          <Eye className="w-4 h-4" />
                        </Link>
                        <Link
                          href={`/admin/destinations/${destination.id}/edit`}
                          className="text-primary hover:text-primary/80"
                          title="Edit destination"
                        >
                          <Edit className="w-4 h-4" />
                        </Link>
                        <button
                          className="text-red-400 hover:text-red-600"
                          title="Delete destination"
                          onClick={() => {
                            if (confirm("Are you sure you want to delete this destination?")) {
                              // TODO: Implement delete functionality
                            }
                          }}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {destinations.length === 0 && (
              <div className="text-center py-12">
                <MapPin className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No destinations yet
                </h3>
                <p className="text-gray-500 mb-4">
                  Get started by creating your first destination.
                </p>
                <Link
                  href="/admin/destinations/new"
                  className="bg-primary text-white px-4 py-2 rounded-lg inline-flex items-center gap-2 hover:bg-primary/90 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Add First Destination
                </Link>
              </div>
            )}
          </div>
        </div>
      </AdminLayout>
    </AuthProvider>
  );
}
