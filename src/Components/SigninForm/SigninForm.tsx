import { FC } from 'react';
import { ISigninFormProps } from './types';
import { useForm } from 'react-hook-form';
import { Input } from '@/Components/UI/Input';
import { Button } from '@/Components/UI/Button';
import { StyledContainer } from './styles';
import { Form } from '@/Components/UI/Form';
import { Typography } from '../UI/Typography';

const SigninForm: FC<ISigninFormProps> = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <StyledContainer>
      <Typography>Welcome back!</Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          placeholder="Email"
          {...register('email')}
        />
        <Input
          type="password"
          placeholder="Password"
          {...register('password')}
        />
      </Form>
      <Button
        width="50%"
        onClick={handleSubmit(onSubmit)}
      >
        Sign in
      </Button>
    </StyledContainer>
  );
};

export default SigninForm;
SigninForm.displayName = 'SigninForm';
