import React from "react";

const Card = ({data,handlecart}) => {
    // console.log(handlecart)
    return (<>
        <div className="card" style={{ width: "18rem",height:"30rem"}}>
        <img src={data.image} className="card-img-top" alt="..." width={"100%"}  height={"50%"}/>
        <div className="card-body">
        <h5 className="card-title">{data.name}</h5>
        <h5 className="card-title">Price{data.price}</h5>
        <p className="card-text">
        {data.description}
        </p>
        <button onClick={()=>{handlecart(data)}} className="btn btn-primary">
      add to cart
        </button>
  </div>
</div>
    </>)
}

export default Card