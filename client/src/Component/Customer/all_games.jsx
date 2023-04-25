import '../../css/Customer/allgames.css';
import { useEffect, useRef, useState, React } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom/client';
import { TbFlame } from 'react-icons/tb';
import { BsCart, BsSearch } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import $ from 'jquery';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

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

  const [offset, setOffset] = useState(0);
  const [count, setCount] = useState(6);
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    if (effectRan.current === false) {
      document.getElementById("home").style.backgroundColor = "#00B3EC";
      document.getElementById("home").style.color = "white";
      window.addEventListener('resize', () => {
        if (window.innerWidth < 728) {
          setCount(2);
        }
        else if (window.innerWidth < 1080) {
          setCount(4);
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
      const formData = new FormData();
      formData.append("limit", count);
      formData.append("offset", offset);
      axios.post("http://localhost/getAllGames", formData)
        .then((res) => {
          if (res.data.length ===0){
            setFlag(true);
          }
          console.log(res);
          let temp = [];
          for (let i = 0; i < res.data.length; i++) {
            const data = new Uint8Array(Object.values(res.data[i].picture_1));
            const blob = new Blob([data], { type: "image/jpg" });
            const url = URL.createObjectURL(blob);
            temp.push(
              <BestSeller
                key={i}
                url={url}
                class={"mx-5"}
                price={res.data[i].price}
                id={res.data[i].id}
              />
            );
            const line = count/2;
            if (i%line ===line-1){
              var index = (i-line+1)/line;
              const group = ReactDOM.createRoot(
                document.getElementsByClassName("group")[index]
              );
              try {group.render(<>{temp.slice(i-line+1, i+1)}</>);}
              catch{group.render(<>{temp.slice(i-line+1)}</>);}
            }
            else if (i+1 ===res.data.length){
              const bot  = i - (i%line);
              index = bot / line;
              const group = ReactDOM.createRoot(
                document.getElementsByClassName("group")[index]
              );
              group.render(<>{temp.slice(bot)}</>);
            }
          }
        })
        .catch((error) => console.log(error));

      console.log("rendered");
      effectRan.current = true;
    }
  }, [offset, count]);
  const search = () => {
    $(".group").empty();
    const formData = new FormData();
    formData.append("data", $("#search").val());
    formData.append("limit", count);
    formData.append("offset", offset);
    axios.post("http://localhost/findGame", formData)
      .then((res) => {
        console.log(res);
        let temp = [];
        for (let i = 0; i < res.data.length; i++) {
          const data = new Uint8Array(Object.values(res.data[i].picture_1));
          const blob = new Blob([data], { type: "image/jpg" });
          const url = URL.createObjectURL(blob);
          temp.push(
            <BestSeller
              key={i}
              url={url}
              class={"mx-5"}
              price={res.data[i].price}
              id={res.data[i].id}
            />
          );
          const line = count/2;
          if (i%line ===line-1){
            var index = (i-line+1)/line;
            const group = ReactDOM.createRoot(
              document.getElementsByClassName("group")[index]
            );
            try {group.render(<>{temp.slice(i-line+1, i+1)}</>);}
            catch{group.render(<>{temp.slice(i-line+1)}</>);}
          }
          else if (i+1 ===res.data.length){
            const bot  = i - (i%line);
            index = bot / line;
            const group = ReactDOM.createRoot(
              document.getElementsByClassName("group")[index]
            );
            group.render(<>{temp.slice(bot)}</>);
          }
        }
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
          <div className="group justify-content-center align-items-center">
          </div>
          <div className="group justify-content-center align-items-center">
          </div>
          <div>
            <GrFormPrevious size={30}  onClick={ () => {  if (offset !== 0) { $(".group").empty(); setOffset(offset - count); effectRan.current = false;} } } />
            <GrFormNext size={30}  onClick={ () => { if (!flag) {  $(".group").empty(); setOffset(offset + count); effectRan.current = false;}} } />
          </div>
          {/* <button onClick={handleShowMore}>Show more</button> */}

        </div>
      </div>
    </div>
  )
}