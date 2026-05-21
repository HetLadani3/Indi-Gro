import React, { useState } from 'react'
import { heroSectionData } from '../assets/assets';
import { BikeIcon, Loader2Icon, LockIcon, MailIcon, UserIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [isLoginState, setisLoginState] = useState(true);
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [loading, setloading] = useState(false);
    const handleSubmit = async (e: React.SubmitEvent) => {
        e.preventDefault();
        setloading(true);
        setTimeout(() => {
            window.location.href = '/';
        }, 1000);
    }

    return (
        <div className='min-h-screen flex'>
            {/* left side */}
            <div className='hidden lg:flex lg:w-1/2 bg-app-green relative items-center justify-center'>
                <img src={heroSectionData.hero_image} alt="" className='absolute inset-0 object-cover h-full bg-center opacity-10' />
                <div className='relative text-center px-12'>
                    <h2 className='text-4xl font-semibold text-white mb-4'>Welcome back to Indi-Gro</h2>
                    <p className='text-white/60 font-serif text-xl max-w-sm max-auto'>Delivering India's grocery needs.</p>
                </div>
            </div>
            {/* right side */}
            <div className='flex-1 flex-center px-4 py-12 bg-app-cream'>
                <div className='w-full max-w-md'>
                    {/* form header message */}
                    <div className='text-center mb-8'>
                        <Link to="/" className='inline-flex items-center gap-2 mb-6'>
                            <BikeIcon className='size-8 text-app-green' />
                            <span className='text-2xl font-semibold text-app-green'>Indi-Gro</span>
                        </Link>
                        <h1 className='text-2xl font-semibold text-app-green mb-2'>
                            {isLoginState ? 'Login to your account' : 'Create a new account'}
                        </h1>
                        <p className='text-sm text-app-text-light'>
                            {isLoginState ? "Don't have an account?" : 'Already have an account?'}
                            <button onClick={() => setisLoginState(!isLoginState)} className='text-orange-500 ml-1 font-semibold hover:text-orange-600 transition-colors'>
                                {isLoginState ? 'Sign up' : 'Log in'}
                            </button>
                        </p>
                    </div>
                    {/* login, register form */}
                    <form onSubmit={handleSubmit} className='space-y-5'>
                        {!isLoginState && (
                            <label className='text-sm flex flex-col gap-1'>
                                Name
                                <div className='relative'>
                                    <UserIcon className='absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-app-text-light' />
                                    <input type="text" value={name} onChange={(e) => setname(e.target.value)} required placeholder='Your Name' className='w-full pl-11 pr-4 py-3 text-sm bg-white rounded-xl not-focus:border-app-border transition-all' />
                                </div>
                            </label>
                        )}
                        <label className='text-sm flex flex-col gap-1'>
                            Email
                            <div className='relative'>
                                <MailIcon className='absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-app-text-light' />
                                <input type="email" value={email} onChange={(e) => setemail(e.target.value)} required placeholder='Your Email' className='w-full pl-11 pr-4 py-3 text-sm bg-white rounded-xl not-focus:border-app-border transition-all' />
                            </div>
                        </label>
                        <label className='text-sm flex flex-col gap-1'>
                            Password
                            <div className='relative'>
                                <LockIcon className='absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-app-text-light' />
                                <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} required placeholder='Your Password' className='w-full pl-11 pr-4 py-3 text-sm bg-white rounded-xl not-focus:border-app-border transition-all' />
                            </div>
                        </label>
                        <button type="submit" disabled={loading} className='flex-center w-full py-3 bg-app-green text-white font-semibold rounded-xl hover:bg-app-green-light transition-colors disabled:opacity-50'>
                            {loading ? <Loader2Icon className='animate-spin' /> : isLoginState ? 'Login' : 'Sign Up'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;