import VideoPlayButton from "@/src/components/VideoButton/VideoButton";
import VideoProduction from "@/src/components/VideoProduction/VideoProduction";
import VideoTestimonials from "@/src/components/VideoTestimonials/VideoTestimonials";
import { ExamplePage3 } from "@/src/UI/ExamplePage/ExamplePage";

export default function VideoProductionPage() {
  return (
    <div>
      <ExamplePage3 />
      <VideoPlayButton />
      <VideoProduction />
      <VideoTestimonials />
    </div>
  );
}
