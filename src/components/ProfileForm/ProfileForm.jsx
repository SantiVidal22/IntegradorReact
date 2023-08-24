import React from 'react';
import { Formik } from 'formik';
import ProfileSchema from '../../Formik/ProfileSchema';
import {FormGroup, Form, ContainerForm, H1Styled} from './ProfileFormStyles'

const ProfileForm = () => (
  <ContainerForm>
    <H1Styled>Contacto</H1Styled>
    <Formik
      initialValues={{ fullname: '', email: '', telephone: '' }}
      validationSchema={ProfileSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 1000);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => (
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <label htmlFor="fullnamme">Nombre Completo</label>
            <input
              type="fullname"
              name="fullname"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.fullname}
            />
            {errors.fullname && touched.fullname && errors.fullname}
          </FormGroup>
          <FormGroup>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
          </FormGroup>
          <FormGroup>
            <label htmlFor="telephone">Telefono</label>
            <input
              type="telephone"
              name="telephone"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.telephone}
            />
            {errors.telephone && touched.telephone && errors.telephone}
          </FormGroup>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting' : 'Enviar'}
          </button>
        </Form>
      )}
    </Formik>
  </ContainerForm>
);

export default ProfileForm;