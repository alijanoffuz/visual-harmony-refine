
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

export default function MainContent() {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <main className="flex-1 bg-[#121212] text-gray-100 overflow-auto animate-fade-in dark:bg-[#121212] dark:text-gray-100 light:bg-gray-50 light:text-gray-900">
      <div className="max-w-4xl mx-auto px-6 py-10 md:py-16 flex flex-col min-h-screen">
        <header className="mb-16 md:mb-24">
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight">
            4. Parallel muhit haqida
          </h1>
        </header>
        
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="text-center max-w-md">
            <p className="text-xl md:text-2xl mb-3 opacity-90">Sizda obuna aniqlanmadi.</p>
            <p className="text-lg md:text-xl mb-8 opacity-75">Inshoni o'qish uchun obunangizni yangilang.</p>
            
            <div className="flex justify-center">
              <Button
                className={`bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 rounded-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex items-center justify-center gap-2 ${
                  isHovered ? 'shadow-blue-500/20' : ''
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Send className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                <span className="text-base">Botga o'tish</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
