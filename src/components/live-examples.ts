export const helloExample = `<Button>Hello Fumadocs</Button>`;

export const counterExample = `() => {
  const [count, setCount] = useState(0);

  return (
    <Button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </Button>
  );
}`;

export const renderExample = `const label = 'From render()';

render(<Button>{label}</Button>);`;
