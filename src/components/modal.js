import React from "react";

const Modal = (props) => {
  console.log(props.singlyData);
  const{image_link,description
, tool_name,website } = props.singlyData;
  return (
    <>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="card lg:card-side bg-base-100">
            
            <div className="card-body">
              <h2 className="card-title">{tool_name ? tool_name: "Not Found"}</h2>
              <p>{description ? description: "Not Found"}.</p>
              <p> Visit Our Website <a href={website ? website: "Not Found"}><strong>Click here</strong></a></p>
              
            </div>
            <figure className="w-full h-64">
              <img 
                src={image_link && image_link[0]}
                alt="Album"
              />
            </figure>
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal-5" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
