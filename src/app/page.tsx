import { AspectRatio } from '@/components/ui/aspect-ratio';
import Image from 'next/image';
import Dummy from '../../public/dummy.jpg';

const Home = () => {
  return (
    <div className="relative mt-14">
      <section className="container relative flex flex-col py-10 md:py-12 lg:flex-row">
        {/* Text Part */}
        <div className="flex flex-1 flex-col justify-center space-y-4 text-center lg:pr-4 lg:text-start">
          <h1 className="text-3xl font-bold md:text-4xl"> Ask Questions to your PDF in seconds</h1>
          <div className="space-y-5">
            <p className="mb-5 text-sm text-accent-foreground md:text-base">
              PDFMind will show you what &apos;s on your pdf&apos;s mind by answering your questions. Simply upload your file and start asking questions for efficient and dynamic document interaction.
            </p>
            <div className="flex flex-col items-center gap-5 md:flex-row md:justify-center md:gap-8 lg:justify-start ">{/* <MyContactDialog label="Schedule a meeting" /> */}</div>
          </div>
        </div>

        {/* Image Part */}
        <div className="flex-1">
          <AspectRatio ratio={3 / 2}>
            <Image src={Dummy} alt="profile" fill />
          </AspectRatio>
        </div>
      </section>
    </div>
  );
};

export default Home;
