import '../../css/Customer/allgames.css';
import { useEffect, useRef, useState, React } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom/client';
import { TbFlame } from 'react-icons/tb';
import { BsCart, BsSearch } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import $ from 'jquery';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'

const BestSeller = (props) => {
  const addToWishlist = (event, id) => {
    event.preventDefault();
    if ($(`.add_to_wishlist_${id}`).css("color") === "rgb(0, 0, 0)")
      $(`.add_to_wishlist_${id}`).css("color", "red");
    else
      $(`.add_to_wishlist_${id}`).css("color", "rgb(0, 0, 0)");
  }

  const addToCart = (event, id) => {
    event.preventDefault();
    if ($(`.add_to_cart_${id}`).css("color") === "rgb(0, 0, 0)")
      $(`.add_to_cart_${id}`).css("color", "#00B3EC");
    else
      $(`.add_to_cart_${id}`).css("color", "rgb(0, 0, 0)");
  }
  return (
    <div className={`sale d-flex flex-column align-items-center ${props.class}`}>
      <img className='pic' src={props.url} alt="picture"></img>
      <div className='section'>
        <button className='detail mt-3' onClick={() => { window.location.href = `/admin/gamelist/${props.id}`; }}>${props.price}</button>
        <div className='d-flex w-100 justify-content-center align-items-center mt-2'>
          <BsCart className={`mx-3 add_to_cart add_to_cart_${props.id}`} style={{
            fontSize: "35px"
          }} onClick={(e) => { addToCart(e, props.id) }} />
          <AiOutlineHeart className={`mx-3 add_to_wishlist add_to_wishlist_${props.id}`} style={{
            fontSize: "35px"
          }} onClick={(e) => { addToWishlist(e, props.id) }} />
        </div>
      </div>
    </div>
  );
}

export default function CustomerHome() {
  const effectRan = useRef(false);
  const [showMore, setShowMore] = useState(false);
  const effectRan2 = useRef(false);
  const handleShowMore = () => {
    effectRan2.current = true;
    setShowMore(!showMore);
  };
  const [offset, setOffset] = useState(3);
  useEffect(() => {
    if (effectRan.current === false) {
      document.getElementById("home").style.backgroundColor = "#00B3EC";
      document.getElementById("home").style.color = "white";
      window.addEventListener('resize', () => {
        if (window.innerWidth < 728) {
          setOffset(1);
        }
        else if (window.innerWidth < 1080) {
          setOffset(2);
        }

        if (window.innerWidth > 575) {
          $(".menu_container").css("opacity", "1");
          $(".menu_container").css("visibility", "visible");
          $(".dropdown").css("display", "none");
        }
        else {
          $(".dropdown").first().css("display", "block");
        }
      });
      axios
        .get("http://26.13.223.69/getAllGames")
        .then((res) => {
          const group1 = ReactDOM.createRoot(
            document.getElementsByClassName("group")[0]
          );
          const group2 = ReactDOM.createRoot(
            document.getElementsByClassName("group")[1]
          );


          let temp1 = [],
            temp2 = [],
            temp3 = [];
          for (let i = 0; i < res.data.length; i++) {
            const data = new Uint8Array(Object.values(res.data[i].picture_1));
            const blob = new Blob([data], { type: "image/jpg" });
            const url = URL.createObjectURL(blob);

            if (i < 3) {
              temp1.push(
                <BestSeller
                  key={i}
                  url={url}
                  class={""}
                  price={res.data[i].price}
                  id={res.data[i].id}
                />
              );
            } else if (i >= 3 && i <= 5) {
              temp2.push(
                <BestSeller
                  key={i}
                  url={url}
                  class={"mx-5"}
                  price={res.data[i].price}
                  id={res.data[i].id}
                />
              );
            } else if (i >= 6 && i <= 8) {
              temp3.push(
                <BestSeller
                  key={i}
                  url={url}
                  class={"mx-5"}
                  price={res.data[i].price}
                  id={res.data[i].id}
                />
              );
            }
          }
          group1.render(<>{temp1}</>);
          group2.render(<>{temp2}</>);

        })
        .catch((error) => console.log(error));

      console.log("rendered");
      effectRan.current = true;
    }
  }, []);
  useEffect(() => {
    if (effectRan2.current === false) {
      axios
        .get("http://26.13.223.69/getAllGames")
        .then((res) => {
          console.log(res);
          const group3 = ReactDOM.createRoot(
            document.getElementsByClassName("group")[2]
          );
          const group4 = ReactDOM.createRoot(
            document.getElementsByClassName("group")[3]
          );
          let
            temp3 = [],
            temp4 = [];
          for (let i = 0; i < res.data.length; i++) {
            const data = new Uint8Array(Object.values(res.data[i].picture_1));
            const blob = new Blob([data], { type: "image/jpg" });
            const url = URL.createObjectURL(blob);
            if (i >= 6 && i <= 8) {
              temp3.push(
                <BestSeller
                  key={i}
                  url={url}
                  class={"mx-5"}
                  price={res.data[i].price}
                  id={res.data[i].id}
                />
              );
            }

            if (i >= 9 && i <= 11) {
              temp4.push(
                <BestSeller
                  key={i}
                  url={url}
                  class={"mx-5"}
                  price={res.data[i].price}
                  id={res.data[i].id}
                />
              );
            }

          }
          group3.render(<>{temp3}</>);
          group4.render(<>{temp4}</>);
        })
        .catch((error) => console.log(error));

      console.log("rendered2");
      effectRan2.current = true;
    }
  }, [handleShowMore]);
  const search = () => {
    $(".group").empty();
    const formData = new FormData();
    formData.append("data", $("#search").val());
    axios.post('http://26.13.223.69/findGame', formData)
      .then((res) => {
        console.log(res);
        const group3 = ReactDOM.createRoot(
          document.getElementsByClassName("group")[2]
        );
        const group4 = ReactDOM.createRoot(
          document.getElementsByClassName("group")[3]
        );
        let
          temp3 = [],
          temp4 = [];
        for (let i = 0; i < res.data.length; i++) {
          const data = new Uint8Array(Object.values(res.data[i].picture_1));
          const blob = new Blob([data], { type: "image/jpg" });
          const url = URL.createObjectURL(blob);
          if (i >= 6 && i <= 8) {
            temp3.push(
              <BestSeller
                key={i}
                url={url}
                class={"mx-5"}
                price={res.data[i].price}
                id={res.data[i].id}
              />
            );
          }

          if (i >= 9 && i <= 11) {
            temp4.push(
              <BestSeller
                key={i}
                url={url}
                class={"mx-5"}
                price={res.data[i].price}
                id={res.data[i].id}
              />
            );
          }

        }
        group3.render(<>{temp3}</>);
        group4.render(<>{temp4}</>);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className='d-flex flex-column justify-content-center align-items-center h-100 w-100 customer-home'>
      <div className='board '>
        <div className=" d-flex align-items-center justify-content-center best_sellers row">
          <h2 className='d-flex align-items-center' style={{ color: "red" }}><TbFlame />All games<TbFlame /></h2>
        </div>
        <div className='d-flex justify-content-end align-items-center w-100'>
          <form className='d-flex justify-content-end align-items-center w-100' style={{ height: "40px" }}>
            <input className='search' id='search' type='text' placeholder='Find' onKeyUp={search} />
            <BsSearch id='scope' className="search_icon" size={20} />
          </form>
        </div>
        <div className="best-sellers cointainer overflow-auto" id='body' style={{ height: 'calc(100%-300px)' }}>
          <div className="group">
          </div>
          <div className="group">
          </div>
          <div className="group ">
          </div>
          <div className="group ">
          </div>
          <div>
            {/* <GrFormPrevious onClick={ () => { if (offset !== 0) { setOffset(offset - 3); effectRan.current = false; $("#body").empty(); } } } />
            <GrFormNext onClick={ () => { if (!flag) { setOffset(offset + 3); effectRan.current = false; $("#body").empty(); } } } /> */}
          </div>
          {/* <button onClick={handleShowMore}>Show more</button> */}

        </div>
      </div>
    </div>
  )
}