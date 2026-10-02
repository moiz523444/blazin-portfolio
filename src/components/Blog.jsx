import React from 'react';

const Blog = () => {
  return (
    <div className="blog-section" id="blog" style={{ marginTop: '0', height: 'auto', padding: '6rem 0' }}>
      <div className="blogs-main-headings" style={{ position: 'relative' }}>
        <p className="blog-heading">
          VISUAL <span className="fonts">JOURNAL</span>
        </p>

        <div className="points-blogs">
          <span className="blog-para" style={{ color: '#e6e6e6' }}>
            A collection of design experiments, creative processes,
            front-end discoveries, and visual stories. Every project
            begins with an idea, evolves through exploration, and
            becomes an experience worth sharing.
          </span>
        </div>
      </div>

      <div className="cards-blogs" style={{ marginTop: '4rem' }}>
        <div className="card-1">
          <div className="image-blog">
            <img 
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop" 
              alt="Motion Beyond Animation" 
              loading="lazy" 
              decoding="async" 
            />
          </div>
          <p>Motion Beyond Animation</p>
          <span>October 1, 2026</span>
        </div>

        <div className="card-1">
          <div className="image-blog">
            <img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" 
              alt="Dark Interfaces" 
              loading="lazy" 
              decoding="async" 
            />
          </div>
          <p>The Psychology of Dark Interfaces</p>
          <span>September 14, 2026</span>
        </div>

        <div className="card-1">
          <div className="image-blog">
            <img 
              src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop" 
              alt="Visual Story" 
              loading="lazy" 
              decoding="async" 
            />
          </div>
          <p>Designing Experiences, Not Websites</p>
          <span>August 22, 2026</span>
        </div>
      </div>
    </div>
  );
};

export default Blog;
