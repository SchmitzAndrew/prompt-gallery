import ReactNode from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


interface Props {
    children: React.ReactNode
}

export default function Layout({ children }: Props) {
    return (
        <>
            <div className="flex flex-col min-h-screen bg-black">
                <Navbar />
                <main className="flex-grow">{children}</main>
                <Footer />
            </div>
        </>
    )
}