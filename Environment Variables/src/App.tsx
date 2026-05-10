import { AppMetadata } from "./api-endpoints/appMetadata";

function App() {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>{AppMetadata.title}</h1>
        <p>{AppMetadata.description}</p>
        <span>Version: {AppMetadata.version}</span>
      </div>
    </div>
  );
}

export default App;
