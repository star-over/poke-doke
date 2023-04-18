import { PokemonType } from "pokenode-ts";
import { TypeChips } from "./TypeChips";

interface TypeChipsProperties {
  types: PokemonType[];
}

export function TypeChipsList({ types }: TypeChipsProperties) {
  return (
    <ul className="flex justify-center gap-2">
      {types?.map((type) => <TypeChips key={type.slot} typeName={type.type.name} />)}
    </ul>
  );
}
