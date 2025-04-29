// components/LogoHostlon.tsx
import Image from "next/image";

const LogoHostlon = () => {
  return (
    <div className="flex items-center justify-center">
      <Image
        src="/logohostlon.png"
        alt="Logo da Hostlon"
        width={200}
        height={200}
        className="object-contain"
      />
    </div>
  );
};

export default LogoHostlon;
