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
export declare type UserProfileUpdateFormInputValues = {
    email?: string;
    profileOwner?: string;
};
export declare type UserProfileUpdateFormValidationValues = {
    email?: ValidationFunction<string>;
    profileOwner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserProfileUpdateFormOverridesProps = {
    UserProfileUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    profileOwner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserProfileUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserProfileUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    userProfile?: any;
    onSubmit?: (fields: UserProfileUpdateFormInputValues) => UserProfileUpdateFormInputValues;
    onSuccess?: (fields: UserProfileUpdateFormInputValues) => void;
    onError?: (fields: UserProfileUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserProfileUpdateFormInputValues) => UserProfileUpdateFormInputValues;
    onValidate?: UserProfileUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserProfileUpdateForm(props: UserProfileUpdateFormProps): React.ReactElement;
