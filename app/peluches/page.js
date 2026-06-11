"use client"

import { useState } from "react"

export default function Ilustraciones() {
  const [index, setIndex] = useState({
    gatos: 0,
    conejos: 0,
    ratas: 0,
    arlequines: 0,
    fantasmas: 0,
    monjas: 0,
  })

  const data = {
    gatos: [
      { name: "Gato 1", image: "/gato1.jpg" },
      { name: "Gato 2", image: "/gato2.jpg" },
    ],
    conejos: [
      { name: "Conejo 1", image: "/conejo1.jpg" },
      { name: "Conejo 2", image: "/conejo2.jpg" },
    ],
    ratas: [
      { name: "Rata 1", image: "/rata1.jpg" },
      { name: "Rata 2", image: "/rata2.jpg" },
    ],
    arlequines: [
      { name: "Arlequin 1", image: "/arlequin1.jpg" },
      { name: "Arlequin 2", image: "/arlequin2.jpg" },
    ],
    fantasmas: [
      { name: "Fantasma 1", image: "/fantasma1.jpg" },
      { name: "Fantasma 2", image: "/fantasma2.jpg" },
    ],
    monjas: [
      { name: "Monja 1", image: "/monja1.jpg" },
      { name: "Monja 2", image: "/monja2.jpg" },
    ],
  }

  const renderCarrusel = (key, title) => (
    <section className="px-6 py-16">
      <h2 className="text-3xl text-white mb-6">{title}</h2>

      <div className="relative overflow-hidden">

        {/* IZQ */}
        <button
          onClick={() =>
            setIndex((prev) => ({
              ...prev,
              [key]:
                prev[key] === 0
                  ? data[key].length - 1
                  : prev[key] - 1,
            }))
          }
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 px-3 py-2"
        >
          ‹
        </button>

        {/* DERECHA */}
        <button
          onClick={() =>
            setIndex((prev) => ({
              ...prev,
              [key]:
                prev[key] === data[key].length - 1
                  ? 0
                  : prev[key] + 1,
            }))
          }
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 px-3 py-2"
        >
          ›
        </button>

        {/* SLIDER */}
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${index[key] * 100}%)`,
          }}
        >
          {data[key].map((item, i) => (
            <div key={i} className="min-w-full flex justify-center">
              <img
                src={item.image}
                alt={item.name}
                className="h-96 object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )

  return (
    <div
      className="min-h-screen text-white bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/Fondo.jpeg')" }}
    >
      <div className="bg-black/60 min-h-screen">

        {renderCarrusel("gatos", "Gatos")}
        {renderCarrusel("conejos", "Conejos")}
        {renderCarrusel("ratas", "Ratas")}
        {renderCarrusel("arlequines", "Arlequines")}
        {renderCarrusel("fantasmas", "Fantasmas")}
        {renderCarrusel("monjas", "Monjas")}

      </div>
    </div>
  )
}