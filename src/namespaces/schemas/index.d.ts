import { IPropertiesContext } from "../../properties";
import { BaseFullSchema } from "../../schemas";
import { ISchema } from "../../schemas/schema";

export namespace Schemas {

    export class Full<TSourceEntityProperties = Record<string, any | undefined>> extends BaseFullSchema<Record<string, any>, Record<string, unknown>, TSourceEntityProperties> {
    }

    export class Partial<TInput = any> implements ISchema {
        /**
         * The `properties` method is where you define the output that goes into the view you fetch from the delivery API.
         * @param input
         * @param context
         * @returns The properties method must return an object with the data you want to include in your view.
         * @see {@link https://docs.enterspeed.com/reference/js/properties} documentation for properties. 
         * {@label SCHEMA_FUNCTION}
         */
        properties: (
          input: TInput,
          context: IPropertiesContext
        ) => Promise<Record<string, any>> | Record<string, any>;
      }
}