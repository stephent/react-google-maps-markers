import Head from 'next/head'
import log from 'loglevel'

import CustomMap from '../components/google-maps/CustomMap'

export default function Home({ googleMaps }) {
  
  log.info("Loading using version ", googleMaps?.version)
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Map Markers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-xl font-bold">
          Map Markers Demo with <a className="text-blue-600" href="https://github.com/JustFly1984/react-google-maps-api">
          JustFly1984/react-google-maps-api
          </a>
        </h1>

        <p className="mt-3 text-lg">
          Loading Google Maps JS Version {' '}
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            {googleMaps?.version}
          </code>
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          { googleMaps && googleMaps.version ? 
            <CustomMap {...googleMaps} coordinate={{lat: 40, lng: -105}} /> :
            <p>Please configure an API GOOGLE_MAPS_API_KEY and GOOGLE_MAPS_API_VERSION in your <pre>.env.local</pre> file</p>
          }
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps(context) {
  
  let googleMaps = {
    apiKey: process.env.GOOGLE_MAPS_API_KEY,
    version: process.env.GOOGLE_MAPS_API_VERSION
  }

  return {
    props: {
      googleMaps: googleMaps
    }, // will be passed to the page component as props
  }
}
