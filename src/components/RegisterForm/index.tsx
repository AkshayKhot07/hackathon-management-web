"use client";

import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

type RegisterFormTypes = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const initialValues: RegisterFormTypes = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must not exceed 50 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    ),
  confirmPassword: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

const RegisterForm = () => {
  const handleRegister = (
    values: RegisterFormTypes,
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
            Create your account
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
                    htmlFor="name"
                    className="block text-sm font-medium text-secondary-2"
                  >
                    Name
                  </label>
                  <Field
                    type="text"
                    name="name"
                    id="name"
                    className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-1 focus:border-primary-1 sm:text-sm"
                    placeholder="John Doe"
                    autoComplete="off"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

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

                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-secondary-2"
                  >
                    Confirm Password
                  </label>
                  <Field
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-1 focus:border-primary-1 sm:text-sm"
                    placeholder="Confirm Password"
                    autoComplete="off"
                  />
                  <ErrorMessage
                    name="confirmPassword"
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
                  Register
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegisterForm;
