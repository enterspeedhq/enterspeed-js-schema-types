import { BaseFullSchema } from "../../schemas/base-full-schema";

/**
 * Destination
 */
export namespace Destinations {
    export namespace Shopify {
        export namespace Schemas {
            export class Product<TSourceEntityProperties = Record<string, any | undefined>> extends BaseFullSchema<Types.ProductProperties, Types.ProductDestinationOptions, TSourceEntityProperties> {
            }
        }

        export namespace Types {

            class ProductDestinationOptions {
                customId: string
                shopifyEntityType: 'PRODUCT'
                statusForNewProducts?: 'ACTIVE' | 'DRAFT' | 'ARCHIVED' | 'UNLISTED'
                setOnlyHandleForNewProducts?: boolean
                // statusForDeletedProducts?: 'Delete' | 'Draft' | 'Archived' | 'Unlisted'
            }

            interface ProductProperties  {
                handle?: string
                title?: string
                descriptionHtml?: string
                seo?: Seo
                status?: 'ACTIVE' | 'DRAFT' | 'ARCHIVED' | 'UNLISTED'
                // options?: string[]
                vendor?: string
                productType?: string
                tags?: string[]
                templateSuffix?: string
                // collections?: string[]
                publishToPublications?: PublishToPublication[]
                files?: File[]
                variants?: Variant[]
                metafields?: Metafield[]
                translations?: Translations
            }

            // Subtypes

            interface Seo  {
                title?: string
                description?: string
            }

            interface PublishToPublication  {
                name: string
            }

            interface File  {
                alt?: string
                contentType?: 'EXTERNAL_VIDEO' | 'MODEL_3D' | 'IMAGE' | 'VIDEO' | 'FILE'
                fileName?: string
                originalSource?: string
            }

            interface Variant  {
                sku: string
                // fulfillmentService?: string
                // inventoryPolicy?: 'DENY' | 'CONTINUE'
                // inventoryManagementPolicy?: string
                price?: number
                compareAtPrice?: number
                prices?: PriceListItem[]
                inventoryItem?: InventoryItem
                // inventoryQuantities?: InventoryQuantities
                // Taxable?: boolean
                // requiresShipping?: boolean
                barcode?: string
                // cost?: number
                // hsCode?: string
                // countryOfOrigin?: string
                // OptionValues?: OptionValue[]
                // metafields?: Metafield[]
            }

            interface InventoryQuantities  {
                locationName: string
                quantity: number
            }

            interface InventoryItem  {
                measurement: Measurement
            }

            interface Measurement  {
                // shippingPackageName: string
                weight: Weight
            }

            interface Weight  {
                unit: 'GRAMS' | 'KILOGRAMS' | 'OUNCES' | 'POUNDS'
                value: number
            }

            interface PriceListItem  {
                priceListName: string
                compareAtPrice?: CurrencyPrice
                price: CurrencyPrice
            }

            interface CurrencyPrice  {
                currencyCode: string
                amount: number
            }

            interface OptionValue  {
                Name: string
                value: string
            }

            interface Metafield  {
                namespace: string
                key: string
                value?: any
                type: 'boolean' | 'color' | 'date' | 'date_time' | 'dimension' | 'id' | 'json' | 'link' | 'money' | 'multi_line_text_field' | 'number_decimal' | 'number_integer' | 'rating' | 'rich_text_field' | 'single_line_text_field' | 'url' | 'volume' | 'weight' | 'collection_reference' | 'customer_reference' | 'file_reference' | 'metaobject_reference' | 'mixed_reference' | 'page_reference' | 'product_reference' | 'product_taxonomy_value_reference' | 'variant_reference' | 'list.collection_reference' | 'list.color' | 'list.customer_reference' | 'list.date' | 'list.date_time' | 'list.dimension' | 'list.file_reference' | 'list.id' | 'list.link' | 'list.metaobject_reference' | 'list.mixed_reference' | 'list.number_decimal' | 'list.number_integer' | 'list.page_reference' | 'list.product_reference' | 'list.product_taxonomy_value_reference' | 'list.rating' | 'list.single_line_text_field' | 'list.url' | 'list.variant_reference' | 'list.volume' | 'list.weight'
            }

            interface Translations  {
                product?: ProductTranslations
            }

            interface ProductTranslations  {
                languages: string[]
                title?: { [key: string]: string; }
                descriptionHtml?: { [key: string]: string; }
                seoTitle?: { [key: string]: string; }
                seoDescription?: { [key: string]: string; }
                type?: { [key: string]: string; }
                // options?: { [key: string]: string[]; }
                variants?: { [key: string]: VariantTranslation[]; }
                metafields?: { [key: string]: MetafieldTranslation; }
            }

            interface VariantTranslation  {
                sku: string
                // options?: { [key: string]: string[]; }
                // metafields?: { [key: string]: MetafieldTranaslation; }
            }

            interface MetafieldTranslation  {
                namespace: string
                key: string
                translations?: { [key: string]: string; }
            }
        }
    }

    export namespace Relewise {
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

    export namespace Speedtrain {
        export namespace Schemas {
            export class Schema<TReturnProperties = Record<string, any | undefined>, TSourceEntityProperties = Record<string, any | undefined>> extends BaseFullSchema<TReturnProperties, Types.DestinationOptions, TSourceEntityProperties> {
            }
        }

        export namespace Types {
            class DestinationOptions {
                indexAlias: string
                actions?: Action[]
            }

            // Subtypes

            interface Action  {
                taskConfiguration: TaskConfiguration
                // Controls whether generated content is published automatically or held for review.
                // null defers to the default approval mode configured in Speedtrain.
                // 'AUTO_APPROVE' publishes immediately without human review.
                // 'SMART_APPROVAL' auto-approves when output confidence is high, otherwise routes to manual review.
                // 'MANUAL' holds all outputs for human review regardless of confidence.
                lastMilePolicy: 'AUTO_APPROVE' | 'SMART_APPROVAL' | 'MANUAL' | null
            }

            interface TaskConfiguration  {
                // Identifies which Speedtrain workflow to run, e.g. 'new-product-description'.
                alias: string
                // Scopes the workflow to a specific dimension variant, e.g. { Language: 'Norwegian' }.
                // Omit if the workflow has no bindings.
                binding?: { [key: string]: string; }
            }
        }
    }
}