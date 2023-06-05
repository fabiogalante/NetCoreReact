import { Duck } from './demo';

interface Props {
  duck: Duck;
}

export default function DuckIem({ duck }: Props) {
  return (
    <div key={duck.name}>
      <span>{duck.name}</span>
      <button onClick={() => duck.makeSound(duck.name + ' quake')}>
        Make sound
      </button>
    </div>
  );
}
