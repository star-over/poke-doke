import { bulbazavr } from "@widgets/PokemonDetails/lib/data";
import { AttributeAbilities } from "@widgets/PokemonDetails/ui/AttributeAbilities";
import { AttributeHeight } from "@widgets/PokemonDetails/ui/AttributeHeight";
import { AttributeList } from "@widgets/PokemonDetails/ui/AttributeList";
import { AttributeWeight } from "@widgets/PokemonDetails/ui/AttributeWeight";
import { TypeChipsList } from "@widgets/PokemonDetails/ui/TypeChipsList";

const {
  types, weight, height, abilities,
} = bulbazavr;

export default function Test() {
  return (
    <div>
      <p className="text-headline">my test</p>
      <TypeChipsList types={types} />
      <AttributeWeight weight={weight} />
      <AttributeHeight height={height} />
      <AttributeAbilities abilities={abilities} />


      <AttributeList>
        <AttributeWeight weight={weight} />
        <AttributeHeight height={height} />
        <AttributeAbilities abilities={abilities} />
      </AttributeList>

    </div>
  );
}
