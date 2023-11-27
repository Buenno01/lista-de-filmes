type ButtonProps = {
  descricao?: string;
  titulo: string;
};

function Button({ descricao = undefined, titulo }: ButtonProps) {
  return (
    <button>
      { titulo }
      {' '}
      {descricao && <p>{ descricao }</p>}
    </button>
  );
}

export default Button;
