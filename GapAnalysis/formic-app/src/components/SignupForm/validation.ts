import * as Yup from 'yup';

export interface SignupFormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

export const initialValues: SignupFormValues = {
  email: '',
  password: '',
  confirmPassword: '',
};

export const validationSchema = Yup.object({
  email: Yup.string()
    .email('Wrong email')
    .required('Required field'),
  password: Yup.string()
    .min(6, 'МMinimum 6 symbols')
    .required('Required field'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Required field'),
});