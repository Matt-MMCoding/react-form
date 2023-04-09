import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Input } from '@/Components/UI/Input';
import { Button } from '@/Components/UI/Button';
import { StyledContainer } from './styles';
import { Form } from '@/Components/UI/Form';
import { Typography } from '@/Components/UI/Typography';
import { SIGNUP } from '@/Constants/Forms';
import { ISignupFormProps, SignUpFormData } from './types';

const SignupForm: FC<ISignupFormProps> = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string().required('Password is required'),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<SignUpFormData>(formOptions);

  const onSubmit: SubmitHandler<SignUpFormData> = (data) => {
    if (isSubmitSuccessful) {
      reset();
    }
  };

  return (
    <StyledContainer>
      <Typography>{SIGNUP.HEADING}</Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          placeholder="Email"
          {...register('email', { required: true })}
        />
        {errors.email?.message}
        <Input
          type="password"
          placeholder="Password"
          {...register('password', { required: true })}
        />
        {errors.password?.message}
        <Button
          width="50%"
          onClick={handleSubmit(onSubmit)}
        >
          {SIGNUP.CTA}
        </Button>
      </Form>
    </StyledContainer>
  );
};

export default SignupForm;

SignupForm.displayName = 'SignupForm';
