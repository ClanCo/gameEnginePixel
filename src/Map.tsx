export default function Map() {
  return (
    <div className="relative" style={{ transform: 'translate3D(8px, 8px, 0px)' }}>
      <div className="bg-blue-600" style={{ position: 'absolute', left: 'Opx', top: 'Opx' }}>
        <canvas width="16px" height="16px" className="bg-blue-600" />
      </div>
      <div style={{ position: 'absolute', left: '16px', top: 'Opx' }}>
        <canvas width="16px" height="16px" className="bg-blue-600" />
      </div>
    </div>
  );
}
