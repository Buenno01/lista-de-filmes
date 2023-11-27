type ButtonProps = {
  descricao?: string;
  titulo: string;
};

function Button({ descricao = undefined, titulo }: ButtonProps) {
  return (
    <button className="text-4xl font-semibold text-grey-50">
      { titulo }
      {' '}
      {descricao && <p className="text-sm text-grey-400 font-normal">{ descricao }</p>}
    </button>
  );
}

export default Button;
