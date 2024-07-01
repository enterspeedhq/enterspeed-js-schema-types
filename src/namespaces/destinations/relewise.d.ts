import { BaseFullSchema } from "../../schemas/base-full-schema";

/**
 * Relewise destination
 */
export namespace Destinations.Relewise {

    export namespace Schemas {
        
        export class Product<TSourceEntityProperties = Record<string, any | undefined>> extends BaseFullSchema<Types.ProductProperties, Types.ProductDestinationOptions, TSourceEntityProperties> {
        }
        
        export class Content<TSourceEntityProperties = Record<string, any | undefined>> extends BaseFullSchema<Types.ContentProperties, Types.ContentDestinationOptions, TSourceEntityProperties> {
        }

        export class Brand<TSourceEntityProperties = Record<string, any | undefined>> extends BaseFullSchema<Types.BrandProperties, Types.BrandDestinationOptions, TSourceEntityProperties> {
        }

        export class ProductCategory<TSourceEntityProperties = Record<string, any | undefined>> extends BaseFullSchema<Types.ProductCategoryProperties, Types.ProductCategoryDestinationOptions, TSourceEntityProperties> {
        }

        export class ContentCategory<TSourceEntityProperties = Record<string, any | undefined>> extends BaseFullSchema<Types.ContentCategoryProperties, Types.ContentCategoryDestinationOptions, TSourceEntityProperties> {
        }
    }

    export namespace Types {

        interface ProductProperties  {
            product: {
                displayName?: Multilingual
                assortments?: number[]
                listPrice?: MultiCurrency
                salesPrice?: MultiCurrency
                CategoryPaths?: CategoryPath[]
                brand?: Brand
                custom?: { [key: string]: string; } 
                data?: { [key: string]: DataValue; } 
            }
            variants?: {
                id: string
                displayName?: Multilingual
                assortments?: number[]
                listPrice?: MultiCurrency
                salesPrice?: MultiCurrency
                custom?: { [key: string]: string; } 
                specification?: { [key: string]: string; } 
                data?: { [key: string]: DataValue; } 
            }[]
        }

        class ProductDestinationOptions {
            id: string
            relewiseEntityType: 'product'
        }

        interface ContentProperties  {
            displayName?: Multilingual
            assortments?: number[]
            CategoryPaths?: CategoryPath[]
            data?: { [key: string]: DataValue; } 
            custom?: { [key: string]: string; } 
        }

        class ContentDestinationOptions {
            id: string
            relewiseEntityType: 'content'
        }

        interface BrandProperties  {
            displayName?: string
            assortments?: number[]
            data?: { [key: string]: DataValue; } 
        }

        class BrandDestinationOptions {
            id: string
            relewiseEntityType: 'brand'
        }

        interface ProductCategoryProperties  {
            displayName?: Multilingual
            assortments?: number[]
            CategoryPaths?: CategoryPath[]
            data?: { [key: string]: DataValue; } 
            custom?: { [key: string]: string; } 
        }

        class ProductCategoryDestinationOptions {
            id: string
            relewiseEntityType: 'productCategory'
        }

        interface ContentCategoryProperties  {
            displayName?: Multilingual
            assortments?: number[]
            CategoryPaths?: CategoryPath[]
            data?: { [key: string]: DataValue; } 
            custom?: { [key: string]: string; } 
        }

        class ContentCategoryDestinationOptions {
            id: string
            relewiseEntityType: 'contentCategory'
        }

        // Subtypes

        interface Brand  {
            id: string
            displayName?: string
            assortments?: number[]
            data?: { [key: string]: DataValue; } 
        }

        interface Multilingual  {
            values: MultilingualValue[]
        }

        interface MultilingualValue  {
            language: Language
            text: string
        }

        interface Language  {
            value: string
        }

        interface MultiCurrency  {
            values?: Money[]
        }

        interface Money  {
            amount: number,
            currency: Currency
        }

        interface Currency  {
            value: string
        }

        interface CategoryPath  {
            breadcrumbPathStartingFromRoot: CategoryNameAndId[]
        }

        interface CategoryNameAndId  {
            id: string
            displayName?: Multilingual
        }

        interface DataValue  {
            value: any
            type: 'string' | 'double' | 'boolean' | 'multilingual' | 'money' | 'multiCurrency' | 'stringList' | 'doubleList' | 'booleanList' | 'multilingualCollection' | 'object' | 'objectList'
        }
    }
}