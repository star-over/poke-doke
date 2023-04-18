import { bulbazavr } from "@widgets/PokemonDetails/lib/data";
import { TypeChipsList } from "@widgets/PokemonDetails/ui/TypeChipsList";

const { types } = bulbazavr;

export default function Test() {
  return (
    <div>
      <p className="text-headline">my test</p>
      <p className="text-subtitle-1 ">my test</p>
      <p className="text-subtitle-2 ">my test</p>
      <p className="text-subtitle-3 ">my test</p>
      <p className="text-body-1 ">my test</p>
      <p className="text-body-2 ">my test</p>
      <p className="text-body-3 ">my test</p>
      <p className="text-caption ">my test</p>

      <TypeChipsList types={types} />

    </div>
  );
}
