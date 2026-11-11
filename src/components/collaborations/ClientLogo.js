import Image from "next/image";

// Logos keep their own proportions: fixed height, auto width, never stretched.
// Monochrome via filter so any brand colours sit inside the dark palette.
export default function ClientLogo({ name, logo, className = "" }) {
  return (
    <div className={`flex h-20 items-center justify-center px-4 ${className}`}>
      <Image src={logo} alt={name} width={240} height={48} unoptimized className="h-8 w-auto max-w-full object-contain opacity-80 grayscale transition duration-500 hover:opacity-100 md:h-9" />
    </div>
  );
}
