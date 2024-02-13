import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import SignInForm from './Form';

const SignInPage = async () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-2">
      <Card className="w-[350px]">
        <CardHeader className="flex items-center justify-center">
          <CardTitle>Sign In to Adaremit</CardTitle>
        </CardHeader>
        <SignInForm />
      </Card>
    </section>
  );
};

export default SignInPage;
