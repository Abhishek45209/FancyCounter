import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButtons({ type, setCount }) {
  const handleClick = () => {
    setCount((prev) => {
      if (type === "Minus") {
        return prev - 1;
      } else {
        return prev + 1;
      }
    });
  };
  return (
    <button onClick={handleClick} className="count-btn">
      {type === "Minus" && <MinusIcon className="count-btn-icon" />}
      {type === "Plus" && <PlusIcon className="count-btn-icon" />}
    </button>
  );
}
