import { PokemonAbility } from "pokenode-ts";
import { capitalize } from "../lib/utils";

interface AttributeAbilitiesProperties {
  abilities: PokemonAbility[];
}

export function AttributeAbilities({ abilities }: AttributeAbilitiesProperties) {
  const abilityNames = abilities.map(({ ability, slot }) => (
    <li
      className="text-body-3"
      key={slot}
    >
      {capitalize(ability.name)}
    </li>
  ));

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <ul className="flex flex-col">
        {abilityNames}
      </ul>
      <span className="text-caption justify-self-end">Abilities</span>
    </div>
  );
}
