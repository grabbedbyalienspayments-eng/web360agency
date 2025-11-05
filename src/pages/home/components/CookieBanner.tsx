
interface CookieBannerProps {
  onAccept: () => void;
}

export default function CookieBanner({ onAccept }: CookieBannerProps) {
  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-50">
      <div className="bg-black/90 backdrop-blur-sm border border-white/20 rounded-lg p-4 shadow-lg">
        <p className="text-white/90 text-sm mb-4">
          Folosim cookie-uri pentru o experiență mai bună.
        </p>
        <button
          onClick={onAccept}
          className="px-4 py-2 bg-gradient-to-r from-[#00FFF7] to-[#E4C176] text-[#0B0C0F] text-sm font-semibold rounded-md hover:scale-105 transition-transform duration-300 whitespace-nowrap cursor-pointer"
        >
          Accept
        </button>
      </div>
    </div>
  );
}