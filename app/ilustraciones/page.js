export default function Ilustraciones() {
  const ilustraciones = [
    {
      name: "Gatonejo",
      image: "/gatonejo.png",
      price: "10 COP",
    },
    {
      name: "Pierrot",
      image: "/pierrot.png",
      price: "10 COP",
    },
    {
      name: "Pierrot",
      image: "/sofas.png",
      price: "10 COP",
    },
  ];

  return (
    <div
      className="min-h-screen text-white font-serif bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('/Fondo.jpeg')",
      }}
    >
      <div className="min-h-screen bg-black/60 backdrop-blur-sm">

        <a
          href="/"
          className="fixed top-6 left-6 bg-[#5b0f2f] hover:bg-[#7a1b44] px-5 py-3 rounded-xl transition duration-300 z-50"
        >
          ← Volver al Inicio
        </a>

        <div className="pt-32 px-6">

          <h1 className="text-5xl font-bold text-center text-[#f4e9e1]">
            Ilustraciones
          </h1>

          <p className="mt-6 text-center text-[#c5b3c0]">
            Colección de ilustraciones originales.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">

            {ilustraciones.map((item) => (
              <div
                key={item.name}
                className="bg-[#12080f]/90 rounded-3xl overflow-hidden border border-[#2e1a24] hover:border-[#7a1b44] hover:scale-105 transition duration-500 shadow-xl"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-96 w-full object-cover"
                />

                <div className="p-6">

                  <h2 className="text-2xl text-[#f4e9e1]">
                    {item.name}
                  </h2>

                  <p className="mt-3 text-[#c5b3c0]">
                    Precio: {item.price}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </div>
  );
}