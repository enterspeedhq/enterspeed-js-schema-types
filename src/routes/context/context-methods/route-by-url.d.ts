import { Nullable } from "../../../types";
import { IRouteBuilder } from "../routes";

export interface IRouteByUrlBuilder extends IRouteBuilder {
  redirects(redirects: Nullable<string[]>): this;
}