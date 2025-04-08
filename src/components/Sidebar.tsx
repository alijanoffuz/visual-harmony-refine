import { Search, Sun, Moon, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface MenuItem {
  id: number;
  title: string;
  active?: boolean;
}

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState<number>(4);
  const { theme, setTheme } = useTheme();
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(!isMobile);
  
  useEffect(() => {
    setIsOpen(!isMobile);
  }, [isMobile]);
  
  const menuItems: MenuItem[] = [
    { id: 1, title: "Darsatlardan rivajlanishi organamiz" },
    { id: 2, title: "Javoblarni endi nima qilamiz?" },
    { id: 3, title: "Nima aylash ish uch kitob irayalva qilindi" },
    { id: 4, title: "Parallel muhit haqida", active: true },
    { id: 5, title: "Uzun yollar haqida" },
    { id: 6, title: "Odamga qomusiylik yarashadi" },
    { id: 7, title: "Qachon amal qilishni boshlayxiz" },
    { id: 8, title: "Sizva va xato bilan qo'rquvni yengamiz" },
    { id: 9, title: "Biz — bu qilaydigon ishlarimiz" },
    { id: 10, title: "Zo'r ishlar qanday qilinadi" },
    { id: 11, title: "Maslahatlarni kimdan olamiz" },
    { id: 12, title: "Narsalarning aslini ko'rishni organamiz" },
    { id: 13, title: "U mendan o'lib ketyapti" },
    { id: 14, title: "Misol bilan gaplashamiz" },
    { id: 15, title: "Rozi va norozilik o'rtasini topamiz" },
    { id: 16, title: "Vaqtni ushlashga urinib" },
  ];
  
  const handleMenuItemClick = (id: number) => {
    setActiveItem(id);
    if (isMobile) {
      setIsOpen(false);
    }
  };
  
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <>
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Button 
          variant="outline" 
          size="icon"
          onClick={toggleSidebar}
          className="bg-[#1a1a1a] border-gray-700 hover:bg-[#252525] dark:bg-[#1a1a1a] light:bg-white light:border-gray-200"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>
      
      <aside 
        className={`${
          isMobile ? 
            (isOpen ? 'translate-x-0' : '-translate-x-full') : 
            'translate-x-0'
        } transition-transform duration-300 w-[320px] h-screen bg-[#1a1a1a] text-gray-200 flex flex-col overflow-hidden animate-fade-in dark:bg-[#1a1a1a] dark:text-gray-200 light:bg-white light:text-gray-800 fixed md:relative z-40`}
      >
        <div className="px-6 py-7">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-medium opacity-90">Parallel Muhit</h2>
            <div className="flex items-center gap-2">
              <Sun className="h-4 w-4" />
              <Switch 
                checked={theme === "dark"}
                onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="data-[state=checked]:bg-blue-500"
              />
              <Moon className="h-4 w-4" />
            </div>
          </div>
          
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none opacity-70">
              <Search className="h-4 w-4" />
            </div>
            <Input 
              type="search"
              placeholder="Search page or heading..."
              className="pl-10 py-2 bg-[#252525] border-0 text-sm font-light focus-visible:ring-1 focus-visible:ring-gray-500 dark:bg-[#252525] light:bg-gray-100"
            />
          </div>
          
          <nav className="overflow-y-auto max-h-[calc(100vh-140px)] pr-1 -mr-1">
            <ul className="space-y-1 text-sm">
              {menuItems.map((item) => (
                <li key={item.id} className="relative">
                  <button
                    onClick={() => handleMenuItemClick(item.id)}
                    className={`w-full text-left py-1.5 px-4 rounded-sm flex items-center hover:bg-[#252525] transition-colors duration-200 ${
                      activeItem === item.id ? "text-blue-400" : "text-gray-300"
                    } dark:hover:bg-[#252525] light:hover:bg-gray-100 light:text-gray-700 ${
                      activeItem === item.id ? "text-blue-400" : "light:text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    <span className="text-gray-500 mr-2 w-5 text-right">{item.id}.</span>
                    <span className="leading-tight">{item.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
