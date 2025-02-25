import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function SignInViewPage() {
  return (
    <div className='relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0'>
      <div className='relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex'>
        <div className='absolute inset-0 bg-purple-900' />
        <div className='relative z-20 flex items-center text-lg font-medium'>
          <span className='text-2xl font-bold'>Trinity AI</span>
        </div>
        <div className='relative z-20 mt-auto'>
          <blockquote className='space-y-2'>
            <p className='text-lg'>
              &ldquo;Empowering your digital journey with elegant solutions and seamless experiences.&rdquo;
            </p>
            <footer className='text-sm'> Sharon's Vision</footer>
          </blockquote>
        </div>
      </div>
      <div className='flex h-full items-center justify-center p-4 lg:p-8'>
        <div className='mx-auto flex w-full flex-col items-center justify-center space-y-6 sm:w-[350px]'>
          <div className='flex flex-col items-center space-y-2 text-center'>
            <h1 className='text-3xl font-bold tracking-tight text-purple-600'>Welcome to Trinity AI</h1>
            <p className='text-lg text-muted-foreground'>
              Your gateway to innovation
            </p>
          </div>
          <Link
            href='/dashboard'
            className={cn(
              buttonVariants({
                size: 'lg',
                variant: 'default'
              }),
              'w-full bg-purple-600 hover:bg-purple-700 text-white'
            )}
          >
            Enter Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
