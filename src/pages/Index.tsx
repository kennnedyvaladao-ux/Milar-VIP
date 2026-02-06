import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Lock, Sparkles, MessageCircle, Flame } from "lucide-react";

const Index = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>("weekly");

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans text-[#1A1A1A] pb-12 flex justify-center">
      {/* Mobile-focused container */}
      <div className="w-full max-w-[500px] bg-[#F7F7F7] min-h-screen">
        
        {/* Header / Banner - Ajustado para mostrar imagem completa */}
        <div className="relative w-full overflow-visible">
          <img 
            src="https://files.catbox.moe/1qdiue.jpg" 
            alt="Banner" 
            className="w-full h-auto block"
          />
          {/* Efeito de sombra blur na divisão */}
          <div className="absolute -bottom-6 left-0 right-0 h-12 bg-black/10 blur-xl z-0" />
        </div>

        {/* Profile Card Container */}
        <div className="mx-4 -mt-12 mb-6 bg-white rounded-[2.5rem] shadow-[0_10px_30px_rgba(0,0,0,0.08)] overflow-hidden relative z-10 pb-10 border border-white/50 backdrop-blur-sm">
          
          <div className="px-6 pt-6">
            {/* Profile Avatar */}
            <div className="relative inline-block">
              <div className="w-24 h-24 rounded-full border-[5px] border-white shadow-sm overflow-hidden bg-gray-100">
                <img 
                  src="https://files.catbox.moe/53wnxl.png" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-1 right-1 w-[18px] h-[18px] bg-[#4ADE80] border-[3px] border-white rounded-full"></div>
            </div>

            <div className="mt-4">
              <h1 className="text-2xl font-bold tracking-tight text-[#1A1A1A]">Maya Privée</h1>
              <p className="text-[#8E8E8E] text-[15px] font-medium mt-0.5">@Maya_reserve_ • Visto recentemente</p>
            </div>

            {/* Bio */}
            <div className="mt-5 space-y-1.5">
              <p className="text-[15px] leading-snug text-[#4A4A4A] font-medium italic">
                Nem todo mundo merece me ver assim. Se você esta aqui... talvez mereça🔥
              </p>
              <div className="flex items-center justify-between text-[11px] text-[#4A4A4A] font-bold pt-1">
                <span className="flex items-center gap-1 shrink-0">
                  <Sparkles className="w-3.5 h-3.5 text-[#008ABF] fill-[#008ABF]" />
                  500+ Posts
                </span>
                <span className="flex items-center gap-1 shrink-0">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-[#8E2DE2] to-[#4A00E0] flex items-center justify-center text-[9px] text-white font-black italic shrink-0">G</div>
                  Atualizações diárias
                </span>
                <span className="flex items-center gap-1 shrink-0">
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366]" />
                  Chat Direto
                </span>
              </div>
            </div>

            {/* Subscription Plans Section */}
            <div className="mt-10 space-y-8">
              <div className="flex items-center justify-center gap-2 text-[#1A1A1A] font-bold text-lg">
                Ofertas exclusivas <Flame className="w-5 h-5 text-orange-500 fill-orange-500" />
              </div>

              <div className="space-y-7">
                {/* 7 Days Plan */}
                <div className="relative pt-3">
                  <div className="absolute -top-1.5 left-6 z-20">
                    <div className="bg-[#008ABF] text-white text-[10px] font-black px-4 py-1.5 rounded-xl uppercase tracking-wider">
                      Oferta Limitada
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedPlan('weekly')}
                    className={`w-full flex items-center justify-between p-5 rounded-[1.5rem] border transition-all active:scale-[0.98] bg-white ${
                      selectedPlan === 'weekly' 
                      ? 'border-[#008ABF] border-2 shadow-[0_0_10px_rgba(0,138,191,0.1)]' 
                      : 'border-[#E5E7EB]'
                    }`}
                  >
                    <div className="text-left">
                      <p className="text-[16px] font-bold text-[#1A1A1A]">Assinatura Semanal</p>
                      <p className="text-[12px] text-[#8E8E8E] font-medium">Cobrado a cada 7 dias</p>
                    </div>
                    <div className="text-right">
                      <p className={`text-[18px] font-medium transition-colors ${selectedPlan === 'weekly' ? 'text-[#008ABF]' : 'text-[#1A1A1A]'}`}>R$ 19,90</p>
                    </div>
                  </button>
                </div>

                {/* Monthly Plan */}
                <div className="relative pt-3">
                  <div className="absolute -top-1.5 left-6 z-20">
                    <div className="bg-[#008ABF] text-white text-[10px] font-black px-4 py-1.5 rounded-xl uppercase tracking-wider">
                      Mais Popular
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedPlan('monthly')}
                    className={`w-full flex items-center justify-between p-5 rounded-[1.5rem] border transition-all active:scale-[0.98] bg-white ${
                      selectedPlan === 'monthly' 
                      ? 'border-[#008ABF] border-2 shadow-[0_0_10px_rgba(0,138,191,0.1)]' 
                      : 'border-[#E5E7EB]'
                    }`}
                  >
                    <div className="text-left">
                      <p className="text-[16px] font-bold text-[#1A1A1A]">Assinatura Mensal</p>
                      <p className="text-[12px] text-[#8E8E8E] font-medium">Cobrado a cada 30 dias</p>
                    </div>
                    <div className="text-right">
                      <p className={`text-[18px] font-medium transition-colors ${selectedPlan === 'monthly' ? 'text-[#008ABF]' : 'text-[#1A1A1A]'}`}>R$ 29,90</p>
                    </div>
                  </button>
                </div>

                {/* 6 Months Plan */}
                <div className="relative pt-3">
                  <div className="absolute -top-1.5 left-6 z-20">
                    <div className="bg-[#008ABF] text-white text-[10px] font-black px-4 py-1.5 rounded-xl uppercase tracking-wider">
                      Melhor Valor
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedPlan('semester')}
                    className={`w-full flex items-center justify-between p-5 rounded-[1.5rem] border transition-all active:scale-[0.98] bg-white ${
                      selectedPlan === 'semester' 
                      ? 'border-[#008ABF] border-2 shadow-[0_0_10px_rgba(0,138,191,0.1)]' 
                      : 'border-[#E5E7EB]'
                    }`}
                  >
                    <div className="text-left">
                      <p className="text-[16px] font-bold text-[#1A1A1A]">Assinatura Semestral</p>
                      <p className="text-[12px] text-[#8E8E8E] font-medium">Cobrado a cada 180 dias</p>
                    </div>
                    <div className="text-right">
                      <p className={`text-[18px] font-medium transition-colors ${selectedPlan === 'semester' ? 'text-[#008ABF]' : 'text-[#1A1A1A]'}`}>R$ 99,90</p>
                    </div>
                  </button>
                </div>
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
          <div className="mb-4 ml-1">
            <h3 className="text-[11px] font-bold text-[#A0A0A0] uppercase tracking-widest">PRÉVIA DO CONTEÚDO</h3>
            <div className="flex items-center gap-1.5 text-[11px] text-[#A0A0A0] font-medium mt-0.5">
              <span>Fotos (537)</span>
              <span>•</span>
              <span>Vídeos (11)</span>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-2">
            {/* Row 1 */}
            <div className="aspect-square rounded-xl overflow-hidden shadow-sm">
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=500&auto=format&fit=crop" alt="Preview 1" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden shadow-sm">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop" alt="Preview 2" className="w-full h-full object-cover" />
            </div>
            {/* Locked Item */}
            <div className="aspect-square rounded-xl relative overflow-hidden bg-black/40 shadow-sm">
              <img src="https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=500&auto=format&fit=crop" alt="Preview 3" className="w-full h-full object-cover blur-[24px] scale-125 opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                <div className="w-10 h-10 flex items-center justify-center">
                  <Lock className="w-6 h-6 text-[#E8E1D5] stroke-[1.8] drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]" />
                </div>
              </div>
            </div>

            {/* Row 2 - All Locked */}
            <div className="aspect-square rounded-xl relative overflow-hidden bg-black/40 shadow-sm">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=500&auto=format&fit=crop" alt="Preview 4" className="w-full h-full object-cover blur-[24px] scale-125 opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                <div className="w-10 h-10 flex items-center justify-center">
                  <Lock className="w-6 h-6 text-[#E8E1D5] stroke-[1.8] drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]" />
                </div>
              </div>
            </div>
            <div className="aspect-square rounded-xl relative overflow-hidden bg-black/40 shadow-sm">
              <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=500&auto=format&fit=crop" alt="Preview 5" className="w-full h-full object-cover blur-[24px] scale-125 opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                <div className="w-10 h-10 flex items-center justify-center">
                  <Lock className="w-6 h-6 text-[#E8E1D5] stroke-[1.8] drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]" />
                </div>
              </div>
            </div>
            <div className="aspect-square rounded-xl relative overflow-hidden bg-black/40 shadow-sm">
              <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=500&auto=format&fit=crop" alt="Preview 6" className="w-full h-full object-cover blur-[24px] scale-125 opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                <div className="w-10 h-10 flex items-center justify-center">
                  <Lock className="w-6 h-6 text-[#E8E1D5] stroke-[1.8] drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]" />
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-center mt-6 text-[#A0A0A0] text-[12px] font-medium leading-relaxed">
            Assine para liberar <span className="text-[#1A1A1A] font-bold">todas as 548 fotos e vídeos.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;