import { useEffect, useState } from "react";
import firebase from "./firebase";
import { v4 as uuidv4 } from "uuid";

function GetFirebase() {
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const ref = firebase.firestore().collection("schools");

  function getSchools2() {
    setLoading(true);
    ref.get().then((item) => {
      const items = item.docs.map((doc) => doc.data());
      setSchools(items);
      setLoading(false);
    });
  }

  useEffect(() => {
    getSchools2();
  }, []);

  function addSchool(newSchool) {
    ref
      .doc(newSchool.id)
      .set(newSchool)
      .then(() => {
        setSchools((prev) => [newSchool, ...prev]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function deleteSchool(school) {
    ref
      .doc(school.id)
      .delete()
      .then(() => {
        setSchools((prev) =>
          prev.delete((element) => element.id !== school.id)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function editSchool(updatedSchool) {
    setLoading();
    ref
      .doc(updatedSchool.id)
      .update(updatedSchool)
      .then(() => {
        setSchools((prev) =>
          prev.map((element) => {
            if (element.id !== updatedSchool.id) {
              return element;
            }
            return updatedSchool;
          })
        );
      })
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

export default GetFirebase;
