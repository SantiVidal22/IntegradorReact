import * as Yup from 'yup';

const ProfileSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(2, 'Muy corto!')
    .max(50, 'Muy largo!')
    .required('Completa el campo'),
  telephone: Yup.string()
    .min(6, 'Muy corto')
    .max(50, 'Muy largo!')
    .required('Completa el campo'),
  email: Yup.string()
    .email('Email invalido')
    .required('Completa el campo'),
});

export default ProfileSchema;