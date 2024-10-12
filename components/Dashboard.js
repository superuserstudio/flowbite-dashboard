import React from 'react'
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend 
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { 
  Bell, 
  Search, 
  ChevronDown, 
  LayoutDashboard, 
  FileText, 
  ShoppingCart, 
  MessageSquare, 
  Lock, 
  FileQuestion, 
  Boxes, 
  HelpCircle,
  Plus,
  Filter,
  Download,
  MoreHorizontal
} from 'lucide-react'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const inventoryData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      data: [1400, 2000, 2000, 2500, 1300, 1800, 2100],
      backgroundColor: '#8b5cf6',
    },
  ],
}

const inventoryOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        color: '#374151',
      },
      ticks: {
        callback: (value) => value / 1000 + 'k',
      },
    },
  },
}

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-gray-800">
        <div className="flex h-16 items-center justify-center">
          <div className="text-2xl font-bold text-blue-500">Logo</div>
        </div>
        <nav className="mt-5 px-3">
          <a href="#" className="flex items-center px-2 py-2 text-base font-medium rounded-md bg-gray-900 text-white">
            <LayoutDashboard className="mr-4 h-6 w-6" />
            Overview
          </a>
          <a href="#" className="flex items-center px-2 py-2 mt-1 text-base font-medium rounded-md text-gray-300 hover:bg-gray-700">
            <FileText className="mr-4 h-6 w-6" />
            Pages
          </a>
          <a href="#" className="flex items-center px-2 py-2 mt-1 text-base font-medium rounded-md text-gray-300 hover:bg-gray-700">
            <ShoppingCart className="mr-4 h-6 w-6" />
            Sales
          </a>
          <a href="#" className="flex items-center px-2 py-2 mt-1 text-base font-medium rounded-md text-gray-300 hover:bg-gray-700">
            <MessageSquare className="mr-4 h-6 w-6" />
            Messages
          </a>
          <a href="#" className="flex items-center px-2 py-2 mt-1 text-base font-medium rounded-md text-gray-300 hover:bg-gray-700">
            <Lock className="mr-4 h-6 w-6" />
            Authentication
          </a>
          <a href="#" className="flex items-center px-2 py-2 mt-1 text-base font-medium rounded-md text-gray-300 hover:bg-gray-700">
            <FileQuestion className="mr-4 h-6 w-6" />
            Docs
          </a>
          <a href="#" className="flex items-center px-2 py-2 mt-1 text-base font-medium rounded-md text-gray-300 hover:bg-gray-700">
            <Boxes className="mr-4 h-6 w-6" />
            Components
          </a>
          <a href="#" className="flex items-center px-2 py-2 mt-1 text-base font-medium rounded-md text-gray-300 hover:bg-gray-700">
            <HelpCircle className="mr-4 h-6 w-6" />
            Help
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="pl-64">
        {/* Header */}
        <header className="bg-gray-800 shadow">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 bg-blue-500 rounded-full"></div>
                </div>
                <div className="ml-10 flex items-baseline space-x-4">
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input
                      type="text"
                      name="search"
                      id="search"
                      className="block w-full rounded-md border-0 bg-gray-700 py-1.5 pl-10 pr-3 text-gray-300 placeholder:text-gray-400 focus:bg-white focus:text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Search"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <button type="button" className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <Bell className="h-6 w-6" aria-hidden="true" />
                </button>
                <button type="button" className="ml-3 flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* KPI Section */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <div className="bg-gray-800 overflow-hidden rounded-lg shadow">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="text-2xl font-bold text-white">$803,256</div>
                      <div className="mt-1 text-sm text-gray-400">Revenue</div>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dd>
                          <div className="text-sm font-medium text-green-400">↗ 7% from last month</div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 overflow-hidden rounded-lg shadow">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="text-2xl font-bold text-white">24,405</div>
                      <div className="mt-1 text-sm text-gray-400">Completed orders</div>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dd>
                          <div className="text-sm font-medium text-green-400">↗ 5% from last month</div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 overflow-hidden rounded-lg shadow">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="text-2xl font-bold text-white">39,957</div>
                      <div className="mt-1 text-sm text-gray-400">Material stock</div>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dd>
                          <div className="text-sm font-medium text-green-400">↗ 12% from last month</div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 overflow-hidden rounded-lg shadow">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="text-2xl font-bold text-white">95%</div>
                      <div className="mt-1 text-sm text-gray-400">On time delivery</div>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dd>
                          <div className="text-sm font-medium text-green-400">↗ 3% from last month</div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Orders by State Section */}
            <div className="mt-8">
              <div className="bg-gray-800 overflow-hidden rounded-lg shadow">
                <div className="p-6">
                  <h3 className="text-lg font-medium leading-6 text-white">Orders by state</h3>
                  <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="bg-gray-700 overflow-hidden rounded-lg">
                      {/* Placeholder for US map */}
                      <div className="h-64 bg-purple-900 flex items-center justify-center">
                        <span className="text-white">US Map Placeholder</span>
                      </div>
                    </div>
                    <div>
                      <table className="min-w-full divide-y divide-gray-700">
                        <thead>
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">State</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Orders</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Customers</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Delivery rate</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-700">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-white">California</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-white">8,750</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-white">7,557</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-green-400">↗ 87%</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-white">Nevada</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-white">7,533</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-white">6,585</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-red-400">↘ 13%</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-white">Texas</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-white">6,784</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-white">5,344</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-red-400">↘ 42%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
