"use client";

import { Form, Formik, FormikHelpers, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

type HackathonFormTypes = {
  company: string;
  date: string;
  type: string;
  title: string;
  description: string;
  content: string;
};

const initialValues: HackathonFormTypes = {
  company: "",
  date: "",
  type: "",
  title: "",
  description: "",
  content: "",
};

const validationSchema = Yup.object().shape({
  company: Yup.string().required("Company is required"),
  date: Yup.string().required("Date is required"),
  type: Yup.string().required("Type is required"),
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  content: Yup.string().required("Content is required"),
});

const CreateHackathon = () => {
  const handleHackathonSubmit = (
    values: HackathonFormTypes,
    { setErrors, resetForm }: FormikHelpers<HackathonFormTypes>
  ) => {
    console.log("Submitted Values:", values);
    resetForm();
  };

  return (
    <div className="p-4 border border-secondary-3 rounded-md shadow-md">
      <h4 className="text-2xl text-secondary-1 font-semibold text-center pb-2">
        Create A New Hackathon Event
      </h4>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleHackathonSubmit}
        // enableReinitialize
      >
        {({ values }) => (
          <Form>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <label htmlFor="company" className="font-bold text-secondary-2">
                  Company:
                </label>
                <Field
                  type="text"
                  name="company"
                  id="company"
                  className="border border-secondary-4 rounded-md focus:border-[1px] py-1 px-2"
                />
                <ErrorMessage
                  name="company"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="flex items-center justify-between gap-2 w-full">
                <div className="flex-1 flex flex-col gap-2">
                  <label htmlFor="date" className="font-bold text-secondary-2">
                    Date:
                  </label>
                  <Field
                    type="datetime-local"
                    name="date"
                    id="date"
                    className="border border-secondary-4 rounded-md focus:border-[1px] py-1 px-2"
                  />
                  <ErrorMessage
                    name="date"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="flex-1 flex flex-col gap-2">
                  <label htmlFor="type" className="font-bold text-secondary-2">
                    Type:
                  </label>
                  <Field
                    as="select"
                    name="type"
                    id="type"
                    className="border border-secondary-4 rounded-md focus:border-[1px] py-1 px-2 capitalize"
                  >
                    <option value="" disabled>
                      Select a type
                    </option>
                    {["hackathons", "university", "hiring"]?.map((item) => (
                      <option key={item} value={item} className="capitalize">
                        {item}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="type"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="title" className="font-bold text-secondary-2">
                  Title:
                </label>
                <Field
                  type="text"
                  name="title"
                  id="title"
                  className="border border-secondary-4 rounded-md focus:border-[1px] py-1 px-2"
                />
                <ErrorMessage
                  name="title"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="description"
                  className="font-bold text-secondary-2"
                >
                  Description:
                </label>
                <Field
                  type="text"
                  name="description"
                  id="description"
                  className="border border-secondary-4 rounded-md focus:border-[1px] py-1 px-2"
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="content" className="font-bold text-secondary-2">
                  Content:
                </label>
                <Field
                  as="textarea"
                  name="content"
                  id="content"
                  className="border border-secondary-4 rounded-md focus:border-[1px] py-1 px-2 resize-none h-[100px]"
                />
                <ErrorMessage
                  name="content"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <button
                type="submit"
                className="p-2 bg-primary-1 text-white rounded-md hover:opacity-90 w-[150px]"
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateHackathon;
