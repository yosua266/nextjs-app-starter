import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const latestReleases = [
  {
    id: 1,
    title: "My Senior Brother Is Too Steady",
    image: "https://anichin.rest/wp-content/uploads/2023/12/Senior-Brother-2.webp",
    episode: "Episode 91",
    type: "Donghua",
    status: "Ongoing",
    slug: "my-senior-brother-is-too-steady-episode-91"
  },
  {
    id: 2,
    title: "Little Fairy Yao",
    image: "https://anichin.rest/wp-content/uploads/2025/04/Little-Fairy-Yao.webp",
    episode: "Episode 15",
    type: "Donghua",
    status: "Ongoing",
    slug: "little-fairy-yao-episode-15"
  },
  {
    id: 3,
    title: "Throne of Seal",
    image: "https://anichin.rest/wp-content/uploads/2022/04/throne-of-seal-sub-indo.webp",
    episode: "Episode 161",
    type: "Donghua",
    status: "Ongoing",
    slug: "throne-of-seal-episode-161"
  },
  {
    id: 4,
    title: "Fight For The Throne",
    image: "https://anichin.rest/wp-content/uploads/2025/01/Fight-For-The-Throne.webp",
    episode: "Episode 40",
    type: "Donghua",
    status: "Ongoing",
    slug: "fight-for-the-throne-episode-40"
  },
  {
    id: 5,
    title: "Heaven Swallowing Record",
    image: "https://anichin.rest/wp-content/uploads/2025/05/Heaven-Swallowing-Record.webp",
    episode: "Episode 07",
    type: "Donghua",
    status: "Ongoing",
    slug: "heaven-swallowing-record-episode-07"
  },
  {
    id: 6,
    title: "Yi Nian Yong Heng Season 3",
    image: "https://anichin.rest/wp-content/uploads/2024/07/Yi-Nian-Yong-Heng-Season-3.webp",
    episode: "Episode 51",
    type: "Donghua",
    status: "Ongoing",
    slug: "yi-nian-yong-heng-season-3-episode-51"
  }
]

export default function LatestReleases() {
  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Latest Releases</h2>
        <Link href="/latest" className="text-blue-500 hover:text-blue-400">
          View All
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {latestReleases.map((anime) => (
          <Link key={anime.id} href={`/watch/${anime.slug}`}>
            <Card className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-all duration-300">
              <div className="relative aspect-[2/3]">
                <img
                  src={anime.image}
                  alt={anime.title}
                  className="w-full h-full object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-blue-600 px-2 py-1 rounded text-xs">
                  {anime.status}
                </div>
                <div className="absolute bottom-2 left-2 bg-black bg-opacity-80 px-2 py-1 rounded text-xs">
                  {anime.episode}
                </div>
              </div>
              <CardContent className="p-3">
                <h3 className="font-medium text-sm line-clamp-2">
                  {anime.title}
                </h3>
                <div className="mt-1 text-xs text-gray-400">
                  {anime.type}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
