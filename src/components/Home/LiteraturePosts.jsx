import React from "react";
import HomePostCard from "./HomePostCard";

const LiteraturePosts = () => {
  return (
    <div className="row my-5 py-5">
      <div className="col-md-3 col-sm-6">
        <HomePostCard
          imgId="https://eng.kebabcast.com/daccas/uploads/2020/10/debates-500x250.jpeg"
          title="U.S. Presidential Debate: The Interesting Effect of the Face-off"
        />
      </div>
      <div className="col-md-3 col-sm-6">
        <HomePostCard
          imgId="https://eng.kebabcast.com/daccas/uploads/2020/10/churchill-hypocrate-500x250.jpg"
          title="Winston Churchill: The Architect of Bengal Famine of 1943"
        />
      </div>
      <div className="col-md-3 col-sm-6">
        <HomePostCard
          imgId="https://eng.kebabcast.com/daccas/uploads/2020/10/Omar-Ibn-Said2-500x250.jpg"
          title="Omar Ibn Said: A Legendary Muslim Slave"
        />
      </div>
      <div className="col-md-3 col-sm-6">
        <HomePostCard
          imgId="https://eng.kebabcast.com/daccas/uploads/2020/09/Humpty-Dumpty-474x250.jpg"
          title="The real origin of “Humpty Dumpty”"
        />
      </div>

      <div className="col-md-3 col-sm-6">
        <HomePostCard
          imgId="https://eng.kebabcast.com/daccas/uploads/2020/10/debates-500x250.jpeg"
          title="U.S. Presidential Debate: The Interesting Effect of the Face-off"
        />
      </div>
      <div className="col-md-3 col-sm-6">
        <HomePostCard
          imgId="https://eng.kebabcast.com/daccas/uploads/2020/10/churchill-hypocrate-500x250.jpg"
          title="Winston Churchill: The Architect of Bengal Famine of 1943"
        />
      </div>
      <div className="col-md-3 col-sm-6">
        <HomePostCard
          imgId="https://eng.kebabcast.com/daccas/uploads/2020/10/Omar-Ibn-Said2-500x250.jpg"
          title="Omar Ibn Said: A Legendary Muslim Slave"
        />
      </div>
      <div className="col-md-3 col-sm-6">
        <HomePostCard
          imgId="https://eng.kebabcast.com/daccas/uploads/2020/09/Humpty-Dumpty-474x250.jpg"
          title="The real origin of “Humpty Dumpty”"
        />
      </div>
    </div>
  );
};

export default LiteraturePosts;
