import Image from "next/image";
import { divideByTen } from "../lib/utils";

interface AttributeWeightProperties {
  weight: number;
}

export function AttributeWeight({ weight }: AttributeWeightProperties) {
  return (
    <div className="flex w-full flex-col items-center justify-end gap-2">
      <div className="flex items-center gap-1">
        <Image src="./svg/weight.svg" alt="Weight logo" width={16} height={16} />
        <span className="text-body-3">{divideByTen(weight)}&nbsp;kg</span>
      </div>
      <span className="text-caption">Weight</span>
    </div>
  );
}
