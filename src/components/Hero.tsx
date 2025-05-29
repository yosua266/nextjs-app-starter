import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://anichin.rest/wp-content/uploads/2022/12/BTTH-Season-5.webp')`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          FANSUB DONGHUA SUBTITLE INDONESIA
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Nonton Donghua Subtitle Indonesia terlengkap dan terbaru hanya di DongPlay
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/donghua/battle-through-the-heavens">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200">
              Watch Now
            </Button>
          </Link>
          <Link href="/ongoing">
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
              Browse All
            </Button>
          </Link>
        </div>
      </div>

      {/* Gradient Overlay at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  )
}
