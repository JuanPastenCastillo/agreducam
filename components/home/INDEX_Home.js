"use client"
// import Image from 'next/image.js'
// import BeachTopDown from '../../assets/images/BeachTopDown.jpeg'
import LaPortadaHome from "../../assets/images/LaPortadaHome.png"
// import beach from "../../public/beach.mp4"
import { useEffect, useRef } from "react"
import { INDEX_HomeWrapper } from "./styles/INDEX_HomeWrapper.js"
// console.log("TopDownBeach:", TopDownBeach)

export const INDEX_Home = () => {
  const videoRef = useRef(null)
  const videoRef2 = useRef(null)

  useEffect(() => {
    if (videoRef.current !== null) {
      console.log("videoRef:", videoRef)
      videoRef.current.disablePictureInPicture = true
    }
  }, [videoRef])

  useEffect(() => {
    if (videoRef2.current !== null) {
      console.log("videoRef:", videoRef)
      videoRef2.current.disablePictureInPicture = true
    }
  }, [videoRef2])

  const handleDisablePictureInPicture = () => {
    videoRef.current.disablePictureInPicture = true
  }

  return (
    <INDEX_HomeWrapper image={LaPortadaHome.src}>
      <div>
        {/* <Image
          src={BeachTopDown}
          alt="Imagen de La Portada, símbolo de Antofagasta"

        /> */}

        <video
          autoPlay
          loop
          muted
          disablePictureInPicture
          controlsList="nodownload"
          ref={videoRef}
          src={"TopDownBeach.mp4"}
          type="video/mp4"
        />

        {/* <video
          autoPlay
          loop
          muted
          disablePictureInPicture
          controlsList="nodownload"
          ref={videoRef2}>
          <source
            src={"TopDownBeach.mp4"}
            type="video/mp4"
          />
        </video>

        <ReactPlayer
          url={"TopDownBeach.mp4"}
          playing={true}
          loop={true}
          controls={true}
          pip={false}
        /> */}
      </div>
    </INDEX_HomeWrapper>
  )
}
