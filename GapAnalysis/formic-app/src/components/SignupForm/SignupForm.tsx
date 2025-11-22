import { useFormik } from 'formik';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { initialValues, validationSchema, type SignupFormValues } from './validation.ts';

const SignupForm = () => {
  const formik = useFormik<SignupFormValues>({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="mb-4">Реєстрація</h2>
          <Form noValidate onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                {...formik.getFieldProps('email')}
                isInvalid={!!formik.errors.email && formik.touched.email}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Пароль</Form.Label>
              <Form.Control
                type="password"
                {...formik.getFieldProps('password')}
                isInvalid={!!formik.errors.password && formik.touched.password}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.password}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="confirmPassword">
              <Form.Label>Підтвердження пароля</Form.Label>
              <Form.Control
                type="password"
                {...formik.getFieldProps('confirmPassword')}
                isInvalid={
                  !!formik.errors.confirmPassword &&
                  formik.touched.confirmPassword
                }
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.confirmPassword}
              </Form.Control.Feedback>
            </Form.Group>

            <Button type="submit" variant="primary" className="w-100">
              Зареєструватися
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignupForm;