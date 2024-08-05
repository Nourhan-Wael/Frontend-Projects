import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { loginUser } from "../../utils/auth";

const LoginForm = () => {
	const initialValues = {
		username: "",
		password: "",
	};

	const validationSchema = Yup.object({
		username: Yup.string().required("Username is required"),
		password: Yup.string().required("Password is required"),
	});

	const handleSubmit = async (values, { setSubmitting }) => {
		try {
			const response = await loginUser(values);
			// Handle successful login, e.g., store token or user data
			setLoggedIn(true);
			// Redirect to dashboard or other protected page
		} catch (error) {
			// Handle login error, e.g., display error message
			console.error("Login failed:", error);
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={handleSubmit}
		>
			{({ isSubmitting }) => (
				<Form>
					<Field type="text" name="username" placeholder="Username" />
					<ErrorMessage name="username" component="div" />
					<Field type="password" name="password" placeholder="Password" />
					<ErrorMessage name="password" component="div" />
					<button type="submit" disabled={isSubmitting}>
						Login
					</button>
				</Form>
			)}
		</Formik>
	);
};

export default LoginForm;
