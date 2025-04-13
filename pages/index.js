import { useEffect, useState } from 'react';

const jugadoresIniciales = [
  { id: 1, nombre: 'Jugador 1', tieneBomba: false },
  { id: 2, nombre: 'Jugador 2', tieneBomba: false },
  { id: 3, nombre: 'Jugador 3', tieneBomba: false },
];

export default function Home() {
  const [jugadores, setJugadores] = useState(jugadoresIniciales);
  const [tiempo, setTiempo] = useState(30);
  const [bombaActiva, setBombaActiva] = useState(false);

  const iniciarBomba = () => {
    const indexRandom = Math.floor(Math.random() * jugadores.length);
    const nuevosJugadores = jugadores.map((j, i) => ({
      ...j,
      tieneBomba: i === indexRandom,
    }));
    setJugadores(nuevosJugadores);
    setBombaActiva(true);
    setTiempo(30);
  };

  useEffect(() => {
    if (!bombaActiva) return;
    if (tiempo === 0) {
      alert('¡Boom! Se acabó el tiempo.');
      setBombaActiva(false);
      return;
    }

    const timer = setTimeout(() => setTiempo(tiempo - 1), 1000);
    return () => clearTimeout(timer);
  }, [tiempo, bombaActiva]);

  const pasarBomba = (id) => {
    const quienTiene = jugadores.find((j) => j.tieneBomba);
    if (quienTiene.id === id) return;

    const nuevos = jugadores.map((j) => ({
      ...j,
      tieneBomba: j.id === id,
    }));

    setJugadores(nuevos);
    setTiempo(30);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-black text-white">
      <h1 className="text-3xl font-bold mb-4">Modo Bomba</h1>

      {!bombaActiva && (
        <button onClick={iniciarBomba} className="bg-red-600 px-6 py-2 rounded">
          Iniciar ronda
        </button>
      )}

      {bombaActiva && (
        <>
          <p className="text-xl my-4">Tiempo restante: {tiempo} segundos</p>
          <div className="grid grid-cols-3 gap-6">
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
          </div>
        </>
      )}
    </div>
  );
}