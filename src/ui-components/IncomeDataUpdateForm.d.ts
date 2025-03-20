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
export declare type IncomeDataUpdateFormInputValues = {
    firstName?: string;
    lastName?: string;
    position?: string;
    institution?: string;
    structuralUnit?: string;
    salary?: number;
    workload?: number;
};
export declare type IncomeDataUpdateFormValidationValues = {
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    position?: ValidationFunction<string>;
    institution?: ValidationFunction<string>;
    structuralUnit?: ValidationFunction<string>;
    salary?: ValidationFunction<number>;
    workload?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type IncomeDataUpdateFormOverridesProps = {
    IncomeDataUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    position?: PrimitiveOverrideProps<TextFieldProps>;
    institution?: PrimitiveOverrideProps<TextFieldProps>;
    structuralUnit?: PrimitiveOverrideProps<TextFieldProps>;
    salary?: PrimitiveOverrideProps<TextFieldProps>;
    workload?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type IncomeDataUpdateFormProps = React.PropsWithChildren<{
    overrides?: IncomeDataUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    incomeData?: any;
    onSubmit?: (fields: IncomeDataUpdateFormInputValues) => IncomeDataUpdateFormInputValues;
    onSuccess?: (fields: IncomeDataUpdateFormInputValues) => void;
    onError?: (fields: IncomeDataUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: IncomeDataUpdateFormInputValues) => IncomeDataUpdateFormInputValues;
    onValidate?: IncomeDataUpdateFormValidationValues;
} & React.CSSProperties>;
export default function IncomeDataUpdateForm(props: IncomeDataUpdateFormProps): React.ReactElement;
