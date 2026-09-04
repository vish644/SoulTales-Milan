// import React from "react";
// import { useForm } from "react-hook-form";
// import Input from "./Input";
// import Button from "./Button";

// const Form = () => {
//   const gridFields = [
//     {
//       name: "name",
//       label: "Name",
//       placeholder: "Your full name",
//       rules: { required: "Name is required" },
//     },
//     {
//       name: "city",
//       label: "City",
//       placeholder: "Where you're based",
//       rules: { required: "City is required" },
//     },
//     {
//       name: "labelName",
//       label: "Label/Boutique Name",
//       placeholder: "Your label or boutique",
//       rules: { required: "Label/Boutique name is required" },
//     },
//     {
//       name: "yearsRunning",
//       label: "Years Running Your Label",
//       placeholder: "eg. 7",
//       rules: {
//         required: "This field is required",
//         pattern: {
//           value: /^[0-9]+$/,
//           message: "Enter a valid number",
//         },
//       },
//     },
//   ];

//   const stackedFields = [
//     {
//       name: "investment",
//       label: "Investment",
//       subDescription:
//         "Roughly how much you're able to invest in this experience.",
//       placeholder: "eg. ₹5,00,000",
//       rules: { required: "Investment amount is required" },
//     },
//     {
//       name: "interests",
//       label: "What Are You Interested In?",
//       type: "checkbox",
//       subDescription: "Select all that apply.",
//       options: ["Yes", "I'd like to know more"],
//       rules: { required: "Please select at least one option" },
//     },
//     {
//       name: "whatDrawsYou",
//       label: "What Draws You To Milan? (optional)",
//       type: "textarea",
//       placeholder: "In your own words...",
//       rules: {}, // optional field, no validation
//     },
//   ];

//   const allFields = [...gridFields, ...stackedFields];

//   const defaultValues = allFields.reduce((acc, field) => {
//     acc[field.name] = field.type === "checkbox" ? "" : "";
//     return acc;
//   }, {});

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm({ defaultValues });

//   const onSubmit = (data) => {
//     console.log("Submitted values:", data);
//     // send `data` to your API here
//     reset(defaultValues);
//   };

//   return (
//     <section className="flex flex-col w-full h-full max-h-[85vh]">
//       {/* Fixed header */}
//       <div className="shrink-0 flex flex-col items-start gap-4 justify-center">
//         <h2>Request Your Invitation</h2>
//         <p className="text-sm">
//           This is the beginning of a conversation, not a booking. We review
//           every application personally.
//         </p>
//       </div>

//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="flex flex-col flex-1 min-h-0 mt-4"
//       >
//         {/* Scrollable inputs */}
//         <div className="flex flex-col gap-6 overflow-y-auto flex-1 pr-2">
//           {/* First 4 fields: 2 columns x 2 rows */}
//           <div className="grid grid-cols-2 gap-6">
//             {gridFields.map((data, index) => (
//               <Input
//                 key={index}
//                 name={data.name}
//                 label={data.label}
//                 placeholder={data.placeholder}
//                 subDescription={data.subDescription}
//                 type={data.type}
//                 options={data.options}
//                 register={register}
//                 rules={data.rules}
//                 error={errors[data.name]}
//               />
//             ))}
//           </div>

//           {/* Remaining fields: stacked full width */}
//           {stackedFields.map((data, index) => (
//             <div key={index}>
//               <Input
//                 name={data.name}
//                 label={data.label}
//                 placeholder={data.placeholder}
//                 subDescription={data.subDescription}
//                 type={data.type}
//                 options={data.options}
//                 register={register}
//                 rules={data.rules}
//                 error={errors[data.name]}
//               />
//             </div>
//           ))}
//         </div>

//         {/* Fixed footer */}
//         <div className="shrink-0 pt-4 w-full flex flex-col items-center justify-center gap-3">
//           <Button type="submit" title="Submit Your Application" className="" />
//           <p className="text-xs">
//             We respond to every application within 5 working days.
//           </p>
//         </div>
//       </form>
//     </section>
//   );
// };

// export default Form;

import React from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";

const Form = () => {
  const gridFields = [
    {
      name: "name",
      label: "Name",
      placeholder: "Your full name",
      rules: { required: "Name is required" },
    },
    {
      name: "city",
      label: "City",
      placeholder: "Where you're based",
      rules: { required: "City is required" },
    },
    {
      name: "labelName",
      label: "Label/Boutique Name",
      placeholder: "Your label or boutique",
      rules: { required: "Label/Boutique name is required" },
    },
    {
      name: "yearsRunning",
      label: "Years Running Your Label",
      placeholder: "eg. 7",
      rules: {
        required: "This field is required",
        pattern: {
          value: /^[0-9]+$/,
          message: "Enter a valid number",
        },
      },
    },
  ];

  const stackedFields = [
    {
      name: "investment",
      label: "Investment",
      subDescription:
        "Roughly how much you're able to invest in this experience.",
      placeholder: "eg. ₹5,00,000",
      rules: { required: "Investment amount is required" },
    },
    {
      name: "interests",
      label: "What Are You Interested In?",
      type: "checkbox",
      subDescription: "Select all that apply.",
      options: ["Yes", "I'd like to know more"],
      rules: { required: "Please select at least one option" },
    },
    {
      name: "whatDrawsYou",
      label: "What Draws You To Milan? (optional)",
      type: "textarea",
      placeholder: "In your own words...",
      rules: {}, // optional field, no validation
    },
  ];

  const allFields = [...gridFields, ...stackedFields];

  const defaultValues = allFields.reduce((acc, field) => {
    acc[field.name] = field.type === "checkbox" ? "" : "";
    return acc;
  }, {});

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues });

  const onSubmit = (data) => {
    console.log("Submitted values:", data);
    // send `data` to your API here
    reset(defaultValues);
  };

  return (
    <section className="flex flex-col w-full h-full max-h-[85vh] ">
      {/* Fixed header */}
      <div className="shrink-0 flex flex-col items-start gap-4 justify-center">
        <h2>Request Your Invitation</h2>
        <p className="text-xs sm:text-sm">
          This is the beginning of a conversation, not a booking. We review
          every application personally.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col flex-1 min-h-0 mt-4 "
      >
        {/* Scrollable inputs */}
        <div className="flex flex-col gap-6 overflow-y-auto flex-1 pr-2 scrollbar-hide">
          {/* First 4 fields: 1 column on mobile, 2 columns x 2 rows from sm up */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {gridFields.map((data, index) => (
              <Input
                key={index}
                name={data.name}
                label={data.label}
                placeholder={data.placeholder}
                subDescription={data.subDescription}
                type={data.type}
                options={data.options}
                register={register}
                rules={data.rules}
                error={errors[data.name]}
              />
            ))}
          </div>

          {/* Remaining fields: stacked full width */}
          {stackedFields.map((data, index) => (
            <div key={index}>
              <Input
                name={data.name}
                label={data.label}
                placeholder={data.placeholder}
                subDescription={data.subDescription}
                type={data.type}
                options={data.options}
                register={register}
                rules={data.rules}
                error={errors[data.name]}
              />
            </div>
          ))}
        </div>

        {/* Fixed footer */}
        <div className="shrink-0 pt-4 w-full flex flex-col items-center justify-center gap-3">
          <Button type="submit" title="Submit Your Application" className="" />
          <p className="text-xs">
            We respond to every application within 5 working days.
          </p>
        </div>
      </form>
    </section>
  );
};

export default Form;
