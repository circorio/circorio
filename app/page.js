"use client"
import { useState } from "react"
import Link from "next/link"
export default function Home() {

const [carruselIndex, setCarruselIndex] = useState(0)

const artToys = [
  {
    name: "Peluches",
    image: "/gatomoradoblanco.jpeg",
    description: "A mysterious stitched cat with glowing eyes.",
    link: "/peluches"
  },
  {
    name: "Comics",
    image: "/_MG_6079.JPG",
    description: "A lonely rabbit born from forgotten dreams.",
    link: "/comics"
  },
  {
    name: "Ilustraciones",
    image: "/rata.jpeg",
    description: "A strange little rat creature from the shadows.",
    link: "/ilustraciones"
  }
]
  
  return (
    <>
      <audio id="bg-music" loop>
        <source src="/musica pagina sin ncopy.mp3" type="audio/mpeg" />
      </audio>

      <button
        onClick={() => {
          document.getElementById("bg-music").play()
        }}
        className="fixed bottom-6 right-6 z-50 bg-[#5b0f2f] hover:bg-[#7a1b44] px-5 py-3 rounded-full shadow-xl"
      >
        🎵 Play Music
      </button>

      <div
        className="min-h-screen text-white font-serif bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/Fondo.jpeg')",
          scrollBehavior: "smooth",
        }}
      >

        {/* NAVBAR */}

        <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-[#2e1a24]">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

            <div className="flex items-center gap-4">

              <img
                src="/Logo Circorio.jpeg.jpeg"
                alt="Circorio Logo"
                className="w-12 h-12 object-cover rounded-full border border-[#5b0f2f]"
              />

            </div>

            <div className="flex gap-6">

  <a href="#productos">Productos</a>

  <a href="#acerca de">Acerca de</a>

  <a href="/portafolio">Portafolio</a>

  <a href="#contact">Contacto</a>

</div>

          </div>
        </nav>

        {/* HERO */}

        <section className="flex flex-col items-center justify-center text-center px-6 py-32 bg-black/60 backdrop-blur-sm min-h-screen">

          <img
            src="/Logo Circorio.jpeg.jpeg"
            alt="Circorio Logo"
            className="w-40 h-40 object-cover rounded-full border-4 border-[#5b0f2f] shadow-[0_0_40px_rgba(122,27,68,0.6)]"
          />

          <h1 className="mt-8 text-4xl md:text-7xl font-bold tracking-widest text-[#f4e9e1]">
            CIRCORIO
          </h1>

          <p className="mt-6 text-xl text-[#c5b3c0] max-w-2xl leading-relaxed">
           Peluches hechos a mano, oscuros, tiernos y circenses.
          </p>

          <a href="#productos">
            <button className="mt-10 bg-[#5b0f2f] hover:bg-[#7a1b44] hover:scale-105 px-8 py-4 rounded-2xl text-lg transition duration-300 shadow-[0_0_25px_rgba(122,27,68,0.5)]">
              Ver Productos
            </button>
          </a>

        </section>
        {/* Productos */}
<section id="productos" className="px-6 py-24 max-w-6xl mx-auto">
  <h2 className="text-5xl font-bold text-center text-[#f4e9e1]">Productos</h2>

  <div className="relative mt-16 overflow-hidden">
    {/* Botones de navegación */}
    <button
      onClick={() =>
        setCarruselIndex((prev) =>
          prev === 0 ? artToys.length - 1 : prev - 1
        )
      }
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#5b0f2f]/80 hover:bg-[#7a1b44] w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-lg transition"
    >
      ‹
    </button>

    <button
      onClick={() =>
        setCarruselIndex((prev) =>
          prev === artToys.length - 1 ? 0 : prev + 1
        )
      }
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#5b0f2f]/80 hover:bg-[#7a1b44] w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-lg transition"
    >
      ›
    </button>

    {/* Carrusel */}
    <div
      className="flex transition-transform duration-500 ease-in-out"
      style={{ transform: `translateX(-${carruselIndex * (100 / 3)}%)` }}
    >
      {artToys.map((item, i) => (
        <div
          key={i}
          className="min-w-[33.333%] px-4 flex-shrink-0"
        >
          <div className="bg-[#12080f]/90 rounded-3xl overflow-hidden border border-[#2e1a24] hover:border-[#7a1b44] transition duration-500 shadow-xl">
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="h-80 w-full object-cover hover:scale-110 transition duration-700"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl text-[#f4e9e1]">{item.name}</h3>
              <p className="mt-3 text-[#bba7b4]">{item.description}</p>
  <Link href={item.link}>
  <button className="mt-6 w-full bg-[#2a001f] hover:bg-[#5b0f2f] py-3 rounded-xl transition duration-300">
    Ver Más
  </button>
</Link>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Indicadores */}
    <div className="flex justify-center gap-2 mt-8">
      {artToys.map((_, i) => (
        <button
          key={i}
          onClick={() => setCarruselIndex(i)}
          className={`w-2 h-2 rounded-full transition duration-300 ${
            i === carruselIndex ? "bg-[#7a1b44] w-6" : "bg-[#5b0f2f]/50"
          }`}
        />
      ))}
    </div>
  </div>
</section>

        {/* ABOUT */}

        <section
          id="acerca de"
          className="px-6 py-32 bg-black/60 backdrop-blur-sm text-center"
        >

          <h2 className="text-5xl text-[#f4e9e1] font-bold">
            Acerca de
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-[#c5b3c0] text-lg leading-relaxed">
           Circorio es una marca de “Creepy art toys” hecha por Saturia Floki, artista plástica y audiovisual de Bogotá, Colombia.
Estamos enfocados en crear peluches únicos hechos en Colombia.
Estamos en contra del arte hecho con inteligencia artificial y en las producciones masivas.
Queremos ofrecer creatividad, arte y la satisfacción de tener un peluche hecho con amor.

          </p>

        </section>

        {/* CONTACT */}

        <section
  id="contact"
  className="px-6 py-24 text-center"
>
  <h2 className="text-5xl text-[#f4e9e1] font-bold">
    Contact
  </h2>

  <div className="mt-12">
    <a
      href="https://instagram.com/circorio"
      target="_blank"
      rel="noopener noreferrer"
className="inline-block bg-[#5b0f2f] hover:bg-[#7a1b44] hover:scale-105 px-5 py-2 rounded-xl text-base transition duration-300 shadow-lg"    >
      📸 Instagram @circorio
    </a>
  </div>
</section>
      </div>
    </>
  )
}