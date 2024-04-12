import Image from "next/image";

import CardScreensImage from "@/images/card_screens.png";
import CandleImage from "@/images/candle.png";
import Header from "@/app/(components)/Header";
import Footer from "@/app/(components)/Footer";
import Button from "@/app/(components)/Button";
import MetricItem from "./(homepage)/MetricItem";
import UserIcon from "@/icons/UserIcon";
import DownloadIcon from "@/icons/DownloadIcon";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="min-h-[calc(100vh-246px)]">
        <section className="flex justify-between mb-20 pt-10">
          <div className="w-[628px] ml-[calc((100vw-1165px)/2)] relative">
            <div className="absolute -left-[140px] -top-[30px]">
              <Image src={CandleImage} alt="candle" className="w-[168px]" />
            </div>
            <h1 className="text-[56px] font-bold mb-5">
              Connect People to <span className="text-primary">The Future</span>
            </h1>
            <p className="mb-10">
              Help you build anything to make your ideas come true.
            </p>
            <Button>Get started now</Button>
          </div>
          <div>
            <Image
              src={CardScreensImage}
              alt="card-screens"
              className="w-[1005px]"
            />
          </div>
        </section>
        <section className="flex justify-between w-[1165px] mx-auto py-20">
          <MetricItem
            icon={<UserIcon />}
            color="#F2E2FD"
            title="15K"
            description="Active users"
          />
          <MetricItem
            icon={<DownloadIcon />}
            color="#FFF1CE"
            title="30K"
            description="Total download"
          />
          <MetricItem
            icon={<UserIcon color="#6DEDC3" />}
            color="#E2FBF3"
            title="10K"
            description="Customer"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}
