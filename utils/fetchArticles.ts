export default async function fetchArticles(category: string) {
    const API_KEY = "3eea54b6272d0de0e4448eed3f0c958678a36a81";
    const res = await fetch("https://google.serper.dev/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": API_KEY || "",
      },
      body: JSON.stringify({
        q: category, 
        num: 10,
      }),
    });
  
    if (!res.ok) throw new Error("Failed to fetch articles");
    const data = await res.json();
    return data.organic;
  }
  