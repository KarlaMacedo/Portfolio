import React from 'react';

interface BlogCardProps {
  title: string;
  author: string;
  likes: number;
  comments: number;
  content: string;
  imageSrc: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  author,
  likes,
  comments,
  content,
  imageSrc,
}) => {
  return (
    <div className="blog-card">
      <div className="img-holder">
        <img src={imageSrc} alt="Blog Image" />
      </div>
      <div className="content-holder">
        <h6 className="title">{title}</h6>
        <p className="post-details">
          <a href="#">By: {author}</a>
          <a href="#">
            <i className="ti-heart text-danger"></i> {likes}
          </a>
          <a href="#">
            <i className="ti-comment"></i> {comments}
          </a>
        </p>
        <p>{content}</p>
        <a href="#" className="read-more">
          Read more <i className="ti-angle-double-right"></i>
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
