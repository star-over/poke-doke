/* eslint-disable security/detect-object-injection */
import { theme } from "@root/tailwind.config";
import { Types } from "pokenode-ts";

export type CssColor = `#${string}`;

export function capitalize(string_: string) {
  const first = string_.charAt(0).toUpperCase();
  const rest = string_.slice(1).toLowerCase();
  return `${first}${rest}`;
}

export function typeNameToColor(typeName: string) {
  return theme.colors[typeName.toUpperCase() as keyof typeof theme.colors] as CssColor;
}
