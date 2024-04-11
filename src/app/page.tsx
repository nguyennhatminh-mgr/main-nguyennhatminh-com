import Image from "next/image";

import CardScreensImage from "@/images/card_screens.png";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import MetricItem from "./(homepage)/MetricItem";
import UserIcon from "@/icons/UserIcon";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="min-h-[calc(100vh-246px)]">
        <section className="flex justify-between mb-20 pt-10">
          <div className="w-[628px] ml-[calc((100vw-1165px)/2)]">
            <h1 className="text-[56px] font-bold mb-5">
              Committed to People Committed to{" "}
              <span className="text-primary">The Future</span>
            </h1>
            <p className="mb-10">
              An enim nullam tempor sapien gravida donec enim ipsum porta justo
              congue magna at
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
            icon={<UserIcon />}
            color="#FFF1CE"
            title="30K"
            description="Total download"
          />
          <MetricItem
            icon={<UserIcon />}
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
