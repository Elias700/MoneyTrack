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
    <div
      className="
        flex
        h-screen
      "
    >
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={closeSiderbar}
      />

      <main
        className="
            flex-1 
            flex 
            flex-col
          "
      >
        <Header onOpenSidebar={() => setIsSidebarOpen(true)} />
        <div className="
              flex-1 
              overflow-y-auto 
              px-6 py-6 lg:px-8
            "
        >
          {children}
        </div>

      </main>

      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="
            z-40 
            fixed 
            inset-0 
            bg-black/50 
            lg:hidden"
        />
      )}
    </div>
  );
}
