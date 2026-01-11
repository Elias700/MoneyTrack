import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const closeSiderbar = () => setIsSidebarOpen(false);

  return (
    <div className="flex">
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={closeSiderbar}
      />

      <main className="flex-1 min-h-screen">
        <Header onOpenSidebar={() => setIsSidebarOpen(true)} />
        {children}
      </main>

      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        />
      )}
    </div>
  );
}
