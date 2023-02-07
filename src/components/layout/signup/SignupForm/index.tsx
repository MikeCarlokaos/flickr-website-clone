import React, { useState } from "react";
import logo from "../../../../assets/icons/flickr-logo.png";
import { Field, Formik, Form } from "formik";
import * as yup from "yup";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { TextFieldProps } from "@mui/material/TextField";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const SignupForm = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    password: "",
  };

  const validationSchema = yup.object().shape({
    firstName: yup.string().required("Required!"),
    lastName: yup.string().required("Required!"),
    age: yup.number().required("Required!"),
    email: yup.string().email("Invalid email").required("Required!"),
    password: yup.string().required("Required!"),
  });
  const textErrors = (meta: { touched: boolean; error: boolean }) => ({
    error: meta.touched && Boolean(meta.error),
    helperText: meta.touched && meta.error,
  });

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={() => alert("submitted!")}
    >
      <Form className="relative w-80 h-full p-5 space-y-4 bg-white text-center rounded-lg">
        <div className="w-full flex flex-col items-center">
          <img src={logo} alt="logo" className="w-5 h-5" />
          <h3>Sign up for FLickr</h3>
        </div>
        <div className="w-full h-16">
          <Field name="firstName">
            {(props: {
              field: JSX.IntrinsicAttributes & TextFieldProps;
              meta: { touched: boolean; error: boolean };
            }) => (
              <>
                <TextField
                  variant="outlined"
                  placeholder=""
                  label="First name"
                  {...props.field}
                  {...textErrors(props.meta)}
                  className="w-full"
                />
              </>
            )}
          </Field>
        </div>
        <div className="w-full h-16">
          <Field name="lastName">
            {(props: {
              field: JSX.IntrinsicAttributes & TextFieldProps;
              meta: { touched: boolean; error: boolean };
            }) => (
              <>
                <TextField
                  variant="outlined"
                  placeholder=""
                  label="Last name"
                  {...props.field}
                  {...textErrors(props.meta)}
                  className="w-full"
                />
              </>
            )}
          </Field>
        </div>
        <div className="w-full h-16">
          <Field name="age">
            {(props: {
              field: JSX.IntrinsicAttributes & TextFieldProps;
              meta: { touched: boolean; error: boolean };
            }) => (
              <>
                <TextField
                  variant="outlined"
                  placeholder=""
                  label="Your age"
                  {...props.field}
                  {...textErrors(props.meta)}
                  className="w-full"
                />
              </>
            )}
          </Field>
        </div>

        <div className="w-full h-16">
          <Field name="email">
            {(props: {
              field: JSX.IntrinsicAttributes & TextFieldProps;
              meta: { touched: boolean; error: boolean };
            }) => (
              <>
                <TextField
                  variant="outlined"
                  placeholder=""
                  label="Email address"
                  {...props.field}
                  {...textErrors(props.meta)}
                  className="w-full"
                />
              </>
            )}
          </Field>
        </div>
        <div className="w-full h-16">
          <Field name="password">
            {(props: {
              field: JSX.IntrinsicAttributes & TextFieldProps;
              meta: { touched: boolean; error: boolean };
            }) => (
              <>
                {/* <TextField
                  placeholder=""
                  label="Password"
                  {...props.field}
                  {...textErrors(props.meta)}
                /> */}
                {/* {props.meta.touched && Boolean(props.meta.error) && (
                  <span style={{ color: "red" }}>{props.meta.error}</span>
                )} */}
                <TextField
                  label="Password"
                  variant="outlined"
                  {...props.field}
                  {...textErrors(props.meta)}
                  type={showPassword ? "text" : "password"}
                  className="w-full"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? (
                            <VisibilityIcon />
                          ) : (
                            <VisibilityOffIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </>
            )}
          </Field>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full px-5 ">
          <Field>
            {(props: {
              form: {
                isValid: any;
                submitForm:
                  | React.MouseEventHandler<HTMLButtonElement>
                  | undefined;
              };
            }) => (
              <button
                disabled={!props.form.isValid}
                onClick={props.form.submitForm}
                type="submit"
                className="w-full py-2 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-600/90"
              >
                Sign up
              </button>
            )}
          </Field>
        </div>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-full">
          <p>
            Already a Flickr member?{" "}
            <a href="/login" className="text-sky-600 hover:text-sky-700">
              Log in here.
            </a>
          </p>
        </div>
      </Form>
    </Formik>
  );
};
export default SignupForm;
