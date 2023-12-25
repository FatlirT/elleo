import WorkPreview from "../components/WorkPreview";
import Splash from "../components/Splash";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import Information from "@/components/Van";

export default function Home() {
  return (
    <>
      <Splash></Splash>
      <div className="flex-col">
        <WorkPreview></WorkPreview>
        <div className="flex flex-row m-9 justify-center overflow-x-clip">
          <Information></Information>
        </div>
        {/* <Testimonials></Testimonials> */}
        <Contact></Contact>
      </div >
    </>
  );
}
