

const Review = (item) => {
  return (
    <div className="card w-80 bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="flex  items-center mb-4">
          <div className="avatar">
            {/* <div className="">
              <img className="w-40" src={item.img} alt="" />
            </div> */}
          </div>
          <div>
            <h4 className="ml-4">{item.name}</h4>
            <p className="ml-4">{item.location}</p>
          </div>
        </div>
        <p className="">{item.review}</p>

      </div>
    </div>
  );
};

export default Review;
