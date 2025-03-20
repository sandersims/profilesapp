/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type IncomeDataCreateFormInputValues = {
    firstName?: string;
    lastName?: string;
    position?: string;
    institution?: string;
    structuralUnit?: string;
    salary?: number;
    workload?: number;
};
export declare type IncomeDataCreateFormValidationValues = {
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    position?: ValidationFunction<string>;
    institution?: ValidationFunction<string>;
    structuralUnit?: ValidationFunction<string>;
    salary?: ValidationFunction<number>;
    workload?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type IncomeDataCreateFormOverridesProps = {
    IncomeDataCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    position?: PrimitiveOverrideProps<TextFieldProps>;
    institution?: PrimitiveOverrideProps<TextFieldProps>;
    structuralUnit?: PrimitiveOverrideProps<TextFieldProps>;
    salary?: PrimitiveOverrideProps<TextFieldProps>;
    workload?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type IncomeDataCreateFormProps = React.PropsWithChildren<{
    overrides?: IncomeDataCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: IncomeDataCreateFormInputValues) => IncomeDataCreateFormInputValues;
    onSuccess?: (fields: IncomeDataCreateFormInputValues) => void;
    onError?: (fields: IncomeDataCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: IncomeDataCreateFormInputValues) => IncomeDataCreateFormInputValues;
    onValidate?: IncomeDataCreateFormValidationValues;
} & React.CSSProperties>;
export default function IncomeDataCreateForm(props: IncomeDataCreateFormProps): React.ReactElement;
