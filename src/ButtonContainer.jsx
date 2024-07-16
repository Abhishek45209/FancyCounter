import CountButtons from "./CountButtons";

export default function ButtonContainer({ setCount }) {
  return (
    <div className="button-container">
      <CountButtons type="Minus" setCount={setCount} />
      <CountButtons type="Plus" setCount={setCount} />
    </div>
  );
}
