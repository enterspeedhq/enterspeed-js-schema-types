export interface ISourceEntity<TProperties> {
  id: string;
  type: string;
  originId: string;
  originParentId?: string;
  url?: string;
  redirects?: string[];
  properties: TProperties;
  updatedAt?: string;
}