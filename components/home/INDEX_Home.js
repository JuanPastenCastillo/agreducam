"use client"
import LaPortadaHome from "../../assets/images/LaPortadaHome.png"
import { INDEX_HomeWrapper } from "./styles/INDEX_HomeWrapper.js"

export const INDEX_Home = () => {
  return (
    <INDEX_HomeWrapper image={LaPortadaHome.src}>
      <div>
        <video
          autoPlay
          loop
          muted
          disablePictureInPicture
          controlsList="nodownload"
          src={"TopDownBeach.mp4"}
          type="video/mp4"
        />
      </div>
    </INDEX_HomeWrapper>
  )
}
