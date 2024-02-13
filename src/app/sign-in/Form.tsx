'use client';

import { Button } from '@/components/ui/button';
import { CardContent, CardFooter } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { SignInPayload, SignInValidator } from '@/lib/validators/authentication';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

const SignInForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const form = useForm<SignInPayload>({
    resolver: zodResolver(SignInValidator),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { mutate: onSubmit, isPending } = useMutation({
    mutationFn: async (data: SignInPayload) => {
      const res = await signIn('credentials', {
        ...data,
        redirect: false,
      });

      if (res?.error === 'CredentialsSignin') throw Error('Invalid Credentials!');
      if (!res?.ok) throw Error('Internal Server Error!');

      return res;
    },
    onError: (err) => {
      return toast.error(err.message);
    },
    onSuccess: () => {
      toast.success('Sign in success!');
      router.push(searchParams.get('callbackUrl') ?? '/');
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit((data) => onSubmit(data))}>
        <CardContent className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Password" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </CardContent>
        <CardFooter>
          <Button className="w-full" type="submit" isLoading={isPending}>
            Sign In
          </Button>
        </CardFooter>
      </form>
    </Form>
    // <div className="">
    //   <Button onClick={() => onSubmit()}>asda</Button>
    // </div>
  );
};

export default SignInForm;
