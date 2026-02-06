import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, CreditCard, Sparkles, MessageCircle, MoreHorizontal } from "lucide-react";

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

        {/* Profile Card Container - White rounded container as seen in image */}
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

            {/* Offer Card */}
            <div className="mt-7 relative">
              <div className="absolute -top-3.5 left-4 z-20">
                <div className="bg-[#008ABF] text-white text-[11px] font-black py-1 px-4 rounded-full uppercase tracking-wide">
                  Oferta Limitada
                </div>
              </div>
              <div className="flex items-center justify-between p-5 rounded-[1.25rem] border-2 border-[#008ABF] bg-[#F1F9FE] relative">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <Sparkles className="w-6 h-6 text-[#008ABF]" />
                  </div>
                  <div>
                    <p className="font-bold text-[#1A1A1A] text-[16px]">Assinatura Mensal</p>
                    <p className="text-[#8E8E8E] text-[13px] font-medium">Cobrado a cada 30 dias</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[22px] font-black text-[#008ABF]">R$ 39,92</p>
                </div>
              </div>
            </div>

            {/* User Data Form */}
            <div className="mt-8 space-y-6">
              <div className="space-y-3.5">
                <Label className="text-[12px] font-bold text-[#8E8E8E] uppercase tracking-widest ml-1">Seus Dados</Label>
                <div className="space-y-3">
                  <Input 
                    placeholder="Nome Completo" 
                    className="h-[52px] bg-[#F2F2F2] border-none rounded-2xl px-5 placeholder:text-[#A0A0A0] text-[16px] font-medium focus-visible:ring-2 focus-visible:ring-[#008ABF]/20"
                  />
                  <Input 
                    placeholder="WhatsApp / Telefone" 
                    className="h-[52px] bg-[#F2F2F2] border-none rounded-2xl px-5 placeholder:text-[#A0A0A0] text-[16px] font-medium focus-visible:ring-2 focus-visible:ring-[#008ABF]/20"
                  />
                  <Input 
                    placeholder="E-mail" 
                    className="h-[52px] bg-[#F2F2F2] border-none rounded-2xl px-5 placeholder:text-[#A0A0A0] text-[16px] font-medium focus-visible:ring-2 focus-visible:ring-[#008ABF]/20"
                  />
                </div>
              </div>

              <div className="space-y-3.5">
                <Label className="text-[12px] font-bold text-[#8E8E8E] uppercase tracking-widest ml-1">Pagamento</Label>
                <div className="grid grid-cols-2 gap-2 p-1.5 bg-[#F2F2F2] rounded-2xl">
                  <button className="flex items-center justify-center gap-2.5 py-3 rounded-xl bg-white shadow-sm font-bold text-[#008ABF] text-sm">
                    <div className="relative w-4 h-4 flex items-center justify-center">
                      <div className="absolute w-3.5 h-3.5 border-2 border-[#008ABF] rotate-45"></div>
                      <div className="w-1.5 h-1.5 bg-[#008ABF] rotate-45"></div>
                    </div>
                    PIX
                  </button>
                  <button className="flex items-center justify-center gap-2.5 py-3 rounded-xl font-bold text-[#8E8E8E] text-sm">
                    <CreditCard className="w-4.5 h-4.5" />
                    Cartão
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 py-3.5 bg-[#E1F3F2] rounded-2xl text-[#2F9E98] text-[14px] font-bold">
                  <Sparkles className="w-4 h-4 fill-current" />
                  Aprovação imediata
                </div>
              </div>

              <Button className="w-full h-[60px] bg-[#008ABF] hover:bg-[#0079A8] text-white font-black text-lg rounded-full shadow-lg shadow-[#008ABF]/20 active:scale-[0.98] transition-all uppercase tracking-wider mt-4">
                ASSINAR AGORA
              </Button>
            </div>
          </div>
        </div>

        {/* Content Preview - Below the main white card */}
        <div className="px-6 pb-12">
          <h3 className="text-[12px] font-bold text-[#8E8E8E] uppercase tracking-widest mb-4">Prévia do Conteúdo (6)</h3>
          <div className="grid grid-cols-3 gap-2.5">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-sm">
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=500&auto=format&fit=crop" alt="Preview 1" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-sm">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop" alt="Preview 2" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-2xl relative overflow-hidden shadow-sm">
              <img src="https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=500&auto=format&fit=crop" alt="Preview 3" className="w-full h-full object-cover blur-md scale-110" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/5">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                  <Lock className="w-5 h-5 text-white fill-white" />
                </div>
              </div>
            </div>
            <div className="aspect-square rounded-2xl relative overflow-hidden shadow-sm">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=500&auto=format&fit=crop" alt="Preview 4" className="w-full h-full object-cover blur-md scale-110" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/5">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                  <Lock className="w-5 h-5 text-white fill-white" />
                </div>
              </div>
            </div>
            <div className="aspect-square rounded-2xl relative overflow-hidden shadow-sm">
              <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=500&auto=format&fit=crop" alt="Preview 5" className="w-full h-full object-cover blur-md scale-110" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/5">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                  <Lock className="w-5 h-5 text-white fill-white" />
                </div>
              </div>
            </div>
            <div className="aspect-square rounded-2xl relative overflow-hidden shadow-sm">
              <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=500&auto=format&fit=crop" alt="Preview 6" className="w-full h-full object-cover blur-md scale-110" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/5">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                  <Lock className="w-5 h-5 text-white fill-white" />
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-center mt-8 text-[#A0A0A0] text-[13px] font-medium leading-relaxed px-4">
            Assine para liberar <span className="text-[#1A1A1A] font-bold">todas as 548 fotos</span> e vídeos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
