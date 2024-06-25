import './rblogcard.scss';

const RBlogCard = ({imgUrl}: {imgUrl:string}) => {
  return (
    <>
      <a href='#' className="r-blog-container mb-5">
        <div className="r-row row">

          <div className="col-lg-6 col-12 r-blog-content mt-lg-0 mt-4">
            <div className="r-blog-t-container">
              <div className="r-post-detail">
                <div className="r-post-user-img">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/003/337/584/non_2x/default-avatar-photo-placeholder-profile-icon-vector.jpg"
                    alt=""
                  />
                </div>
                <div className="r-post-date-time ms-2">
                  <div className="r-post-username fw-bold">Admin</div>
                  <div className="r-post-date-time">Haziran 6, 2024 - 1 min</div>
                </div>
              </div>

              <div className="r-blog-post-content">
                <div className="r-blog-post-title my-3">
                  <h3 className="fw-bold blog-title">POST TITLE</h3>
                </div>

                <div className="r-blog-post-text">
                  <p className="r-post-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nulla alias similique at id fugiat corrupti expedita fugit
                    quis labore, nisi maiores nemo non cum. Libero deleniti
                    similique, dolorum molestiae necessitatibus praesentium cum
                    ad doloribus, amet dolore rem est totam laboriosam sint at.
                    Harum enim aliquam officiis dolorem autem. Beatae, dolores?
                  </p>
                </div>
              </div>

              <div className="r-blog-int">
                <button className="r-blog-icons">
                  <i className="bi bi-eye"></i>
                  <span className="ms-2">5</span>
                </button>
                <button className="r-blog-icons mx-3">
                  <i className="bi bi-chat"></i>
                  <span className="ms-2">0</span>
                </button>
                <button className="r-blog-icons">
                  <i className="bi bi-heart"></i>
                  <span className="ms-2">7</span>
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-12 r-img-sect">
            <div className="r-img-container">
              <img className='r-post-img'
                src={imgUrl}
                alt="blog-img"
              />
            </div>
          </div>
        </div>
      </a>
    </>
  )
}

export default RBlogCard
