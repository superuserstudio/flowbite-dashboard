import React from 'react';

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 p-4">
        <div className="mb-8">
          {/* Logo */}
          <div className="text-2xl font-bold text-white">Logo</div>
        </div>
        <nav>
          {['Overview', 'Pages', 'Sales', 'Messages', 'Authentication', 'Docs', 'Components', 'Help'].map((item, index) => (
            <div key={index} className="mb-2">
              <a href="#" className="text-gray-300 hover:text-white">{item}</a>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="bg-gray-800 p-4 flex justify-between items-center">
          <div className="flex-1">
            <input type="text" placeholder="Search" className="bg-gray-700 text-white px-4 py-2 rounded-lg w-64" />
          </div>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">New Project</button>
        </header>

        {/* Dashboard content */}
        <div className="p-6">
          {/* KPI Cards */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            {[
              { title: 'Revenue', value: '$803,256', change: '+5.4% vs last month' },
              { title: 'Completed orders', value: '24,405', change: '+8.2% vs last month' },
              { title: 'Material stock', value: '39,957', change: '-2.1% vs last month' },
              { title: 'On time delivery', value: '95%', change: '+1.2% vs last month' },
            ].map((kpi, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-lg font-semibold">{kpi.title}</h3>
                <p className="text-2xl font-bold">{kpi.value}</p>
                <p className="text-sm text-gray-400">{kpi.change}</p>
              </div>
            ))}
          </div>

          {/* Orders by state */}
          <div className="bg-gray-800 p-4 rounded-lg mb-6">
            <h3 className="text-lg font-semibold mb-4">Orders by state</h3>
            {/* Add US map chart here */}
            <p>US map chart placeholder</p>
          </div>

          {/* Inventory level */}
          <div className="bg-gray-800 p-4 rounded-lg mb-6">
            <h3 className="text-lg font-semibold mb-4">Inventory level</h3>
            {/* Add bar chart here */}
            <p>Inventory level bar chart placeholder</p>
          </div>

          {/* Trucks on the road and Delivered shipments */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Total trucks on the road</h3>
              {/* Add bar chart here */}
              <p>Trucks on road bar chart placeholder</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Delivered shipments by country</h3>
              {/* Add world map chart here */}
              <p>World map chart placeholder</p>
            </div>
          </div>

          {/* Active shipments */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Active shipments</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left">
                    <th className="p-2">SHIPMENT ID</th>
                    <th className="p-2">DESTINATION</th>
                    <th className="p-2">ESTIMATED ARRIVAL</th>
                    <th className="p-2">CUSTOMER</th>
                    <th className="p-2">PRICE</th>
                    <th className="p-2">STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { id: '#1846325', destination: 'New York NHL Supply Chain', estimatedArrival: '26-Sep-2023 | 08:20', customer: 'Bonnie Green', price: '$768,867', status: 'In Transit' },
                    { id: '#1846326', destination: 'Sacramento XPO Logistics', estimatedArrival: '25-Sep-2023 | 10:00', customer: 'Jese Leos', price: '$235,555', status: 'In Transit' },
                    // Add more shipments here
                  ].map((shipment) => (
                    <tr key={shipment.id}>
                      <td className="p-2">{shipment.id}</td>
                      <td className="p-2">{shipment.destination}</td>
                      <td className="p-2">{shipment.estimatedArrival}</td>
                      <td className="p-2">{shipment.customer}</td>
                      <td className="p-2">{shipment.price}</td>
                      <td className="p-2">
                        <span className="bg-yellow-500 text-yellow-900 px-2 py-1 rounded-full text-xs">
                          {shipment.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
