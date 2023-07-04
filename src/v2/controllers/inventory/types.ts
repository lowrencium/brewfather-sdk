import { GetAllOptions } from '../../types';

export type UpdateInventoryParams =
  | {
      /**
       * Adjust the existing inventory amount by the given amount
       */
      inventory_adjust: number;
    }
  | {
      /**
       * Set the inventory amount to the given value
       */
      inventory: number;
    };

export type GetAllInventoryOptions<T extends object> = GetAllOptions<T> &
  (
    | {
        /**
         * If true, only include items with inventory < 0
         * @default false
         */
        inventory_negative?: boolean;
      }
    | {
        /**
         * If true, only include items with inventory > 0
         * Results will be ordered by inventory amount instead of `_id`
         * @default false
         */
        inventory_exists?: boolean;
      }
  );
