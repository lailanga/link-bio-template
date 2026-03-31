import { siteConfig } from "../data/site";

export default function ServiceTemplate() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: `url(${siteConfig.image.background})`,
        }}
      />

      {/* OVERLAY CLARO */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/95" />

      {/* CARD */}
      <div className="relative max-w-md w-full">

        <div className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 text-center shadow-xl">

          {/* BADGE */}
          <div className="inline-block px-3 py-1 text-xs bg-gray-100 rounded-full text-gray-600 mb-3">
            {siteConfig.name}
          </div>

          {/* HEADLINE */}
          <h1 className="text-2xl font-bold text-gray-900 leading-tight">
            {siteConfig.headline}
          </h1>

          {/* PROVA SOCIAL */}
          <p className="text-yellow-500 text-sm mt-2">
            ⭐ {siteConfig.rating} • Atendimento confiável
          </p>

          {/* SUB */}
          <p className="text-gray-600 text-sm mt-2">
            {siteConfig.subheadline}
          </p>

          {/* CTA PRINCIPAL */}
          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            className="block mt-5 bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl font-semibold text-lg transition-all duration-200 shadow-md hover:scale-[1.02]"
          >
            💬 Falar no WhatsApp
          </a>

          {/* BOTÕES SECUNDÁRIOS */}
          <div className="mt-3 space-y-2">

            {siteConfig.links.instagram && (
              <a
                href={siteConfig.links.instagram}
                className="block bg-gray-100 hover:bg-gray-200 py-3 rounded-xl transition"
              >
                📸 Ver trabalhos
              </a>
            )}

            {siteConfig.links.maps && (
              <a
                href={siteConfig.links.maps}
                className="block bg-gray-100 hover:bg-gray-200 py-3 rounded-xl transition"
              >
                📍 Localização
              </a>
            )}

          </div>

          {/* HERO IMAGE */}
          <div className="mt-5 overflow-hidden rounded-2xl">
            <img
              src={siteConfig.image.hero}
              className="w-full h-36 object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* INFO */}
          <div className="mt-4 text-sm text-gray-500 space-y-1">
            <p>⏰ {siteConfig.hours}</p>
            <p>📍 {siteConfig.city}</p>
          </div>

        </div>

      </div>
    </div>
  );
}