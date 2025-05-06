import HomeCarousel from '@/components/shared/home/home-carousel'
import { data } from '@/data'

export default async function Page() {
  return <HomeCarousel items={data.carousels} />
}
