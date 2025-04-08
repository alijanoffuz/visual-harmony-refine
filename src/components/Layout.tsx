
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import { ThemeProvider } from "@/hooks/use-theme";

export default function Layout({ children }: { children?: React.ReactNode }) {
  const { toast } = useToast();

  useEffect(() => {
    // Optional welcome toast that appears briefly
    const timer = setTimeout(() => {
      toast({
        title: "Welcome to Visual Harmony",
        description: "Explore the refined interface focusing on visual design.",
        duration: 4000,
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [toast]);

  return (
    <ThemeProvider>
      <div className="flex min-h-screen bg-black text-white overflow-hidden dark:bg-black dark:text-white light:bg-gray-50 light:text-gray-900 relative">
        <Sidebar />
        <MainContent />
      </div>
    </ThemeProvider>
  );
}
