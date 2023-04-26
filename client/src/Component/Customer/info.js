import style from '../../css/Customer/info.module.css';
export default function Info() {
    return (
        <div className='d-flex flex-column w-100 h-100 align-items-center justify-content-center'>
            <div className="d-flex flex-column align-items-center justify-content-center" id={`${style.info}`}>
                <div className="d-flex align-items-center justify-content-center">
                    <h2>About Us</h2>
                </div>
                <div style={{ height: "calc(100% - 300px)", margin: '5%', fontSize: "large" }}>
                    We are a small team that includes
                    <ul>
                        <li>Luong Anh Khoa: Team Leader</li>
                        <li>Duong Nguyen Nguyen Nghia</li>
                        <li>Nguyen Son Tin</li>
                        <li>Minh Quan</li>
                    </ul>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae molestie orci. Proin id velit viverra, placerat felis sed, euismod enim. Mauris luctus ac tortor eget cursus. Pellentesque scelerisque sollicitudin libero in porta. Nulla ut nisl pellentesque, dapibus orci at, pellentesque risus. Vestibulum quis augue eu lorem molestie fermentum ac ac leo. Nulla ac ipsum risus. Donec consectetur, ligula sit amet facilisis tincidunt, nisl purus cursus orci, et condimentum lacus nisi at lorem. Aliquam mattis nibh id diam egestas, auctor blandit orci rhoncus. Vestibulum lacinia, urna in auctor luctus, ante velit mattis ante, in cursus purus augue vitae quam.
                </div>
                <div>
                    <div className="d-flex align-items-center justify-content-center">
                        <h4>Contact Us</h4>
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                        Email: abc@gmail.com | <a href="#">Facebook</a> | <a href="#">Twitter</a>
                    </div>
                </div>
            </div>
        </div>
    )
}