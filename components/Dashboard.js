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
  LayoutDashboard, 
  FileText, 
  ShoppingCart, 
  MessageSquare, 
  Lock, 
  FileQuestion, 
  Boxes, 
  HelpCircle,
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

            {/* Inventory Level Section */}
            <div className="mt-8">
              <div className="bg-gray-800 overflow-hidden rounded-lg shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium leading-6 text-white">Inventory level</h3>
                    <span className="text-sm text-green-400">+1,452  (0.85%)</span>
                  </div>
                  <div className="mt-1 text-sm text-gray-400">Material stock</div>
                  <div className="mt-5">
                    <Bar options={inventoryOptions} data={inventoryData} height={300} />
                  </div>
                </div>
              </div>
            </div>

            {/* Active Shipments Section */}
            <div className="mt-8">
              <div className="bg-gray-800 overflow-hidden rounded-lg shadow">
                <div className="p-6">
                  <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                      <h3 className="text-lg font-medium leading-6 text-white">Active shipments</h3>
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                      <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-purple-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 sm:w-auto"
                      >
                        Add shipment
                      </button>
                    </div>
                  </div>
                  <div className="mt-8 flex flex-col">
                    <div className="-my-2 -mx-4 overflow-x-auto  sm:-mx-6 lg:-mx-8">
                      <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <table className="min-w-full divide-y divide-gray-700">
                          <thead>
                            <tr>
                              <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">
                                SHIPMENT ID
                              </th>
                              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                DESTINATION
                              </th>
                              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                ESTIMATED ARRIVAL
                              </th>
                              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                CUSTOMER
                              </th>
                              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                PRICE
                              </th>
                              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                STATUS
                              </th>
                              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                <span className="sr-only">Edit</span>
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-700">
                            <tr>
                              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-6">
                                #1846325
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">New York DHL Supply Chain</td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">25-Sep-2023 | 09:20</td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">Bonnie Green</td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">$768,987</td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-yellow-500">In transit</td>
                              <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                <button type="button" className="text-purple-400 hover:text-purple-300">
                                  <MoreHorizontal className="h-5 w-5" />
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
