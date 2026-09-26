import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "../shadcnui/card";

const LocationCard = () => {
  return (
    <Card className="bg-blue-600">
      <CardHeader className="space-y-4 text-white">
        <Image
          src="/google_location.png"
          height={400}
          width={400}
          loading="eager"
          alt="GBP_Qr"
          className="mx-auto rounded-2xl lg:h-full lg:w-full"
        />

        <CardTitle className="mt-2 text-left text-xl font-bold md:text-2xl">
          Scan the QR Code to View Our Google Business Profile
        </CardTitle>
      </CardHeader>

      <CardContent className="text-left">
        <div className="">
          <CardTitle className="text-lg font-semibold text-white">
            Location
          </CardTitle>
          <CardTitle className="text-lg tracking-wide text-white/95">
            Guma, West Bengal, India
          </CardTitle>
        </div>

        <div className="">
          <CardTitle className="text-lg font-semibold text-white">
            Address
          </CardTitle>
          <CardTitle className="text-lg tracking-wide text-white/95">
            Guma Station Road, Rabindrapally, Near United Club
          </CardTitle>
        </div>

        <div className="">
          <CardTitle className="text-lg font-semibold text-white">
            Landmark
          </CardTitle>
          <CardTitle className="text-lg tracking-wide text-white/95">
            Opposite Milon Mondir
          </CardTitle>
        </div>

        <div className="">
          <CardTitle className="text-lg font-semibold text-white">
            Pin Code
          </CardTitle>
          <CardTitle className="text-lg tracking-wider text-white/95">
            743704
          </CardTitle>
        </div>
      </CardContent>
    </Card>
  );
};

export default LocationCard;
