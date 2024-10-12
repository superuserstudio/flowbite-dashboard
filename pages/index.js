import { Sidebar, Navbar } from 'flowbite-react';
import Dashboard from '../components/Dashboard'

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar>
        {/* Add sidebar content */}
      </Sidebar>
      <div className="flex-1">
        <Navbar>
          {/* Add navbar content */}
        </Navbar>
        <Dashboard />
      </div>
    </div>
  );
}

