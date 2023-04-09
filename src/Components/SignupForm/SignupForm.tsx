import { ISigninFormProps } from '../SigninForm';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '@/Components/UI/Input';
import { Button } from '@/Components/UI/Button';
import { StyledContainer } from './styles';
import { Form } from '@/Components/UI/Form';
import { Typography } from '@/Components/UI/Typography';
import { SIGNUP } from '@/Constants/Forms';

const SignupForm: FC<ISigninFormProps> = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <StyledContainer>
      <Typography>{SIGNUP.HEADING}</Typography>
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
        {SIGNUP.CTA}
      </Button>
    </StyledContainer>
  );
};

export default SignupForm;

SignupForm.displayName = 'SignupForm';
