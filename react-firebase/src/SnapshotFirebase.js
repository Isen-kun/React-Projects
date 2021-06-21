import { useEffect, useState } from "react";
import firebase from "./firebase";
import { v4 as uuidv4 } from "uuid";

function SnapshotFirebase() {
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const ref = firebase.firestore().collection("schools");

  function getSchools() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setSchools(items);
      setLoading(false);
    });
  }

  useEffect(() => {
    getSchools();
  }, []);

  function addSchool(newSchool) {
    ref
      .doc(newSchool.id)
      .set(newSchool)
      .catch((err) => {
        console.log(err);
      });
  }

  function deleteSchool(school) {
    ref
      .doc(school.id)
      .delete()
      .catch((err) => {
        console.log(err);
      });
  }

  function editSchool(updatedSchool) {
    setLoading();
    ref
      .doc(updatedSchool.id)
      .update(updatedSchool)
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <h1>Schools (SNAPSHOT)</h1>
      <div className="inputBox">
        <h3>Add New</h3>
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
        <textarea onChange={(e) => setDesc(e.target.value)}></textarea>
        <button onClick={() => addSchool({ title, desc, id: uuidv4() })}>
          Submit
        </button>
      </div>
      <hr />
      {loading ? <h1>Loading....</h1> : null}
      {schools.map((school) => (
        <div className="school" key={school.id}>
          <h2>{school.title}</h2>
          <p>{school.desc}</p>
          <div>
            <button onClick={() => deleteSchool(school)}>X</button>
            <button
              onClick={() =>
                editSchool({ title: school.title, desc, id: school.id })
              }
            >
              Edit
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default SnapshotFirebase;
