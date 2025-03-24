import Link from "next/link";
import { ParticleCanvas } from "@/hooks/particle";

export default function NotFound() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black overflow-hidden">
      {/* Particules en fond */}
      <div className="absolute inset-0 z-0">
        <ParticleCanvas />
      </div>

      {/* Contenu centré */}
      <div className="z-10 p-10 bg-white/5 backdrop-blur-md rounded-2xl shadow-lg text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          404 – Page introuvable
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Oups... Cette page n'existe pas ou n'existe plus.
        </p>
        <Link href="/" passHref className="mt-6 inline-block px-6 py-3 rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-md">
          Revenir à l’accueil
        </Link>
      </div>
    </div>
  );
}
