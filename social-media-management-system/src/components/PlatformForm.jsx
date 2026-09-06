import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPlatform } from "../store/platformsSlice.js";

function PlatformForm() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    // dispatch sends the action to the store, which updates the state
    dispatch(addPlatform(name));
    setName("");
  };

  return (
    <form className="card-form" onSubmit={handleSubmit}>
      <h3>Add Platform</h3>
      <input
        type="text"
        placeholder="Platform name (e.g. YouTube)"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Add Platform</button>
    </form>
  );
}

export default PlatformForm;
