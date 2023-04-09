import { FC } from 'react';
import { ISigninFormProps, SignInFormData } from './types';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Input } from '@/Components/UI/Input';
import { Button } from '@/Components/UI/Button';
import { StyledContainer } from './styles';
import { Form } from '@/Components/UI/Form';
import { Typography } from '@/Components/UI/Typography';
import { SIGNIN } from '@/Constants/Forms';

const SigninForm: FC<ISigninFormProps> = () => {
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
  } = useForm<SignInFormData>(formOptions);

  const onSubmit: SubmitHandler<SignInFormData> = (data) => {
    if (isSubmitSuccessful) {
      reset();
    }
  };

  return (
    <StyledContainer>
      <Typography>{SIGNIN.HEADING}</Typography>
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
          {SIGNIN.CTA}
        </Button>
      </Form>
    </StyledContainer>
  );
};

export default SigninForm;
SigninForm.displayName = 'SigninForm';
