import { ILookupBuilder, ILookupOption } from "../../lookups";
import { IPropertiesReferenceBuilder } from "./context-methods";

/**
 * The context object available in schemas
 */
export interface IPropertiesContext {
  /**
   * Referencing a partial schema. Mapped data from a partial schema is embedded into the calling schema.
   * @see {@link https://docs.enterspeed.com/reference/js/full-schema/properties#partial}
   * @param alias The alias of a partial schema.
   * @param input You can pass whatever data you need for your partial schema.
   * @returns Resulting partial schema object
   */
  partial(alias: string, input: unknown | undefined | null): any;

  /**
   * Referencing a full schema. References to other schemas are resolved on delivery request time.
   * @see {@link https://docs.enterspeed.com/reference/js/full-schema/properties#reference}
   * @param schemaAlias The alias of a schema.
   */
  reference(schemaAlias: string): IPropertiesReferenceBuilder;

  /**
   * Using the lookup function lets you do a dynamic search for source entities you want to return
   * @see {@link https://docs.enterspeed.com/reference/js/full-schema/properties#lookup} documentation for properties lookup
   * @param filter Your filtering criteria
   * @example Example of usage
   * ```js
   * const newsTeasers = await context.lookup("type eq 'newsArticle'").toPromise();
   * ```
   */
  lookup(filter: string, lookupOptions?: ILookupOption): ILookupBuilder;
}
