import { useNavigate, useParams } from 'react-router-dom';
import styles from '../../css/Admin/gamedetail.module.css';
import { useState, useEffect, useRef, React } from 'react';
import axios from 'axios';
import $ from 'jquery';
import { BiTrash } from 'react-icons/bi';
import ReactDOM from 'react-dom/client';
import FormattedText from '../function/formated';

const History = (props) =>
{
    return (
        <tr>
            <td className='col-3'>{ props.name }</td>
            <td className='col-3'>{ props.code }    </td>
            <td className='col-2'>{ props.date }</td>
            <td className='col-2'>${ props.price }</td>
            <td className='col-2'>{ props.method }</td>
        </tr>
    );
}


export default function CusDetail()
{
    const id = useParams().id;
    const render = useRef(false);
    const [game, SetGame] = useState({ name: "N/A", 
    description:"N/A",
discount:"N/A", 
price:"N/A",
rating:"N/A",
sold:"N/A",
spec_min:"N/A",
spec_max:"N/A",
image1url:"N/A" });
    const Navigate = useNavigate();
    useEffect(() =>
    {
        if (!render.current)
        {
            $("#customer").css("color", "white");
            $("#customer").css("background-color", "#00B3EC");

           
            axios.get('http://localhost/admin/game/detail')
                .then(res =>
                {
                    console.log(res.data)
                    for (let i = 0; i < res.data.length; i++){
                        if(res.data[i].id == id){
                            const data = new Uint8Array(Object.values(res.data[i].picture_1));
                                    const blob = new Blob([data], { type: "image/jpg" });
                                    const url = URL.createObjectURL(blob);
                        SetGame({
                        
                            name: res.data[i].name,
                            description: res.data[i].description,
                            discount: res.data[i].discount ,
                            price:res.data[i].price,
                            rating:res.data[i].ratings,
                            sold:res.data[i].solds,
                            spec_min:res.data[i].spec_minimum,
                            spec_max:res.data[i].spec_recommended,
                            image1url: url
                        
                        });
                    }
                    }
                    $(".select_menu").val(res.data.membership_rank);
                    $(".discount_input").val(res.data.membership_discount);
                })
            render.current = true;
        }
    });

    const getHistory = () =>
    {
        const formData = new FormData();
        formData.append("data", id);
        axios.post('http://localhost/admin/customer/detail/history', formData)
            .then(res =>
            {
                let temp = [];
                const root = ReactDOM.createRoot(document.getElementById('history'));
                for (let i = 0; i < res.data.length; i++)
                    temp.push(<History key={ i } name={ res.data[i].name } code={ res.data[i].code } date={ res.data[i].date } price={ res.data[i].price } method={ res.data[i].method } />);
                root.render(<>{ temp }</>);
            })
            .catch(error => console.log(error));
    }

    const selectHandler = (event) =>
    {
        if (event.target.value === "None")
            $(`.discount_input`).val(0).prop('disabled', true);
        else if (event.target.value === "Silver")
            $(`.discount_input`).val(1).prop('disabled', true);
        else if (event.target.value === "Gold")
            $(`.discount_input`).val(2).prop('disabled', true);
        else if (event.target.value === "Diamond")
            $(`.discount_input`).val(3).prop('disabled', true);
        else
            $(`.discount_input`).prop('disabled', false).val('');
    }

    const changeInfo = () =>
    {
        $(".rank").css("display", "none");
        $(".discount").css("display", "none");
        $(`.${ styles.edit }`).css("display", "none");
        $(`.${ styles.update }`).css("display", "inline-block");
        $(".select_menu").val(game.rank);
        $(`.discount_input`).val(game.discount);
        if ($(".select_menu").val() === "Special")
            $(`.discount_input`).prop('disabled', false).val(game.discount);
    }

    const cancelUpdate = () =>
    {
        $(".rank").css("display", "inline");
        $(".discount").css("display", "inline");
        $(`.${ styles.edit }`).css("display", "inline-block");
        $(`.${ styles.update }`).css("display", "none");
    }

    const confirmChange = () =>
    {
        if ($(`.select_menu`).val() === "Special" && ($(`.discount_input`).val() > 5 || $(`.discount_input`).val() < 0))
            $(`.${ styles.pop_up }`).css("display", "flex");
        else
        {
            const formData = new FormData();
            formData.append("id", id);
            formData.append("rank", $(`.select_menu`).val());
            formData.append("discount", $(`.discount_input`).val());
            axios.post('http://localhost/admin/customer/detail/edit', formData)
                .then(res =>
                {
                    console.log(res);
                })
                .catch(error => { console.log(error); })
            window.location.reload();
        }
    }

    const question = () =>
    {
        $(`.${ styles.delete_pop_up }`).css("display", "flex");
    }

    const deleteCustomer = () =>
    {
        const formData = new FormData();
        formData.append("id", id);
        axios.post('http://localhost/admin/customer/delete', formData)
            .then(res =>
            {
                console.log(res);
                Navigate("../customerList");
            })
            .catch(error => console.log(error));
    }

    return (
        <div className="d-flex flex-column align-items-center justify-content-center w-100 h-100">
            <div className={ `${ styles.detail_board }` }>
                <div className="d-flex align-items-center justify-content-between w-100" style={ { height: "50px" } }>
                    <BiTrash className={ `mx-3 ${ styles.trash }` } onClick={ question } />
                    <button className={ `mx-3 ${ styles.back }` }><a href="../customerList">Back</a></button>
                </div>
                <div className={ `d-flex align-items-center justify-content-around w-100` } style={ { height: "40%" } }>
                    <img src={ game.image1url} alt='avatar' />
                    {/* <img src={ require('../../img/defaultavt.jpg') } alt='avatar' /> */}
                    <div className={ `w-50 h-100 d-flex flex-column justify-content-center ${ styles.info }` }>
                        <p>Name: { game.name }</p>
                        <p>Price: { game.price }</p>
                        <p>Rating: { game.rating }</p>
                        <p>Copy sold: { game.sold }</p>
                        <p>Discount: { game.discount }</p>
                        
                    </div>
                    
                    
                </div>
                <div className="container">
                    <p ><h6>Description: </h6> {game.description}</p>
                    <div class="row justify-content-center align-items-center g-2">
                        <h1 className="text-center">System requirements</h1>
                    <p className="col-6" ><h6>Miniumum requirements:</h6>  <FormattedText text = {game.spec_min} /></p>
                    <p className="col-6"><h6>Recommended:</h6>  <FormattedText text = {game.spec_max} /></p>
                    </div>
                    
                    </div>
            </div>
            
        </div>
    )
}