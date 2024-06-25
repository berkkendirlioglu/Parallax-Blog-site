import "./about.scss";

const About = () => {
  return (
    <section className="about py-5">
      <div className="container py-5">
        <div className="wrapper py-5">
          <div className="row py-5">
            <div className="col-lg-6 col-12">
              
              <div className="neu-container">

                <div className="about-neu">

                  <div className="image">
                    <img
                      src="https://randomuser.me/api/portraits/women/65.jpg"
                      alt=""
                    />
                  </div>

                  <h2 className="f-name text-center">Camila Carpenter</h2>
                  <p className="bio text-center">Lorem, ipsum dolor.</p>

                  <div className="social-icon">
                    <a href="#" className="s-img">
                      <img src="https://static.vecteezy.com/system/resources/previews/023/986/594/non_2x/facebook-logo-facebook-logo-transparent-facebook-icon-transparent-free-free-png.png" alt="" />
                    </a>
                    <a href="#" className="s-img">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="" />
                    </a>
                    <a href="#" className="s-img">
                      <img src="https://www.edigitalagency.com.au/wp-content/uploads/new-Twitter-logo-x-black-png.png" alt="" />
                    </a>
                    <a href="#" className="s-img">
                      <img src="https://static.vecteezy.com/system/resources/previews/023/986/704/non_2x/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.png" alt="" />
                    </a>
                    
                  </div>

                  <div className="buttons">
                    <button className="msg">Message</button>
                    <button className="sub">Subscribe</button>
                  </div>

                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 mt-lg-0 mt-5">
              <div className="about-content">
                <div className="about-container px-lg-0 px-5">
                  <h2 className="about-title fw-bold text-lg-start text-center">Camila Carpenter</h2>
                  <p className="about-text text-lg-start text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    cum quia sit aut debitis, deleniti repudiandae omnis nobis
                    minus ipsam quibusdam, libero amet modi assumenda similique.
                    Ad magni deleniti ullam aut repudiandae mollitia qui modi
                    aperiam fugit commodi tempore in doloremque omnis, enim
                    aliquam voluptatibus necessitatibus fuga quo, repellendus
                    dolore.Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. In cum quia sit aut debitis, deleniti repudiandae
                    omnis nobis minus ipsam quibusdam, libero amet modi
                    assumenda similique. Ad magni deleniti ullam aut repudiandae
                    mollitia qui modi aperiam fugit commodi tempore in
                    doloremque omnis, enim aliquam voluptatibus necessitatibus
                    fuga quo, repellendus dolore.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
