/* eslint-disable @typescript-eslint/no-explicit-any */

import { useMemo } from "react";

/**
 * useDropdownOptions Hook
 *
 * Converts any array of objects into dropdown-ready options:
 *    { label: string, value: number | string }
 *
 * PARAMETERS:
 * @param items - (required) Array of objects to convert.
 *                Type: any[]
 *
 * @param labelKey - (required) The property name to use as the label.
 *                   Type: string
 *                   Example: "name"
 *
 * @param valueKey - (required) The property name to use as the value.
 *                   Type: string
 *                   Example: "id"
 *
 * @param includePlaceholder - (optional) Adds "Please Select" as the first option.
 *                             Type: boolean
 *                             Default: true
 *
 * RETURNS:
 *  Dropdown option array:
 *    { label: string; value: any }[]
 *
 * NOTES:
 * - Memoized for performance.
 * - Works with ProductCategory, ProductType, or any other model.
 * - Keeps your form code clean and declarative.
 */
export const useDropdownOptions = (
  items: any[],
  labelKey: string,
  valueKey: string,
  includePlaceholder: boolean = true
) => {
  return useMemo(() => {
    const options = items.map((item) => ({
      label: item[labelKey],
      value: item[valueKey],
    }));

    if (includePlaceholder) {
      return [{ label: "Please Select", value: 0 }, ...options];
    }

    return options;
  }, [items, labelKey, valueKey, includePlaceholder]);
};
