"use client"
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { setArticles } from '@/store/index'
import Navbar from '@/components/NavBar'
import ArticleCard from "@/components/ArticleCard";

export default function Home() {
  const dispatch = useDispatch();
  const { category } = useSelector((state: any) => state.preferences)
  const { articles } = useSelector((state: any) => state.articles)
  const { user } = useSelector((state: any) => state.auth) 

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const res = await fetch(`/api/articles?category=${category}`);        
        const data = await res.json();
        dispatch(setArticles(data))
        
      } catch (error) {
        console.error("Error fetching articles: ", error);
      }
    };

    loadArticles();
  }, [category, dispatch]);

  return (
    <div>
      <Navbar user={user}/>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Articles on {category}</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
          {
            articles.map((article: any, i: number) => (
              <ArticleCard key={i} article={article} />
            ))
          }
        </div>
      </div>
    </div>
  )
}
