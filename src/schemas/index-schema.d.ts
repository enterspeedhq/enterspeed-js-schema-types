import { ISourceEntity } from "../models";
import { ITriggersSchemaContext } from "../triggers";

type IndexType = "keyword" | "float" | "integer" | "text" | "boolean";

interface IndexDescriptor {
  type: IndexType;
}

export abstract class IndexSchema<TReturnProperties, TSourceEntityProperties> {
  /**
   * The `triggers` method is where you define the source group and the types the schema should process.
   * @see {@link https://docs.enterspeed.com/reference/js/triggers} documentation for triggers.
   * {@label SCHEMA_FUNCTION}
   */
  triggers: (context: ITriggersSchemaContext) => void;

  /**
   * The `index` method is where you define the index you want to create.
   */
  index: Record<string, IndexDescriptor>;

  /**
   * The `properties` method is where you define the output that goes into the index you can search for from the query API.
   * @returns The properties method must return an object matching the index definition defined in the schema.
   * {@label SCHEMA_FUNCTION}
   */
  properties: (
    sourceEntity: ISourceEntity<TSourceEntityProperties>
  ) => Promise<TReturnProperties> | TReturnProperties;
}
