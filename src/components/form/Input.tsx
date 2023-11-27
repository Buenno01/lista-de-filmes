type InputProps = {
  label?: string,
  type: string,
  placeholder?: string,
  id: string,
};

export default function Input({ label = '', type, placeholder = '', id }:InputProps) {
  return (
    <label htmlFor={ id }>
      { label }
      <input
        className="w-full h-16 text-grey-700
        bg-black bg-opacity-10
        border rounded-lg border-grey-700 px-4 py-3"
        id={ id }
        type={ type }
        placeholder={ placeholder }
      />
    </label>
  );
}
