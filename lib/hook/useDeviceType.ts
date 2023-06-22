import { useEffect, useState } from "react"

function useDeviceType() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkDeviceType = () => {
      setIsMobile(
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      )
    }

    checkDeviceType()

    // Re-check device type when the window is resized
    window.addEventListener("resize", checkDeviceType)

    // Clean up the event listener on hook cleanup
    return () => {
      window.removeEventListener("resize", checkDeviceType)
    }
  }, [])

  return isMobile
}

export default useDeviceType
