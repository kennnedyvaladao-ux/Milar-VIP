import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Lock, Sparkles, MessageCircle, Flame } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans text-[#1A1A1A] pb-12 flex justify-center">
      {/* Mobile-focused container */}
      <div className="w-full max-w-[500px] bg-[#F7F7F7] min-h-screen">
        
        {/* Header / Banner */}
        <div className="relative h-44 w-full overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop" 
            alt="Banner" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Profile Card Container */}
        <div className="mx-4 -mt-10 mb-6 bg-white rounded-[2.5rem] shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden relative z-10 pb-10">
          
          <div className="px-6 pt-6">
            {/* Profile Avatar */}
            <div className="relative inline-block">
              <div className="w-24 h-24 rounded-full border-[5px] border-white shadow-sm overflow-hidden bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1000&auto=format&fit=crop" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-1 right-1 w-[18px] h-[18px] bg-[#4ADE80] border-[3px] border-white rounded-full"></div>
            </div>

            <div className="mt-4">
              <h1 className="text-2xl font-bold tracking-tight text-[#1A1A1A]">Vanessa Steinberg</h1>
              <p className="text-[#8E8E8E] text-[15px] font-medium mt-0.5">@testando123 • Visto recentemente</p>
            </div>

            {/* Bio */}
            <div className="mt-5 space-y-1.5">
              <p className="text-[15px] leading-snug text-[#4A4A4A]">
                Hey! 📝 Assine para ter acesso exclusivo ao meu conteúdo Premium.
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[14px] text-[#4A4A4A] font-medium pt-1">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#008ABF] fill-[#008ABF]" />
                  500+ Posts
                </span>
                <span className="flex items-center gap-1.5">
                  <div className="w-[18px] h-[18px] rounded-full bg-gradient-to-tr from-[#8E2DE2] to-[#4A00E0] flex items-center justify-center text-[10px] text-white font-black italic">G</div>
                  Atualizações diárias
                </span>
                <span className="flex items-center gap-1.5">
                  <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                  Chat Direto
                </span>
              </div>
            </div>

            {/* New Subscription Plans Section */}
            <div className="mt-10 space-y-6">
              <div className="flex items-center justify-center gap-2 text-[#1A1A1A] font-bold text-lg">
                Ofertas exclusivas <Flame className="w-5 h-5 text-orange-500 fill-orange-500" />
              </div>

              <div className="space-y-4">
                {/* Promo Plan */}
                <div className="relative">
                  <div className="absolute -top-3 -right-2 z-20">
                    <div className="bg-[#E1F3F2] text-[#2F9E98] text-[10px] font-bold py-1 px-3 rounded-full border border-[#2F9E98]/20">
                      -10% OFF
                    </div>
                  </div>
                  <button className="w-full text-left group">
                    <div className="p-5 rounded-[2rem] bg-[#008ABF] text-white shadow-lg shadow-[#008ABF]/20 active:scale-[0.98] transition-all relative overflow-hidden">
                      <div className="flex justify-between items-center relative z-10">
                        <p className="text-[17px] font-bold">Assinar agora (7 dias)</p>
                        <p className="text-[17px] font-black">R$ 19,90</p>
                      </div>
                    </div>
                    <p className="text-center text-[11px] text-[#8E8E8E] mt-2">
                      De <span className="line-through">R$ 22,90</span> por apenas <span className="font-bold">R$ 19,90</span>
                    </p>
                  </button>
                </div>

                {/* Monthly Plan */}
                <button className="w-full p-5 rounded-[2rem] bg-[#008ABF] text-white shadow-lg shadow-[#008ABF]/20 active:scale-[0.98] transition-all">
                  <div className="flex justify-between items-center">
                    <p className="text-[17px] font-bold">Mensal (30 dias)</p>
                    <p className="text-[17px] font-black">R$ 28,90</p>
                  </div>
                </button>

                {/* 6 Months Plan */}
                <button className="w-full p-5 rounded-[2rem] bg-[#008ABF] text-white shadow-lg shadow-[#008ABF]/20 active:scale-[0.98] transition-all">
                  <div className="flex justify-between items-center">
                    <p className="text-[17px] font-bold">6 meses (semestral)</p>
                    <p className="text-[17px] font-black">R$ 99,90</p>
                  </div>
                </button>
              </div>

              {/* CTA Section */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center justify-center gap-2 py-3.5 bg-[#E1F3F2] rounded-2xl text-[#2F9E98] text-[15px] font-bold">
                  <Sparkles className="w-4 h-4 fill-current" />
                  Aprovação imediata
                </div>

                <Button className="w-full h-14 bg-[#008ABF] hover:bg-[#0079A8] text-white font-black text-base rounded-full shadow-lg shadow-[#008ABF]/20 active:scale-[0.98] transition-all uppercase tracking-wider">
                  ASSINAR AGORA
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Content Preview */}
        <div className="px-5 pb-16">
          <h3 className="text-[11px] font-bold text-[#A0A0A0] uppercase tracking-widest mb-4 ml-1">PRÉVIA DO CONTEÚDO (6)</h3>
          <div className="grid grid-cols-3 gap-2">
            {/* Row 1 */}
            <div className="aspect-square rounded-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=500&auto=format&fit=crop" alt="Preview 1" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop" alt="Preview 2" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-xl relative overflow-hidden bg-[#222]">
              <img src="https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=500&auto=format&fit=crop" alt="Preview 3" className="w-full h-full object-cover blur-2xl opacity-40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Lock className="w-8 h-8 text-white fill-white" />
              </div>
            </div>

            {/* Row 2 */}
            <div className="aspect-square rounded-xl relative overflow-hidden bg-[#222]">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=500&auto=format&fit=crop" alt="Preview 4" className="w-full h-full object-cover blur-2xl opacity-40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Lock className="w-8 h-8 text-white fill-white" />
              </div>
            </div>
            <div className="aspect-square rounded-xl relative overflow-hidden bg-[#222]">
              <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=500&auto=format&fit=crop" alt="Preview 5" className="w-full h-full object-cover blur-2xl opacity-40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Lock className="w-8 h-8 text-white fill-white" />
              </div>
            </div>
            <div className="aspect-square rounded-xl relative overflow-hidden bg-[#222]">
              <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=500&auto=format&fit=crop" alt="Preview 6" className="w-full h-full object-cover blur-2xl opacity-40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Lock className="w-8 h-8 text-white fill-white" />
              </div>
            </div>
          </div>
          
          <p className="text-center mt-6 text-[#A0A0A0] text-[11px] font-medium leading-relaxed">
            Assine para liberar todas as 548 fotos e vídeos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
