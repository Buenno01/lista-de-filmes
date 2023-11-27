type TitleProps = {
  headline: string;
};

function Title({ headline }: TitleProps) {
  return (
    <h1>{ headline }</h1>
  );
}

export default Title;
