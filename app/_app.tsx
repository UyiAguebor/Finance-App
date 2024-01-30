import '@styles/global.css'
import type { AppProps } from 'next/app'
import SidebarProvider from './components/SidebarContext'

export default function App({Component, pageProps}: AppProps){
    return (
    <SidebarProvider>
        <Component {...pageProps}/>
    </SidebarProvider>
    )
}