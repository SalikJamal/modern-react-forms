import Head from "next/head"
import { useRouter } from "next/router"
import { useState, useEffect } from "react" 
import { motion as m } from "framer-motion"
import Confetti from "react-confetti"



export default function Success() {

    const router = useRouter()
    const [pieces, setPieces] = useState(200)

    const stopConfetti = () => {
        setTimeout(() => setPieces(0), 3000)
    }

    useEffect(() => {
        stopConfetti()
    })

    return (
        <>
            <Head>
                <title>Modern React Form - Success</title>
            </Head>
            <m.main className="h-screen flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div className="bg-white rounded-lg w-1/2 font-latoRegular text-gray-700 p-16">
                    <h1 className="text-3xl pb-4 font-latoBold">Thanks for signing up {router.query.name}</h1>
                    <p className="text-lg text-gray-500">We have sent you an email at {router.query.email}. We will get back to you as soon as we can!</p>
                </div>
                <Confetti gravity={0.2} numberOfPieces={pieces} />
            </m.main>
        </>
    )

}