import CardMotion from "../motion/CardMotion";
import GoogleMap from "../shared/GoogleMap";

const GoogleMapSection = () => {
  return (
    <div className="bg-[#1E2538]">
      <div>
        <CardMotion
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.1,
            },
          }}
          initial={{
            opacity: 0,
            y: 100,
          }}
        >
          <div className="relative h-[400px] lg:h-[600px] w-full">
            <GoogleMap />
          </div>
        </CardMotion>
      </div>
    </div>
  );
};

export default GoogleMapSection;
