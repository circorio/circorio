export default function Comics() {
  const comics = [
    {
      name: "Arlequino",
      image: "/arlequino.jpeg",
      price: "10 COP",
    },
    {
      name: "Zanni la Gata Bailadora",
      image: "/zannilagatabailadora.jpeg",
      price: "10 COP",
    },
    {
      name: "Osito",
      image: "/osito.jpeg",
      price: "10 COP",
    },
    {
      name: "Pierrotsita",
      image: "/pierrotsita.jpeg",
      price: "10 COP",
    },
    {
  name: "Ayudantes",
  image: "/ayudantes.jpeg",
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
            Comics
          </h1>

          <p className="mt-6 text-center text-[#c5b3c0]">
            Mis publicaciones y proyectos de cómic.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 max-w-7xl mx-auto">

            {comics.map((comic) => (
              <div
                key={comic.name}
                className="bg-[#12080f]/90 rounded-3xl overflow-hidden border border-[#2e1a24] hover:border-[#7a1b44] hover:scale-105 transition duration-500 shadow-xl"
              >
                <img
                  src={comic.image}
                  alt={comic.name}
                  className="h-96 w-full object-cover"
                />

                <div className="p-6">

                  <h2 className="text-2xl text-[#f4e9e1]">
                    {comic.name}
                  </h2>

                  <p className="mt-3 text-[#c5b3c0]">
                    Precio: {comic.price}
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