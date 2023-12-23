"use client"

import { useContext } from "react"
import { DeviceDetecter } from "@context/device"
import MobileApp from "@mobile/app"
import DesktopApp from "@desktop/app"

export default function App() {
    const { isMobile } = useContext(DeviceDetecter)

    return (
        <>
            {isMobile? <MobileApp/> : <DesktopApp/>}
        </>
    )
}