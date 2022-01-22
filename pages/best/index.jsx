import Head from "next/head";
import doc from "../../json/best.json";
import Story from "../../components/Story";

export default function Best() {
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <Head>
        <title>HackerNews Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {doc.map((story, key) => (
        <Story story={story} key={key} />
      ))}
    </div>
  );
}
