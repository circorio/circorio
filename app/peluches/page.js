"use client"
import { useState } from "react"
export default function Ilustraciones() {
    const [selected, setSelected] = useState(null)
  const data = {
    gatos: [
      { name: "Gato 1", price: "$20", image: "/gatomoradoblanco.jpeg" },
      { name: "Gato 2", price: "$20", image: "/gato2.jpg" },
    ],
    conejos: [
      { name: "Conejo 1", price: "$20", image: "/_MG_6079.JPG" },
      { name: "Conejo 2", price: "$20", image: "/conejo2.jpg" },
    ],
    ratas: [
      { name: "Rata 1", price: "$20", image: "/rata.jpeg" },
      { name: "Rata 2", price: "$20", image: "/rata2.jpg" },
    ],
    arlequines: [
      { name: "Arlequin 1", price: "$20", image: "/arlequin 1 .JPG" },
      { name: "Arlequin 2", price: "$20", image: "/arlequin2.jpg" },
    ],
    fantasmas: [
      { name: "Fantasma 1", price: "$20", image: "/fantasma.jpg" },
      { name: "Fantasma 2", price: "$20", image: "/fantasma2.jpg" },
    ],
    monjas: [
      { name: "Monja 1", price: "$20", image: "/monja.jpeg" },
      { name: "Monja 2", price: "$20", image: "/monja2.jpg" },
    ],
  }

  const renderCategoria = (title, items) => (
   <div className="px-6 py-16 max-w-6xl mx-auto">
      <h2 className="text-3xl text-white mb-6">{title}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <div
  key={i}
  className="bg-black/60 rounded-xl overflow-hidden border border-white/10 shadow-lg transition-transform hover:scale-105 duration-300 cursor-pointer"
>
            
            <img
  src={item.image}
  alt={item.name}
  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
  onClick={() => setSelected(item)}
/>

            <div className="p-4 text-white">
              <h3 className="text-xl font-bold">{item.name}</h3>
              <p className="text-gray-300">{item.price}</p>
            </div>

          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed text-white"
      style={{ backgroundImage: "url('/Fondo.jpeg')" }}
    >
      <div className="bg-black/60 min-h-screen px-6 py-10">

        {renderCategoria("Gatos", data.gatos)}
        {renderCategoria("Conejos", data.conejos)}
        {renderCategoria("Ratas", data.ratas)}
        {renderCategoria("Arlequines", data.arlequines)}
        {renderCategoria("Fantasmas", data.fantasmas)}
        {renderCategoria("Monjas", data.monjas)}

      </div>
      {selected && (
  <div
    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
    onClick={() => setSelected(null)}
  >
    <div
      className="bg-zinc-900 rounded-2xl overflow-hidden max-w-3xl w-full shadow-2xl border border-white/10 flex"
      onClick={(e) => e.stopPropagation()}
    >
      {/* IMAGEN IZQUIERDA */}
      <div className="w-1/2">
        <img
          src={selected.image}
          className="w-full h-full object-cover"
        />
      </div>

      {/* INFO DERECHA */}
      <div className="w-1/2 p-6 text-white flex flex-col justify-center">
        <h2 className="text-3xl font-bold">{selected.name}</h2>

        <p className="text-gray-300 mt-2">
          Gatitos tuertos siempre dispuestos a proteger tus sueños..
        </p>

        <p className="text-xl mt-4 text-white font-semibold">
          {selected.price}
        </p>

        <button className="mt-6 bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200">
          Comprar
        </button>

        <button
          className="mt-3 text-gray-400 text-sm"
          onClick={() => setSelected(null)}
        >
          Cerrar
        </button>
      </div>
    </div>
  </div>
)}
    </div>
  )
}