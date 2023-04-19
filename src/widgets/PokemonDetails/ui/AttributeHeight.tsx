import Image from "next/image";
import { divideByTen } from "../lib/utils";

interface AttributeHeightProperties {
  height: number;
}

export function AttributeHeight({ height }: AttributeHeightProperties) {
  return (
    <div className="flex w-full flex-col items-center justify-end gap-2">
      <div className="flex items-center gap-1">
        <Image src="./svg/straighten.svg" alt="Height logo" width={16} height={16} />
        <span className="text-body-3">{divideByTen(height)}&nbsp;kg</span>
      </div>
      <span className="text-caption justify-self-end">Height</span>
    </div>
  );
}
