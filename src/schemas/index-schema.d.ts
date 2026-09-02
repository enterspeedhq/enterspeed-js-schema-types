import { ISourceEntity } from "../models";
import { ITriggersSchemaContext } from "../triggers";

type LeafIndexType =
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
  | "dateRange"
  // List fields
  | "keyword[]"
  | "text[]"
  | "integer[]"
  | "long[]"
  | "float[]"
  | "double[]"
  | "boolean[]"
  | "date[]";
// Geo fields
// | "geoPoint"
// | "geoShape";

// Container types are not field mappers in Elasticsearch: they hold other fields and accept no
// field metadata (`meta`). This is structural, not about searchability — `nested`, when it arrives,
// is fully indexed and rejects `meta` too, so it belongs in this union rather than the leaf one.
type ContainerIndexType = "object";

type IndexType = LeafIndexType | ContainerIndexType;

interface IFieldMetadata {
  description?: string;
}

interface IIndexMetadata {
  description?: string;
}

type FieldDescriptor =
  | {
      type: LeafIndexType;
      metadata?: IFieldMetadata;
    }
  | {
      /**
       * Container fields take no `metadata` — Elasticsearch only allows field metadata on leaf
       * field types. Use a JavaScript comment in the schema to document the field instead.
       */
      type: ContainerIndexType;
      metadata?: never;
    };

export abstract class IndexSchema<TSourceEntityProperties> {
  /**
   * The `triggers` method is where you define the source group and the types the schema should process.
   * @see {@link https://docs.enterspeed.com/reference/js/index-schema/triggers} documentation for triggers.
   * {@label SCHEMA_FUNCTION}
   */
  triggers: (context: ITriggersSchemaContext) => void;

  /**
   * The `index` property is where you define the index.
   * @returns The index must be an object.
   */
  index: { fields: Record<string, FieldDescriptor>; metadata?: IIndexMetadata };

  /** The `properties` is where you map the source entity input to match the index
   * @returns The properties method must return an object.
   * {@label SCHEMA_FUNCTION}
   */
  properties: (
    sourceEntity: ISourceEntity<TSourceEntityProperties>
  ) => Record<string, unknown>;
}
