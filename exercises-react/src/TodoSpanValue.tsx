type Props = Readonly<{
  readonly title: string
}>;

function TodoSpanValue({ title }: Props) {
  return (
    <span className="TodoSpanValue">
      {title}
    </span>
  );
}

export default TodoSpanValue;
