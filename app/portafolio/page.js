export default function Portafolio() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">

      <a
        href="/"
        className="fixed top-6 left-6 bg-[#5b0f2f] hover:bg-[#7a1b44] px-5 py-3 rounded-xl transition duration-300"
      >
        ← Volver al Inicio
      </a>

      <h1 className="text-5xl font-bold">
        Portafolio de Artista
      </h1>

      <p className="mt-6 text-xl text-gray-300">
        Próximamente.
      </p>

    </div>
  );
}