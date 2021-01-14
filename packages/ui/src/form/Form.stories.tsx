import * as React from "react";
import InputField from "../inputField";
import useForm from "./useForm";
import FormRow from "./FormRow";
import FormSubmit from "./FormSubmit";
import FormSection from "./FormSection";
import FormCmp from "./Form";

export const Form: React.FC = () => {
  const { onSubmit, register } = useForm({
    onSubmit: (data) => {
      alert(JSON.stringify(data));
    },
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
    },
  });

  return (
    <FormCmp onSubmit={onSubmit}>
      <FormSection
        title="Personal Info"
        description="Please provide your personal information. We will keep this private."
      >
        <FormRow>
          <InputField
            type="text"
            name="email"
            ref={register({ required: true })}
            required={true}
            label="Email"
            placeholder="Provide email address..."
          />
        </FormRow>
        <FormRow>
          <InputField
            type="text"
            name="firstName"
            ref={register}
            label="First Name"
            placeholder="Provide first name..."
          />
        </FormRow>
        <FormRow>
          <InputField
            type="text"
            name="lastName"
            ref={register}
            label="Last Name"
            placeholder="Provide last name..."
          />
        </FormRow>
      </FormSection>
      <FormSection
        title="Billing Info"
        description="Please provide your billing information."
      >
        <FormRow>
          <InputField
            type="text"
            name="street"
            ref={register({ required: true })}
            required={true}
            label="Street Name"
            placeholder="Provide street name..."
          />
        </FormRow>
        <FormRow>
          <InputField
            type="text"
            name="city"
            ref={register({ required: true })}
            required={true}
            label="City"
            placeholder="Provide city name..."
          />
        </FormRow>
      </FormSection>
      <FormSection>
        <FormSubmit submitLabel="Submit" cancelLabel="Cancel" />
      </FormSection>
    </FormCmp>
  );
};
