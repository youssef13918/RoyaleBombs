{jugadores.map((j) => (
  <div
    key={j.id}
    onClick={() => pasarBomba(j.id)}
    className={`flex items-center justify-center w-24 h-24 rounded-full cursor-pointer text-center font-bold transition duration-300 ${
      j.tieneBomba
        ? 'bg-red-600 animate-pulse shadow-lg shadow-yellow-300'
        : 'bg-blue-600 hover:bg-blue-700'
    }`}
  >
    {j.nombre}
  </div>
))}