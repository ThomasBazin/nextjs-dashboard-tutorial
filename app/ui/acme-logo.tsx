import { lusitana } from "@/app/ui/fonts";
import MusicIcon from "./music-icon";

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <MusicIcon className="text-white" />
      <p className="text-[44px]">Acme</p>
    </div>
  );
}
