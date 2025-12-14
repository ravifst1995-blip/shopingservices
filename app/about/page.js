// app/about/page.js
export default function AboutPage() {
  return (
    <div className="container aboutContent">
       <h3 className="style-section-title container">Print & Digital Services</h3>
      <div className="hero">
      <div className="flextBoxWrap">
 <div className="left">
          <video
      src="/PinDown.mp4"
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-auto"
    />
 </div>
   <div className="right">
         <p style={{ fontSize: 15, lineHeight: 1.6 }}>
         Print & Digital Services is a full-service creative and production company delivering high-quality printing and digital solutions for businesses of all sizes. We help brands communicate clearly and consistently across both physical and digital platforms, ensuring every message makes a strong and lasting impact.
        </p>
        <p style={{ fontSize: 15, lineHeight: 1.6 }}>
         Our print services include business cards, brochures, flyers, banners, posters, packaging, signage, and large-format printing, all produced using modern equipment and premium materials. We focus on sharp finishes, accurate colour reproduction, and timely delivery to meet business deadlines without compromise.
        </p>
      
   </div>
   </div>
     <p style={{ fontSize: 15, lineHeight: 1.6 }}>
      On the digital side, Print & Digital Services offers design, branding, and marketing support to help businesses grow their online presence. From professional graphic design and digital creatives to marketing assets and promotional materials, we ensure every element aligns with your brand identity. 
      </p>
        <p style={{ fontSize: 15, lineHeight: 1.6 }}>
    What sets us apart is our end-to-end approach. We manage projects from concept and design through to production and delivery, providing a seamless experience for our clients. With a strong commitment to quality, reliability, and customer satisfaction, Print & Digital Services is a trusted partner for businesses looking to enhance visibility, strengthen branding, and achieve measurable results.</p>
      
      
      </div>
    </div>
  );
}
