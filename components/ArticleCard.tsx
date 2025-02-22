import Link from "next/link";

export default function ArticleCard({ article }: { article: any }) {
  const { title, snippet, link} = article || {};

  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600">{snippet}</p>
      <Link href={link} className="text-blue-500 mt-2 inline-block">
        Read More
    </Link>
    </div>
  );
}