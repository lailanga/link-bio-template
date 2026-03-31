import { siteConfig } from "../data/site";

export default function RestaurantTemplate() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage: `url(${siteConfig.image.background})`,
        }}
      />

      {/* OVERLAY GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />

      {/* CARD */}
      <div className="relative max-w-md w-full">

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 text-center shadow-2xl">

          {/* BADGE */}
          <div className="inline-block px-3 py-1 text-xs bg-white/10 rounded-full text-zinc-300 mb-3">
            {siteConfig.name}
          </div>

          {/* HEADLINE */}
          <h1 className="text-2xl font-bold text-white leading-tight">
            {siteConfig.headline}
          </h1>

          {/* RATING */}
          <p className="text-yellow-400 text-sm mt-2">
            ⭐ {siteConfig.rating} no Google
          </p>

          {/* SUB */}
          <p className="text-zinc-300 text-sm mt-2">
            {siteConfig.subheadline}
          </p>

          {/* PROMO */}
          <div className="mt-4 bg-red-500/10 border border-red-500/30 text-red-400 text-xs py-2 px-3 rounded-xl">
            {siteConfig.promo}
          </div>

          {/* CTA */}
          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            className="block mt-5 bg-green-500 hover:bg-green-400 text-black py-3 rounded-xl font-bold text-lg transition-all duration-200 shadow-lg hover:scale-[1.02]"
          >
            📲 Pedir agora
          </a>

          {/* SECONDARY BUTTONS */}
          <div className="mt-3 space-y-2">

            <a
              href={siteConfig.links.maps}
              className="block bg-white/10 hover:bg-white/20 py-3 rounded-xl transition"
            >
              📍 Como chegar
            </a>

            <a
              href={siteConfig.links.instagram}
              className="block bg-white/10 hover:bg-white/20 py-3 rounded-xl transition"
            >
              📸 Instagram
            </a>

          </div>

          {/* HERO IMAGE */}
          <div className="mt-5 overflow-hidden rounded-2xl">
            <img
              src={siteConfig.image.hero}
              className="w-full h-36 object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* INFO */}
          <div className="mt-4 text-sm text-zinc-400 space-y-1">
            <p>{siteConfig.day}</p>
            <p>⏰ {siteConfig.hours}</p>
            <p>📍 {siteConfig.city}</p>
          </div>

        </div>

      </div>
    </div>
  );
}