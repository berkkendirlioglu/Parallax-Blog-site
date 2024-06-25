import "./blogs.scss";
import BlogCard from "./PostsCards/BlogCards/BlogCard";
import RBlogCard from "./PostsCards/RBlogCard/RBlogCard";

interface Posts {
  url:string;
}

const postData:Posts[] = [
  {
    url:"https://cdn-imgix.headout.com/media/images/a98a325410d5eb66daa5cbf4a2ff7db3-tower%20bridge%20london.jpg"
  },
  {
    url:"https://www.travelandleisure.com/thmb/SPUPzO88ZXq6P4Sm4mC5Xuinoik=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/eiffel-tower-paris-france-EIFFEL0217-6ccc3553e98946f18c893018d5b42bde.jpg",
  },
  {
    url:"https://upload.wikimedia.org/wikipedia/commons/e/e3/Kheops-Pyramid.jpg"
  }
];

const Blogs = () => {
  return (
    <section className="blogs">
      <div className="container">
        <BlogCard imgUrl={postData[0].url}/>
        <RBlogCard imgUrl={postData[1].url}/>
        <BlogCard imgUrl={postData[2].url}/>
      </div>
    </section>
  );
};

export default Blogs;
