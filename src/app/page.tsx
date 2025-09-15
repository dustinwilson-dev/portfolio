import Header from "@/components/Header";
import StarBackground from "@/components/StarBackground";
import MouseLumination from "@/components/MouseLumination";
import Body from "@/components/Body";

const Home = () => {
  return (
    <div>
      <MouseLumination />
      <StarBackground />
      <div
        className="leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900 relative"
        id="gradient"
      >
        {/* top cutoff */}
        {/* <div className="fixed top-[35%] left-0 right-0 h-0.5 bg-red-500 z-[9999] pointer-events-none" /> */}

        {/* bottom cutoff */}
        {/* <div className="fixed bottom-[60%] left-0 right-0 h-0.5 bg-blue-500 z-[9999] pointer-events-none" /> */}

        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0 lg:flex">
          <Header />
          <Body />
        </div>
      </div>
    </div>
  );
};

export default Home;
