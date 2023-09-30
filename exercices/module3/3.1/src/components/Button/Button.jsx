const Button = ({ value, onClick }) => (
    <button onClick={onClick} className={value}>
      {value}
    </button>
);
  
export default Button;