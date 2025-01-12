"use client";

import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

type LoginFormTypes = {
  email: string;
  password: string;
};

const initialValues: LoginFormTypes = {
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")

});

const LoginForm = () => {
  const handleRegister = (
    values: LoginFormTypes,
    { resetForm }: { resetForm: () => void }
  ) => {
    console.log("Form submitted with values:", values);
    resetForm();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-secondary-1">
            User Login
          </h2>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleRegister}
        >
          {({}) => (
            <Form className="mt-8 space-y-6" autoComplete="off">
              <div className="rounded-md shadow-sm space-y-4">


                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-secondary-2"
                  >
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-1 focus:border-primary-1 sm:text-sm"
                    placeholder="example@email.com"
                    autoComplete="off"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-secondary-2"
                  >
                    Password
                  </label>
                  <Field
                    type="password"
                    name="password"
                    id="password"
                    className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-1 focus:border-primary-1 sm:text-sm"
                    placeholder="Password"
                    autoComplete="off"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4  text-sm font-medium rounded-md text-white bg-primary-1 hover:opacity-90 focus:outline-none "
                >
                  Login
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
