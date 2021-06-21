import SnapshotFirebase from "./SnapshotFirebase";
import GetFirebase from "./GetFirebase";
import SnapshotFirebaseAdvanced from "./SnapshotFirebaseAdvanced";
import { AuthProvider } from "./auth/Auth";
import Login from "./auth/Login";
import Welcome from "./Welcome";

function App() {
  // const get = false;

  return (
    <>
      <AuthProvider>
        <Welcome />
        <Login />
        {/* {get ? <GetFirebase /> : <SnapshotFirebase />} */}
        <SnapshotFirebaseAdvanced />
      </AuthProvider>
    </>
  );
}

export default App;
