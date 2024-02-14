import Map from './Map';

function App() {
  return (
    <>
      <div className="RenderLevel_fullScreenContainer">
        <div className="RenderLevel_gameScreen" style={{ background: 'rgb(47,40,8)' }}>
          <Map />
        </div>
      </div>
    </>
  );
}

export default App;
