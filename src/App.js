import Map from "./Map";
import Search from "./Search";
import { useState } from "react";
// .envファイルからAPIキーを取得
const apikey = process.env.REACT_APP_API_KEY;
console.log(apikey);

function App() {
  const [gps, setGps] = useState({
    lat: "35.6814568602531",
    lng: "139.76799772026422",
  });
  return (
    <div>
      <Search apikey={apikey} onGeocodeResult={(query) => setGps(query)} />
      <Map apikey={apikey} gps={gps} />
    </div>
  );
}

export default App;
