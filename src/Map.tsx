import { useEffect, useRef, useState } from 'react';

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
  const [rect, setRect] = useState({ row: 10, col: 14 });
  const [clickedTile, setClickedTile] = useState(null);
  const [positionPlayer, setPositionPlayer] = useState({ row: 0, col: 0 });
  const divRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'ArrowUp':
          setPositionPlayer((prevPos) => ({ ...prevPos, col: prevPos.col - 1 }));
          break;
        case 'ArrowDown':
          setPositionPlayer((prevPos) => ({ ...prevPos, col: prevPos.col + 1 }));
          break;
        case 'ArrowLeft':
          setPositionPlayer((prevPos) => ({ ...prevPos, row: prevPos.row - 1 }));
          break;
        case 'ArrowRight':
          setPositionPlayer((prevPos) => ({ ...prevPos, row: prevPos.row + 1 }));
          break;
        default:
          break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const updateCanvasPositions = () => {
      const divWidth = divRef.current.offsetWidth;
      const divHeight = divRef.current.offsetHeight;
      const canvasWidth = 16; // Tile width
      const canvasHeight = 16; // Tile height

      // Update canvas positions based on rect
      const canvasElements = divRef.current.querySelectorAll('.tile');
      canvasElements.forEach((canvas, index) => {
        const row = Math.floor(index / rect.col);
        const col = index % rect.col;
        const left = col * canvasWidth;
        const top = row * canvasHeight;
        canvas.style.left = `${left}px`;
        canvas.style.top = `${top}px`;
      });
    };

    updateCanvasPositions();

    window.addEventListener('resize', updateCanvasPositions);

    return () => {
      window.removeEventListener('resize', updateCanvasPositions);
    };
  }, [rect]);

  const handleClick = (index) => {
    setClickedTile(index);
    console.log(index);
  };

  return (
    <>
      <div className="relative border-4 border-black overflow-hidden" style={{ width: '200px', height: '200px' }}>
        <div className="absolute" style={{ top: -positionPlayer.col * 16, left: -positionPlayer.row * 16 }}>
          <div className="relative" style={{ transform: 'translate3D(8px, 8px, 0px)' }} ref={divRef}>
            {Array.from({ length: rect.row * rect.col }).map((_, index) => (
              <div
                className={`absolute tile ${clickedTile === index ? 'bg-blue-600' : colors[index % colors.length]}`}
                key={index}
                onClick={() => handleClick(index)}
              >
                <canvas className="w-[16px] h-[16px]" />
              </div>
            ))}
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
