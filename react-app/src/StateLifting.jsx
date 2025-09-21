function Child({ onMessageChange }) {
  return (
    <input
      type="text"
      placeholder="Type message"
      onChange={(e) => onMessageChange(e.target.value)}
    />
  );
}

function Parent() {
  const [message, setMessage] = useState("");

  return (
    <div className="p-4">
      <h2>Message from Child: {message}</h2>
      <Child onMessageChange={setMessage} />
    </div>
  );
}

export default Parent;
