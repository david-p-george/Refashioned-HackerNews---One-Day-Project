import Head from 'next/head'

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center py-2">
            <Head>
                <title>HackerNews Clone</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </div>
    );
}