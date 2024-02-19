import { useEffect, useRef, useState } from 'react';
import GameEngine from './components/GameEngine';

const colors = [
  'bg-blue-600',
  'bg-red-600',
  'bg-green-600',
  'bg-yellow-600',
  'bg-purple-600',
  'bg-indigo-600',
  'bg-pink-600',
  'bg-cyan-600',
  'bg-orange-600',
  'bg-teal-600',
];

export default function Map() {
  const [clickedTile, setClickedTile] = useState(null);
  const [positionPlayer, setPositionPlayer] = useState({ row: 0, col: 0 });
  const [gameEngine, setGameEngine] = useState<GameEngine | null>(null);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rows = 18;
    const cols = 15;

    const engine = new GameEngine(rows, cols, 16, 16);
    setGameEngine(engine);

    return () => {
      // Nettoyage à la sortie
    };
  }, []);

  useEffect(() => {
    // Gestion des mouvements du joueur
    const handleKeyDown = (event: KeyboardEvent) => {
      if (gameEngine) {
        gameEngine.movePlayer(event.key);
        setPositionPlayer(gameEngine.playerPosition);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [gameEngine]);

  const renderTiles = () => {
    if (!gameEngine) return null;

    return gameEngine.tiles.map((row, rowIndex) => (
      <div key={rowIndex} className="flex">
        {row.map((tile, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            className={`absolute tile ${colors[Math.floor(Math.random() * colors.length)]}`}
            style={{ top: rowIndex * 16, left: colIndex * 16 }}
          >
            <canvas className="w-[16px] h-[16px]"> </canvas>
          </div>
        ))}
      </div>
    ));
  };

  return (
    <>
      <div className="relative border-4 border-black overflow-hidden" style={{ width: '200px', height: '200px' }}>
        <div className="absolute" style={{ top: -positionPlayer.col * 16, left: -positionPlayer.row * 16 }}>
          <div className="relative" style={{ transform: 'translate3D(8px, 8px, 0px)' }} ref={divRef}>
            {renderTiles()}
          </div>
        </div>
      </div>
      <div
        id="player"
        className="absolute bg-black rounded-full w-[16px] h-[16px]"
        style={{ top: '92px', left: '92px' }}
      ></div>
    </>
  );
}
