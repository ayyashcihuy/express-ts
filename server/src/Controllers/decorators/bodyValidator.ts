// Validating Body for method

import "reflect-metadata";
import { MetadataKeys } from "./metadataKeys";

export function bodyValidator(...keys: string[]) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    Reflect.defineMetadata(MetadataKeys.validator, keys, target, key);
  };
}
