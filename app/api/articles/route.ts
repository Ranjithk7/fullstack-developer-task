import { db } from '@/drizzle/db'
import { articles } from '@/drizzle/schema'
import { eq } from 'drizzle-orm';
import fetchArticles from '@/utils/fetchArticles';
import { NextRequest, NextResponse } from '@/node_modules/next/server';

export async function GET(req:NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const category = searchParams.get("category");
        if (!category) return NextResponse.json({error: "Category is Required"}, {status: 400});

        const existingArticle = await db.select().from(articles).where(eq(articles.category, category))

        if (existingArticle.length > 0) {
            return NextResponse.json(existingArticle);
        }

        const fetchedArticles = await fetchArticles(category as string);

        const formattedArticles = fetchedArticles.map((article: any) => ({
            title: article.title,
            link: article.link,
            snippet: article.snippet || "",
            category
        }));

        await db.insert(articles).values(formattedArticles);
        return NextResponse.json(formattedArticles)
    } catch(err) {
        NextResponse.json({error: "Internal Server Error"}, {status: 500});
    }

}