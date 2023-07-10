import {Link} from "react-router-dom";

function contact(){

    return(
        <>
            <main className="aboutContactMain p-5"> 

                <div className="container mt-5 mb-5">
                <div className="row d-flex justify-content-between">
                <div className="col-lg-6 d-flex flex-column justify-content-center align-content-center"> 
            
                    <h4 className="contact_head fw-medium mb-5 "> ERASMUS & EXCHANGE OFFICE </h4>
                    <ul className="text-start"> 
                    <li> <b> Cihan ÇOBANOĞLU  </b><br/>
                        <Link to="mailto:cihancobanoglu@khas.edu.tr" target="a_blank"> cihan.cobanoglu@khas.edu.tr </Link> <br/> International Office Manager 
                        </li> <br/>
                    <li> <b> Okan MERGEN  </b><br/>
                        <Link to="mailto:okan.mergen@khas.edu.tr" target="a_blank"> okan.mergen@khas.edu.tr </Link> <br/> 
                        Blended Intensive Programs </li> <br/>

                    <li> <b> Dilara HAYIRLIOĞLU SEZGİN  </b>  <br/>
                        <Link to="mailto:dilara.hayirlioglu@khas.edu.tr" target="a_blank"> dilara.hayirlioglu@khas.edu.tr </Link> <br/>
                        Incoming Stagg & Student </li> <br/>
                    <li> <b> Duygu AYHAN </b> <br/>
                        <Link to="mailto:duygu.ayhan@khas.edu.tr" target="a_blank"> duygu.ayhan@khas.edu.tr </Link> <br/>
                        International Office Manager</li> <br/>
                    </ul>
            </div>
            <div className="col-lg-6 d-flex justify-content-center align-content-center">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.013749777351!2d28.956785215417842!3d41.02495512634741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9f12ab56e17%3A0x9485bbf687d7cbfd!2sKadir%20Has%20University!5e0!3m2!1sen!2str!4v1675611261972!5m2!1sen!2str" width="600" height="450" style={{border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            </div>
    </div>
</div>

    </main>
        </>
    )


};

export default contact;