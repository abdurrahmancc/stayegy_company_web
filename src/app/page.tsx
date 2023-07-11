import Image from "next/image";
import avatar1 from "@/assets/partner-1.png";
import avatar2 from "@/assets/partner-2.png";
import Companies from "@/components/Companies";

export default function Home() {
  return (
    <main className="mt-[133px]">
      <section className="container mx-auto">
        <h2 className="font-recoleta text-center text-[100px] leading-[100px] text-[#000]">
          One membership
        </h2>
        <div className="font-recoleta max-w-[899px] mx-auto bg-heading rounded-[24px] px-10 text-[100px] leading-[100px] text-white">
          unlimited requests
        </div>

        <div className="flex mt-20 justify-end gap-[24px] items-center">
          <div className="avatar-group -space-x-4">
            <Image alt="partner" src={avatar1} width={80} height={80} />
            <Image alt="partner" src={avatar2} className="" width={80} height={80} />
          </div>
          <p className="text-muted max-w-[324px] font-[24px] leading-[32px]">
            Partner with world-class creatives for a flat monthly price. Start your project today,
            make unlimited requests!
          </p>
        </div>
      </section>
      <section className="container mt-[245px] mx-auto">
        <Companies />
      </section>
    </main>
  );
}
