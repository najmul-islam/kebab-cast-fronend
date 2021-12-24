import React from "react";
import Tag from "./Tag";

const TagContainer = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6">
          <div className="row">
            <div className="col-4">
              <Tag title="History">
                <i className="fab fa-airbnb"></i>
              </Tag>
            </div>
            <div className="col-4">
              <Tag title="Literature">
                <i class="fas fa-mountain"></i>
              </Tag>
            </div>
            <div className="col-4">
              <Tag title="Philosophy">
                <i class="fas fa-water"></i>
              </Tag>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-4">
              <Tag title="War">
                <i class="fas fa-tree"></i>
              </Tag>
            </div>
            <div className="col-4">
              <Tag title="Sports">
                <i class="fas fa-swimmer"></i>
              </Tag>
            </div>
            <div className="col-4">
              <Tag title="Science">
                <i class="fas fa-feather"></i>
              </Tag>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagContainer;
