import './footer.scss';
import crab from "../../../public/images/left-crab.png"
import beach from "../../../public/images/beach.png"

const Footer = () => {
  return (
    <>
      <footer className='foot'>
        <div className="section">
          
          <img className='footer-img' src={beach} alt="beach" />
          <img className='left-crab' src={crab} alt="crab" />

          <div className="container">
            <div className="row">

              <div className="col-12 footer-list">
                <ul className='list-items p-0'>
                  <li className='list-item'>
                    <a href="#">About</a>
                  </li>
                  
                  <li className='list-item'>
                    <a href="#">Blogs</a>
                  </li>
                  
                  <li className='list-item'>
                    <a href="#">Videos</a>
                  </li>
                  <li className='list-item'>
                    <a href="#">Contact</a>
                  </li>
                </ul>
                <div className="powered text-white mt-5">
                    <h6>© Powered by Berk Kendirlioğlu</h6>
                  </div>
              </div>

            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
