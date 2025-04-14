import { useEffect, useState } from 'react';

const jugadoresIniciales = [
  { id: 1, nombre: 'Jugador 1', tieneBomba: false },
  { id: 2, nombre: 'Jugador 2', tieneBomba: false },
  { id: 3, nombre: 'Jugador 3', tieneBomba: false },
    { id: 4, nombre: 'Jugador 4', tieneBomba: false },
];

export default function Home() {
  const [jugadores, setJugadores] = useState(jugadoresIniciales);
  const [tiempo, setTiempo] = useState(30);
  const [bombaActiva, setBombaActiva] = useState(false);

  // Seleccionar jugador al azar
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

  // Contador regresivo
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

  // Pasar bomba al tocar otro jugador
  const pasarBomba = (id) => {
    const quienTiene = jugadores.find((j) => j.tieneBomba);
    if (quienTiene.id === id) return; // no se la pasa a sí mismo

    const nuevos = jugadores.map((j) => ({
      ...j,
      tieneBomba: j.id === id,
    }));

    setJugadores(nuevos);
    setTiempo(30); // reinicia tiempo
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
          <div className="grid grid-cols-3 gap-4">
            {jugadores.map((j) => (
              <div
                key={j.id}
                onClick={() => pasarBomba(j.id)}
                className={`p-4 rounded cursor-pointer text-center border-2 ${
                  j.tieneBomba ? 'bg-red-500 border-yellow-300' : 'bg-gray-800 border-gray-600'
                }`}
              >
                {j.nombre}
                <br />
                {j.tieneBomba ? 'Con la bomba' : 'Libre'}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
