import "../styles/List.less"
import ArticlesCard from "../Copmonents/ArticlesCard.jsx"
import React from 'react';
import { Pagination } from '@gravity-ui/uikit';

export default function List() {
  return (
    <>
      <section className="list">
        <ArticlesCard />
        <ArticlesCard />
        <ArticlesCard />
        <ArticlesCard />
        <ArticlesCard />
      </section>
      <Pagination className="pagination" page={1} pageSize={100} total={1000} compact={true} />
    </>
  )
}