/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createIncomeData } from "../graphql/mutations";
const client = generateClient();
export default function IncomeDataCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    firstName: "",
    lastName: "",
    position: "",
    institution: "",
    structuralUnit: "",
    salary: "",
    workload: "",
  };
  const [firstName, setFirstName] = React.useState(initialValues.firstName);
  const [lastName, setLastName] = React.useState(initialValues.lastName);
  const [position, setPosition] = React.useState(initialValues.position);
  const [institution, setInstitution] = React.useState(
    initialValues.institution
  );
  const [structuralUnit, setStructuralUnit] = React.useState(
    initialValues.structuralUnit
  );
  const [salary, setSalary] = React.useState(initialValues.salary);
  const [workload, setWorkload] = React.useState(initialValues.workload);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setFirstName(initialValues.firstName);
    setLastName(initialValues.lastName);
    setPosition(initialValues.position);
    setInstitution(initialValues.institution);
    setStructuralUnit(initialValues.structuralUnit);
    setSalary(initialValues.salary);
    setWorkload(initialValues.workload);
    setErrors({});
  };
  const validations = {
    firstName: [],
    lastName: [],
    position: [],
    institution: [],
    structuralUnit: [],
    salary: [],
    workload: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          firstName,
          lastName,
          position,
          institution,
          structuralUnit,
          salary,
          workload,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createIncomeData.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "IncomeDataCreateForm")}
      {...rest}
    >
      <TextField
        label="First name"
        isRequired={false}
        isReadOnly={false}
        value={firstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName: value,
              lastName,
              position,
              institution,
              structuralUnit,
              salary,
              workload,
            };
            const result = onChange(modelFields);
            value = result?.firstName ?? value;
          }
          if (errors.firstName?.hasError) {
            runValidationTasks("firstName", value);
          }
          setFirstName(value);
        }}
        onBlur={() => runValidationTasks("firstName", firstName)}
        errorMessage={errors.firstName?.errorMessage}
        hasError={errors.firstName?.hasError}
        {...getOverrideProps(overrides, "firstName")}
      ></TextField>
      <TextField
        label="Last name"
        isRequired={false}
        isReadOnly={false}
        value={lastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName: value,
              position,
              institution,
              structuralUnit,
              salary,
              workload,
            };
            const result = onChange(modelFields);
            value = result?.lastName ?? value;
          }
          if (errors.lastName?.hasError) {
            runValidationTasks("lastName", value);
          }
          setLastName(value);
        }}
        onBlur={() => runValidationTasks("lastName", lastName)}
        errorMessage={errors.lastName?.errorMessage}
        hasError={errors.lastName?.hasError}
        {...getOverrideProps(overrides, "lastName")}
      ></TextField>
      <TextField
        label="Position"
        isRequired={false}
        isReadOnly={false}
        value={position}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              position: value,
              institution,
              structuralUnit,
              salary,
              workload,
            };
            const result = onChange(modelFields);
            value = result?.position ?? value;
          }
          if (errors.position?.hasError) {
            runValidationTasks("position", value);
          }
          setPosition(value);
        }}
        onBlur={() => runValidationTasks("position", position)}
        errorMessage={errors.position?.errorMessage}
        hasError={errors.position?.hasError}
        {...getOverrideProps(overrides, "position")}
      ></TextField>
      <TextField
        label="Institution"
        isRequired={false}
        isReadOnly={false}
        value={institution}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              position,
              institution: value,
              structuralUnit,
              salary,
              workload,
            };
            const result = onChange(modelFields);
            value = result?.institution ?? value;
          }
          if (errors.institution?.hasError) {
            runValidationTasks("institution", value);
          }
          setInstitution(value);
        }}
        onBlur={() => runValidationTasks("institution", institution)}
        errorMessage={errors.institution?.errorMessage}
        hasError={errors.institution?.hasError}
        {...getOverrideProps(overrides, "institution")}
      ></TextField>
      <TextField
        label="Structural unit"
        isRequired={false}
        isReadOnly={false}
        value={structuralUnit}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              position,
              institution,
              structuralUnit: value,
              salary,
              workload,
            };
            const result = onChange(modelFields);
            value = result?.structuralUnit ?? value;
          }
          if (errors.structuralUnit?.hasError) {
            runValidationTasks("structuralUnit", value);
          }
          setStructuralUnit(value);
        }}
        onBlur={() => runValidationTasks("structuralUnit", structuralUnit)}
        errorMessage={errors.structuralUnit?.errorMessage}
        hasError={errors.structuralUnit?.hasError}
        {...getOverrideProps(overrides, "structuralUnit")}
      ></TextField>
      <TextField
        label="Salary"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={salary}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              position,
              institution,
              structuralUnit,
              salary: value,
              workload,
            };
            const result = onChange(modelFields);
            value = result?.salary ?? value;
          }
          if (errors.salary?.hasError) {
            runValidationTasks("salary", value);
          }
          setSalary(value);
        }}
        onBlur={() => runValidationTasks("salary", salary)}
        errorMessage={errors.salary?.errorMessage}
        hasError={errors.salary?.hasError}
        {...getOverrideProps(overrides, "salary")}
      ></TextField>
      <TextField
        label="Workload"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={workload}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              position,
              institution,
              structuralUnit,
              salary,
              workload: value,
            };
            const result = onChange(modelFields);
            value = result?.workload ?? value;
          }
          if (errors.workload?.hasError) {
            runValidationTasks("workload", value);
          }
          setWorkload(value);
        }}
        onBlur={() => runValidationTasks("workload", workload)}
        errorMessage={errors.workload?.errorMessage}
        hasError={errors.workload?.hasError}
        {...getOverrideProps(overrides, "workload")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
