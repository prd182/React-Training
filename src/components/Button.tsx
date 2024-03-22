interface Props {
  //propriedades do botao
  children: string;
  color?: string; // ? significa que é uma prop opcional. Em vez de string podemos especificar varias cores que podem estar no botao, como primary | secondary etc
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  // 'primary' é o default value de color
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
