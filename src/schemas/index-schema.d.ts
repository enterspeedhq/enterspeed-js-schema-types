import { ISourceEntity } from "../models";
import { ITriggersSchemaContext } from "../triggers";

type IndexType =
  // Text fields
  | "keyword"
  | "text"
  // Numeric fields
  | "integer"
  | "long"
  | "float"
  | "double"
  // Boolean fields
  | "boolean"
  // Date fields
  | "date"
  // Range fields
  | "integerRange"
  | "longRange"
  | "floatRange"
  | "doubleRange"
  | "dateRange";
// Geo fields
// | "geoPoint"
// | "geoShape";

interface FieldDescriptor {
  type: IndexType;
}

export abstract class IndexSchema<TSourceEntityProperties> {
  /**
   * The `triggers` method is where you define the source group and the types the schema should process.
   * @see {@link https://docs.enterspeed.com/reference/js/triggers} documentation for triggers.
   * {@label SCHEMA_FUNCTION}
   */
  triggers: (context: ITriggersSchemaContext) => void;

  /**
   * The `index` property is where you define the index.
   * @returns The index must be an object.
   */
  index: { fields: Record<string, FieldDescriptor> };

  /** The `properties` is where you map the source entity input to match the index
   * @returns The properties method must return an object.
   * {@label SCHEMA_FUNCTION}
   */
  properties: (
    sourceEntity: ISourceEntity<TSourceEntityProperties>
  ) => Record<string, unknown>;
}
