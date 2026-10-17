import "../aurum.css";
import { createFileRoute } from "@tanstack/react-router";
import { Instagram, MapPin, MessageCircle, ShieldCheck, Sparkles, Gem, Check, ArrowUpRight, CarFront } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Aurum Detail | Estética Automotiva Premium" },
      { name: "description", content: "Seu veículo merece um cuidado premium. Agende na Aurum Detail, conheça nossos trabalhos e encontre nossa localização." },
      { property: "og:title", content: "Aurum Detail | Estética Automotiva Premium" },
      { property: "og:description", content: "Cuidado, sofisticação e atenção em cada detalhe. Agende seu atendimento." },
      { property: "og:type", content: "website" },
    ],
  }),
});

const bookingMessage = encodeURIComponent("Olá! Vim pelo link da bio da Aurum Detail e gostaria de agendar um serviço de estética automotiva. Poderiam me informar os serviços, valores e horários disponíveis?");
const links = {
  first: `https://wa.me/5573981976982?text=${bookingMessage}`,
  second: `https://wa.me/553195832250?text=${bookingMessage}`,
  instagram: "https://www.instagram.com/aurum_studiodetail?psln=MTZhNXNwNXZrZzJobw%3D%3D",
  maps: "https://maps.app.goo.gl/nXBY3mUcPJkrKkVa7?g_st=aw",
};

function ActionLink({ href, icon: Icon, children, primary = false }: { href: string; icon: typeof MessageCircle; children: React.ReactNode; primary?: boolean }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`aurum-action ${primary ? "aurum-action-primary" : ""}`}>
      <Icon size={19} strokeWidth={1.8} aria-hidden="true" />
      <span>{children}</span>
      <ArrowUpRight size={15} className="aurum-action-arrow" aria-hidden="true" />
    </a>
  );
}

function Index() {
  return (
    <main className="aurum-page">
      <div className="aurum-glow" aria-hidden="true" />
      <section className="aurum-content" aria-label="Links oficiais da Aurum Detail">
        <div className="aurum-brand">
          <div className="aurum-logo-wrap"><img src="/aurum%20logo.jpg" alt="Logo Aurum Detail — Estética Automotiva Premium" className="aurum-logo" fetchPriority="high" /></div>
          <div className="aurum-line"><span /> EXCELÊNCIA EM CADA DETALHE <span /></div>
          <h1>AURUM <span>DETAIL</span></h1>
          <p className="aurum-subtitle">Seu carro merece um cuidado à altura.</p>
          <div className="aurum-categories"><CarFront size={15} /> ESTÉTICA AUTOMOTIVA PREMIUM</div>
        </div>

        <nav className="aurum-actions" aria-label="Agendamentos e redes sociais">
          <div className="aurum-section-label">AGENDE SEU ATENDIMENTO</div>
          <ActionLink href={links.first} icon={MessageCircle} primary>Agendar pelo WhatsApp 1</ActionLink>
          <ActionLink href={links.second} icon={MessageCircle} primary>Agendar pelo WhatsApp 2</ActionLink>
          <div className="aurum-divider"><span /></div>
          <ActionLink href={links.instagram} icon={Instagram}>Conheça nossos trabalhos</ActionLink>
          <ActionLink href={links.maps} icon={MapPin}>Como chegar</ActionLink>
        </nav>

        <section className="aurum-why" aria-labelledby="why-title">
          <h2 id="why-title">POR QUE ESCOLHER A AURUM?</h2>
          <div className="aurum-benefits">
            <div><ShieldCheck aria-hidden="true" /><span>Atendimento de confiança</span></div>
            <div><Gem aria-hidden="true" /><span>Qualidade premium</span></div>
            <div><Sparkles aria-hidden="true" /><span>Resultados que impressionam</span></div>
            <div><Check aria-hidden="true" /><span>Cuidado em cada detalhe</span></div>
          </div>
        </section>

        <footer className="aurum-footer">
          <p>Acompanhe nossa página</p>
          <a aria-label="Instagram da Aurum Detail" href={links.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={21} /></a>
          <small>© {new Date().getFullYear()} Aurum Detail · Estética Automotiva Premium</small>
        </footer>
      </section>
    </main>
  );
}
