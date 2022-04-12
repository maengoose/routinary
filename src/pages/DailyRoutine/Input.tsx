const Input: React.FC = ({onClick}) => {
  return (
    <p>
      <input type="text" placeholder="write" />
      <button type="button" onClick={onClick}>
        add
      </button>
    </p>
  );
}