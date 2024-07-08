import { BaseFullSchema } from "./base-full-schema";

export class FullSchema<TSourceEntityProperties = Record<string, any | undefined>> extends BaseFullSchema<Record<string, any>, Record<string, unknown>,  TSourceEntityProperties> {
}