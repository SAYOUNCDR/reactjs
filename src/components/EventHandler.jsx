export const EventHandler = () => {
  const handleClick = () => {
    return console.log("haandleClick button clicked!");
  };

  const copyhandler = () => {
    return console.log("hey don't copy my content");
  };

  const moveHndler = () => {
    return console.log("You just moved mouse over me");
  };

  return (
    <div>
      <button onClick={handleClick}>Click</button>;
      <p onCopy={copyhandler}>Don't coy the paragraph</p>
      <p onMouseMove={moveHndler}>Hey Dont move move over me</p>
    </div>
  );
};
