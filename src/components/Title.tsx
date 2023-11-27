type TitleProps = {
  headline: string;
};

function Title({ headline }: TitleProps) {
  return (
    <h1
      className="text-4xl font-bold mt-16 mb-10 font-poppins"
    >
      { headline }
    </h1>
  );
}

export default Title;
