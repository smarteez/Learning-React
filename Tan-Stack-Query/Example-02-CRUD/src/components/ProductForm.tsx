/* eslint-disable @typescript-eslint/no-explicit-any */

import Button from "@mui/material/Button";

import LayoutControls from "../controls/layout/LayoutControls";
import FormControls from "../controls/form/FormControls";
import { useProductForm } from "../hooks/useProductForm";

const { FormRow, FormSection } = LayoutControls;

const {
  Textbox,
  TextArea,
  DropDown,
  NumberField,
  ReadonlyField,
  DateField,
  RatingField,
} = FormControls;

interface ProductFormProps {
  categories: any[];
  statusTypes: any[];
  onSubmit: (data: any) => void;
}

export const ProductForm = ({
  categories,
  statusTypes,
  onSubmit,
}: ProductFormProps) => {
  const {
    form,
    submit,
    productTypes,
    productTypesLoading,
  } = useProductForm(categories, statusTypes, onSubmit);

  const { control } = form;

  const withPleaseSelect = (options: any[]) => [
  { label: "Please Select", value: 0 },
  ...options,
];

  // Convert arrays into dropdown options
const categoryOptions = withPleaseSelect(
  categories.map((c) => ({
    label: c.name,
    value: c.id,
  }))
);

const statusOptions = withPleaseSelect(
  statusTypes.map((s) => ({
    label: s.label,
    value: s.id,
  }))
);

const typeOptions = withPleaseSelect(
  productTypes.map((t) => ({
    label: t.name,
    value: t.id,
  }))
);


  return (
    <form onSubmit={submit}>

      {/* PRODUCT DETAILS */}
      <FormSection title="Product Details">

        <FormRow xs={12}>
          <Textbox control={control} name="name" label="Product Name" />
        </FormRow>

        <FormRow xs={12}>
          <TextArea control={control} name="description" label="Description" />
        </FormRow>

        <FormRow xs={6}>
          <NumberField control={control} name="price" label="Price" min={0} />
        </FormRow>

        <FormRow xs={6}>
          <Textbox control={control} name="barcode" label="Barcode" />
        </FormRow>

        <FormRow xs={6}>
          <ReadonlyField control={control} name="sku" label="SKU" />
        </FormRow>

      </FormSection>

      {/* CLASSIFICATION */}
      <FormSection title="Classification">

        <FormRow xs={6}>
          <DropDown
            control={control}
            name="productCategoryId"
            label="Category"
            options={categoryOptions}
          />
        </FormRow>

        <FormRow xs={6}>
          <DropDown
            control={control}
            name="productTypeId"
            label="Product Type"
            options={typeOptions}
            disabled={productTypesLoading}
            loading={productTypesLoading}
          />
        </FormRow>

        <FormRow xs={6}>
          <DropDown
            control={control}
            name="statusTypeId"
            label="Status"
            options={statusOptions}
          />
        </FormRow>

      </FormSection>

      {/* ADDITIONAL INFO */}
      <FormSection title="Additional Information">

        <FormRow xs={6}>
          <RatingField control={control} name="rating" label="Rating" />
        </FormRow>

        <FormRow xs={6}>
          <DateField control={control} name="activationDate" label="Activation Date" />
        </FormRow>

      </FormSection>

      {/* AUDIT FIELDS */}
      <FormSection title="Audit Information">

        <FormRow xs={6}>
          <ReadonlyField control={control} name="createdAt" label="Created At" />
        </FormRow>

        <FormRow xs={6}>
          <ReadonlyField control={control} name="updatedAt" label="Updated At" />
        </FormRow>

      </FormSection>

      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Save Product
      </Button>
    </form>
  );
};
