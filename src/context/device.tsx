"use client"

import { useMediaQuery } from "react-responsive";
import { ReactNode, createContext } from "react"

export const DeviceDetecter = createContext({
    isMobile: false
})

export default function DeviceContext
({children} : {children: ReactNode}) 
{
    const isMobile = useMediaQuery({
        query: '((max-device-width: 768px) and (max-device-height: 1024px)) or ((max-width: 768px) and (max-height: 1024px))'

    })
    
    return (
        <DeviceDetecter.Provider value={{isMobile}}>
            {children}
        </DeviceDetecter.Provider>
    )
}