function EventDemo() {
  const handleClick = () => alert("Button clicked!");
  const handleChange = (e) => console.log("Input changed:", e.target.value);
  const handleMouseOver = () => console.log("Mouse over div!");
  const handleKeyPress = (e) => console.log("Key pressed:", e.key);

  return (
    <div className="p-4">
      <button onClick={handleClick}>Click Me</button>
      <input onChange={handleChange} onKeyPress={handleKeyPress} placeholder="Type here" />
      <div onMouseOver={handleMouseOver} className="p-2 border mt-2">
        Hover over me
      </div>
    </div>
  );
}

export default EventDemo;
