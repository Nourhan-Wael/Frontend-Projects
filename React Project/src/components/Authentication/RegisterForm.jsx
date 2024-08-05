import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { registerUser } from '../utils/auth';

const RegisterForm = () => {
	// ... (initial values, validationSchema, and form structure)

	const handleSubmit = async (values, { setSubmitting }) => {
		try {
			const response = await registerUser(values);
			// Handle successful registration, e.g., display success message
		} catch (error) {
			// Handle registration error, e.g., display error message
			console.error("Registration failed:", error);
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

export default RegisterForm;
