/* eslint-disable security/detect-object-injection */
import { capitalize, typeNameToColor } from "@widgets/PokemonDetails/lib/utils";

interface TypeChipsProperties {
  typeName: string;
}

export function TypeChips({ typeName }: TypeChipsProperties) {
  return (
    <li
      style={{ backgroundColor: typeNameToColor(typeName) }}
      className="text-grayscale-white text-subtitle-3 inline rounded-full px-2 py-0.5"
    >{capitalize(typeName)}
    </li>
  );
}
