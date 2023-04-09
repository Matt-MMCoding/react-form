import { FC } from 'react';
import { ISigninFormProps, SignInFormData } from './types';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Input } from '@/Components/UI/Input';
import { Button } from '@/Components/UI/Button';
import { StyledContainer } from './styles';
import { Form } from '@/Components/UI/Form';
import { Typography } from '@/Components/UI/Typography';
import { SIGNIN } from '@/Constants/Forms';

const SigninForm: FC<ISigninFormProps> = () => {
  const { register, handleSubmit } = useForm<SignInFormData>();

  const onSubmit: SubmitHandler<SignInFormData> = (data) => {
    console.log(data);
  };

  return (
    <StyledContainer>
      <Typography>{SIGNIN.HEADING}</Typography>
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
