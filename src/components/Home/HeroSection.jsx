import React, { useState, useEffect } from "react";
import { usePosts } from "../../contexts/postsContext";

const Hero = () => {
  const { posts } = usePosts();
  const [post1, setPost1] = useState([]);
  useEffect(() => {
    const post1 = posts.slice(0, 1);
    setPost1(post1);
    console.log(post1);
  }, [posts]);

  return (
    <section className="container">
      <div className="row py-5">
        {post1.map((post) => (
          <div className="col-md-7">
            {/* <img
              src=
              alt=""
              className="img-fluid rounded mb-3"
            /> */}
            <h3>{post.title.rendered}</h3>
          </div>
        ))}

        <div className="col-sm-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6">
                <img
                  src="https://eng.kebabcast.com/daccas/uploads/2021/06/love-and-puzzle-concept-white-jigsaw-puzzle-pieces-royalty-free-image-928481604-1545407197-1-840x450.jpg"
                  alt=""
                  className="img-fluid rounded mb-3"
                />
              </div>
              <div className="col-sm-6">
                <h6>A to Z of Loving Wrong(part 3)</h6>
                <p>Nadia Gazi</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-6">
                <img
                  src="https://eng.kebabcast.com/daccas/uploads/2021/06/love-and-puzzle-concept-white-jigsaw-puzzle-pieces-royalty-free-image-928481604-1545407197-1-840x450.jpg"
                  alt=""
                  className="img-fluid rounded mb-3"
                />
              </div>
              <div className="col-sm-6">
                <h6>A to Z of Loving Wrong(part 3)</h6>
                <p>Nadia Gazi</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-6">
                <img
                  src="https://eng.kebabcast.com/daccas/uploads/2021/06/love-and-puzzle-concept-white-jigsaw-puzzle-pieces-royalty-free-image-928481604-1545407197-1-840x450.jpg"
                  alt=""
                  className="img-fluid rounded mb-3"
                />
              </div>
              <div className="col-sm-6">
                <h6>A to Z of Loving Wrong(part 3)</h6>
                <p>Nadia Gazi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
