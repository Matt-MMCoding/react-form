import { ISigninFormProps } from '../SigninForm';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '@/Components/UI/Input';
import { Button } from '@/Components/UI/Button';
import { StyledContainer } from './styles';
import { Form } from '@/Components/UI/Form';
import { Typography } from '../UI/Typography';

const SignupForm: FC<ISigninFormProps> = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <StyledContainer>
      <Typography>Start your jounrney!</Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          {...register('email')}
        />
        <Input
          type="password"
          {...register('password')}
        />
        <Button onClick={handleSubmit(onSubmit)}>Sign up</Button>
      </Form>
    </StyledContainer>
  );
};

export default SignupForm;

SignupForm.displayName = 'SignupForm';
