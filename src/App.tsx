import Map from './Map';

function App() {
  return (
    <>
      <div className="RenderLevel_fullScreenContainer" style={{ background: 'rgb(47,40,8)' }}>
        <div className="RenderLevel_gameScreen">
          <Map />
        </div>
      </div>
    </>
  );
}

export default App;
