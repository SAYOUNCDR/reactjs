//Importing icon
import { DiLinux } from "react-icons/di";

const styles = {
  color: "green",
  backgroundColor: "crimson",
  padding: "2rem",
  textAlign: "center",
};
export const Styling = () => {
  return (
    <div>
      {/* Icon using react-icons */}
      <DiLinux />
      <h1 style={{ color: "red", textAlign: "center" }}>Inline Style</h1>
      <h2 style={styles}>JS Object as style</h2>
    </div>
  );
};
