export default function DarkModeToggle({ darkMode, onToggle }) {
    return (
      <div className="switchModeContainer">
        <button onClick={onToggle} className="switchModeButton">
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    );
  }
  