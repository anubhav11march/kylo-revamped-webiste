import React, { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const BlogSidebarKeyword = () => {

  const { query } = useRouter();

  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const [keyword, setKeyword] = useState(null);
  const [keywordPlaceholder, setKeywordPlaceholder] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        setData(data?.data);
        setLoading(false);
      });

      if(query.keyword){
        setKeywordPlaceholder(query.keyword);
      }

      if(query.keyword || query.category){
        window.scrollTo(0,600);
      }
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No blog data</p>;

  const topBlog = data.slice(0, 3);

  return (
    <div className="blog__sidebar" style={{paddingTop:"0px!important"}}>
      <div className="sidebar__widget-search mb-40">
        <form>
          <input style={{color:"#fff"}} type="text" placeholder={keywordPlaceholder ? `${keywordPlaceholder}`: `Keywords`} onChange={(e) => setKeyword(e.target.value)}/>
          <Link href={`/blog?keyword=${keyword}`}>
          <button>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          </Link>
        </form>
      </div>
    </div>
  );
}; 
   export default BlogSidebarKeyword;