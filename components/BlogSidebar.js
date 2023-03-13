import React, { useContext, useState, useEffect } from 'react';
import Link from 'next/link';

const BlogSidebar = () => {

  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        setData(data?.data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No blog data</p>;

  const topBlog = data.slice(0, 3);

  return (
    <div className="blog__sidebar">
      <div className="sidebar__widget-search mb-40">
        <form action="#">
          <input type="text" placeholder="Keywords" />
          <button type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
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
                <li className="sidebar__rc-item">
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
          <Link href="/single-blog">
            <a>App</a>
          </Link>
          <Link href="/single-blog">
            <a>Branding</a>
          </Link>
          <Link href="/single-blog">
            <a>Web Design</a>
          </Link>
          <Link href="/single-blog">
            <a>UI/UX Designing</a>
          </Link>
          <Link href="/single-blog">
            <a>Landing</a>
          </Link>
          <Link href="/single-blog">
            <a>Development</a>
          </Link>
          <Link href="/single-blog">
            <a>Digital Marketing</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;