import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import LargeCard from '../LargeCard'

export default function Home({ data, card }: any) {
  console.log("DATA", data);

  return (
    <div className='font-Manrope'>
      <Head>
        <title>Airbnb: Holiday Rentals, Cabins, Beach Houses, Unique Homes & Experiences - Airbnb</title>
        <link rel="icon" href="../public/airbnb.png" />
      </Head>

      <Header />
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>

        <section className='pt-6'>
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          {/* puling data form tha pai */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {
              data.map((item: any, index: any) => {
                return (<SmallCard img={item.img} location={item.location} distance={item.distance} key={index} />)
              })
            }

          </div>
        </section>
        <section>
          <h1 className='text-4xl font-semibold py-8'>Live Anywhere</h1>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
            {
              card.map((item: any, index: any) => {
                console.log("item", item);

                return <MediumCard key={index} image={item.img} title={item.title} />
              })
            }

          </div>
        </section>

        <LargeCard img="https://links.papareact.com/4cj" title='The Greatest Outdoors' description="Wishlist curated by Airbnb" button="Get Insipred" />

      </main>
    </div>
  )
}
export const getServerSideProps = async () => {

  const exploreData = await fetch("https://links.papareact.com/pyp")
  const data = await exploreData.json()
  console.log(data);
  const cardData = await fetch("https://links.papareact.com/zp1")
  const card = await cardData.json()
  console.log(card);
  return {
    props: {
      data,
      card
    },
  }
}
