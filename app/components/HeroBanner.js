import Image from "next/image";
import './heroBannerStyle.css'
export default function HeroBanner() {
  return (
 <section
  className="hero"
  style={{
    backgroundImage: "url('/banner.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="container">
    {/* hero content here */}
  </div>
</section>

  );
}
