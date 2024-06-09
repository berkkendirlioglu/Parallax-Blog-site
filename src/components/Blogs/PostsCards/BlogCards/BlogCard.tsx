import React from "react";
import "./blogcard.scss";

const BlogCard = ({imgUrl}: {imgUrl:string}) => {
  return (
    <>
      <a href="#" className="blog-container mb-5">
        <div className="row">
          
          <div className="col-lg-6 col-12 img-sect">
            <div className="img-container">
              <img className="post-img"
                src={imgUrl}
                alt="blog-img"
              />
            </div>
          </div>

          <div className="col-lg-6 col-12 blog-content mt-lg-0 mt-4">
            <div className="blog-t-container">
              <div className="post-detail">
                <div className="post-user-img">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/003/337/584/non_2x/default-avatar-photo-placeholder-profile-icon-vector.jpg"
                    alt=""
                  />
                </div>
                <div className="post-date-time ms-2">
                  <div className="post-username fw-bold">Admin</div>
                  <div className="post-date-time">Haziran 6, 2024 - 1 min</div>
                </div>
              </div>

              <div className="blog-post-content">
                <div className="blog-post-title my-3">
                  <h3 className="fw-bold blog-title">POST TITLE</h3>
                </div>

                <div className="blog-post-text">
                  <p className="post-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nulla alias similique at id fugiat corrupti expedita fugit
                    quis labore, nisi maiores nemo non cum. Libero deleniti
                    similique, dolorum molestiae necessitatibus praesentium cum
                    ad doloribus, amet dolore rem est totam laboriosam sint at.
                    Harum enim aliquam officiis dolorem autem. Beatae, dolores?
                  </p>
                </div>
              </div>

              <div className="blog-int">
                <button className="blog-icons">
                  <i className="bi bi-eye"></i>
                  <span className="ms-2">5</span>
                </button>
                <button className="blog-icons mx-3">
                  <i className="bi bi-chat"></i>
                  <span className="ms-2">0</span>
                </button>
                <button className="blog-icons">
                  <i className="bi bi-heart"></i>
                  <span className="ms-2">7</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default BlogCard;
