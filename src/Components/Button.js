export default function Button({ HandlerOnClick, API_URL, text }) {
  return (
    <button id="btn-item" onClick={() => HandlerOnClick(API_URL)}>
      {text}
    </button>
  );
}
