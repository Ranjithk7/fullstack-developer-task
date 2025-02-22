'use client'
import { useSelector } from 'react-redux';
import React from 'react'
import ArticleCard from '@/components/ArticleCard';

export default function ArticleDetail({params}: {params: any}) {
    const articles = useSelector((state: any) => state.articles.articles);
    const article = articles.find(async (a: any) => a.id === (await params).id)
    return (
        <ArticleCard article={article}/>
    )
}