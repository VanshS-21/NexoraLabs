import type { UseFormRegisterReturn } from "react-hook-form";

import type { InquiryField } from "@/types/content";

type FieldProps = {
  field: InquiryField;
  error?: string;
  registerProps: UseFormRegisterReturn;
};

export const Field = ({ field, error, registerProps }: FieldProps) => {
  const inputId = `inquiry-${field.id}`;

  return (
    <label className="field" htmlFor={inputId}>
      <span>
        {field.label}
        {field.required ? <em aria-hidden="true">*</em> : null}
      </span>
      {field.type === "textarea" ? (
        <textarea id={inputId} placeholder={field.placeholder} rows={5} {...registerProps} />
      ) : field.type === "select" ? (
        <select id={inputId} defaultValue="" {...registerProps}>
          <option value="" disabled>
            Select one
          </option>
          {field.options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input id={inputId} type={field.type} placeholder={field.placeholder} {...registerProps} />
      )}
      {error ? <small>{error}</small> : null}
    </label>
  );
};
