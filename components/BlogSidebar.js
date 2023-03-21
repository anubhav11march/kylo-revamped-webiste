import React, { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const BlogSidebar = () => {

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
    <div className="blog__sidebar">
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
      <div className="sidebar__widget mb-40">
        <div className="sidebar__widget-title">
          <h3>Categories</h3>
        </div>
        <div className="sidebar__widget-link">
          <ul>
            <li>
              <Link href={"/blog?category=Web Development"}>
                <a>Web Development</a>
              </Link>
            </li>
            <li>
              <Link href={"/blog?category=Mobile Development"}>
                <a>Mobile Development</a>
              </Link>
            </li>
            <li>
              <Link href={"/blog?category=AI/ML"}>
                <a>AI/ML</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="sidebar__widget mb-40">
        <div className="sidebar__widget-title">
          <h3>Recent Posts</h3>
        </div>
        <div className="sidebar__rc">
          <ul>
            {topBlog?.map(
              (
                { _id, thumbnail, category, date, title },
                index
              ) => (
                <li className="sidebar__rc-item" key={index}>
                  <div className="sidebar__rc-thumb">
                    <Link href={`/blog/${_id}`}>
                      <a>
                        <img src={thumbnail} alt="blog" className='blog-img-test'/>
                      </a>
                    </Link>
                  </div>
                  <div className="sidebar__rc-content">
                    <h5>
                      <Link href={`/blog/${_id}`}>
                        <a>{title}</a>
                      </Link>
                    </h5>
                    <div className="sidebar__rc-meta">
                      <span>
                        <i className="fa-solid fa-calendar-days"></i>{date.slice(4, 15)}
                      </span>
                    </div>
                  </div>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
      <div className="sidebar__widget mb-40">
        <div className="sidebar__widget-title">
          <h3>Services</h3>
        </div>
        <div className="sidebar__widget-tags">
          <Link href="/web-app-development">
            <a>Web Development</a>
          </Link>
          <Link href="/mobile-app-development">
            <a>Mobile App Development</a>
          </Link>
          <Link href="/uiux-designing">
            <a>UI/UX Designing</a>
          </Link>
          <Link href="/aiml-development">
            <a>AI/ML/Chatbot</a>
          </Link>
          <Link href="/growth-hacking">
            <a>Growth Hacking</a>
          </Link>
          <Link href="/quality-assurance">
            <a>Quality Assurance</a>
          </Link>
          <Link href="/devops">
            <a>DevOps</a>
          </Link>
          <Link href="/data-engineering">
            <a>Data Engineering</a>
          </Link>
          <Link href="/branding">
            <a>Branding</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;