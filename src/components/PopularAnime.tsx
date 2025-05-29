import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const popularAnime = [
  {
    id: 1,
    title: "Battle Through the Heavens Season 5",
    image: "https://anichin.rest/wp-content/uploads/2022/12/BTTH-Season-5.webp",
    episode: "Episode 148",
    type: "Donghua",
    rating: "9.20",
    slug: "battle-through-the-heavens-season-5"
  },
  {
    id: 2,
    title: "Throne of Seal",
    image: "https://anichin.rest/wp-content/uploads/2022/04/throne-of-seal-sub-indo.webp",
    episode: "Episode 161",
    type: "Donghua",
    rating: "8.83",
    slug: "throne-of-seal"
  },
  {
    id: 3,
    title: "Perfect World",
    image: "https://anichin.rest/wp-content/uploads/2021/04/Perfect-World.webp",
    episode: "Episode 78",
    type: "Donghua",
    rating: "8.50",
    slug: "perfect-world"
  },
  {
    id: 4,
    title: "Heaven Swallowing Record",
    image: "https://anichin.rest/wp-content/uploads/2025/05/Heaven-Swallowing-Record.webp",
    episode: "Episode 07",
    type: "Donghua",
    rating: "8.45",
    slug: "heaven-swallowing-record"
  }
]

export default function PopularAnime() {
  return (
    <section className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Popular Today</h2>
        <Link href="/popular" className="text-blue-500 hover:text-blue-400">
          View All
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {popularAnime.map((anime) => (
          <Link key={anime.id} href={`/donghua/${anime.slug}`}>
            <Card className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-all duration-300">
              <div className="relative aspect-[2/3]">
                <img
                  src={anime.image}
                  alt={anime.title}
                  className="w-full h-full object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-black bg-opacity-80 px-2 py-1 rounded text-sm">
                  {anime.rating}
                </div>
                <div className="absolute bottom-2 left-2 bg-blue-600 px-2 py-1 rounded text-sm">
                  {anime.episode}
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg line-clamp-2 mb-2">
                  {anime.title}
                </h3>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>{anime.type}</span>
                  <span>HD</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
