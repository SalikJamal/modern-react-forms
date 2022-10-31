import Head from "next/head"
import Image from "next/image"
import formImage from '../public/form.png'
import { useFormik } from "formik"
import * as yup from "yup"
import { useRouter } from "next/router"
import { motion as m } from "framer-motion"


export default function Home() {

    const router = useRouter()

    // Formik Logics
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            country: 'Pakistan',
            terms: ''
        },
        validationSchema: yup.object({
            name: yup.string().max(20, 'Name must be 20 characters or less').required('Name is required'),
            email: yup.string().email('Invalid email address').required('Email is required'),
            terms: yup.array().required('Terms of service must be accepted')
        }),
        onSubmit: values => {
            router.push({ pathname: '/success', query: values })
        }
    })

    return (
        <m.div className="absolute w-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Head>
                <title>Modern React Form - Sign up</title>
                <meta name="description" content="Modern React Forms" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="h-screen flex items-center justify-center">
                <form className="bg-white flex rounded-lg w-1/2 font-latoRegular" onSubmit={formik.handleSubmit}>
                    <div className="flex-1 text-gray-700 p-20">
                        <h1 className="text-3xl pb-2 font-latoBold">Lets get started</h1>
                        <p className="text-lg text-gray-500">
                            Join our E-learning platform today and unlock over 500+ courses
                            and digital assets ready to download.
                        </p>
                        <div className="mt-6">
                            <div className="pb-4">
                                <label className={`block font-latoBold text-sm pb-2 ${formik.touched.name && formik.errors.name && 'text-red-400'}`} htmlFor="name">{formik.touched.name && formik.errors.name ? formik.errors.name : 'Name'}</label>
                                <input className="border-2 border-gray-500 p-2 rounded-md w-full focus:border-teal-500 focus:ring-teal-500 outline-none" type="text" name="name" placeholder="Enter your name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            </div>
                            <div className="pb-4">
                                <label className={`block font-latoBold text-sm pb-2 ${formik.touched.email && formik.errors.email && 'text-red-400'}`} htmlFor="email">{formik.touched.email && formik.errors.email ? formik.errors.email : 'Email'}</label>
                                <input className="border-2 border-gray-500 p-2 rounded-md w-full focus:border-teal-500 focus:ring-teal-500 outline-none" type="email" name="email" placeholder="Enter your email" value={formik.values.email} onChange={formik.handleChange} />
                            </div>
                            <div className="pb-4">
                                <label className="block font-latoBold text-sm pb-2" htmlFor="country">Country</label>
                                <select className="border-2 border-gray-500 p-2 rounded-md w-full focus:border-teal-500 focus:ring-teal-500 outline-none" name="country" value={formik.values.country} onChange={formik.handleChange}>
                                    <option>New Zealand</option>
                                    <option>Norway</option>
                                    <option>Pakistan</option>
                                    <option>Scotland</option>
                                    <option>United States</option>
                                </select>
                            </div>
                            <div className="pb-4">
                                <label className={`block font-latoBold text-sm pb-2 ${formik.touched.terms && formik.errors.terms && 'text-red-400'}`} htmlFor="terms">{formik.touched.terms && formik.errors.terms ? formik.errors.terms : 'Terms Of Service'}</label>
                                <div className="flex items-center gap-2">
                                    <input className="h-5 w-5 text-teal-500 border-2 focus:border-teal-500 focus:ring-teal-500" type="checkbox" name="terms" value="checked" onChange={formik.handleChange} />
                                    <p className="text-sm font-latoBold text-gray-500">I agree to the Terms and Service that my data will be taken and sold.</p>
                                </div>
                            </div>
                            <button className="bg-teal-500 font-latoBold text-sm text-white py-3 mt-6 rounded-lg w-full" type="submit">Start learning today!</button>
                        </div>
                    </div>
                    <div className="relative flex-1">
                        <Image className="object-cover" src={formImage} fill alt="get-started" priority />
                    </div>
                </form>
            </main>

        </m.div>
    )
}