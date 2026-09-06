import { useDispatch, useSelector } from "react-redux";
import { deletePlatform } from "../store/platformsSlice.js";

function PlatformList() {
  const platforms = useSelector((state) => state.platforms);
  const dispatch = useDispatch();

  return (
    <div className="list-section">
      <h3>Platforms</h3>
      {platforms.length === 0 && <p className="empty">No platforms yet.</p>}
      <ul className="platform-list">
        {platforms.map((platform) => (
          <li key={platform.id} className="platform-item">
            <span>{platform.name}</span>
            <button
              className="delete-btn"
              onClick={() => dispatch(deletePlatform(platform.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlatformList;
