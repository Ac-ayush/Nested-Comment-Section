import "../styles.css";

interface ButtonPropType {
  text: string;
  onClick: () => void;
}

const Button = ({ text, onClick }: ButtonPropType) => {
  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  );
};

export { Button };
