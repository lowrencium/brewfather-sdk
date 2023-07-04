export type GetAllOptions<T extends object> = {
  /**
   * Amount of items to fetch
   * Defaults to 10. Max 50.
   * @default 10
   */
  limit?: number;

  /**
   * Identifier of the last item in the previous request
   */
  start_after?: string;

  /**
   * The field to order by
   * @default '_id'
   */
  order_by?: keyof T;

  /**
   * Direction to order results
   * @default 'asc'
   */
  order_by_direction?: 'asc' | 'desc';
};
