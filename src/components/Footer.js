import React from 'react';
import Modal from 'react-bootstrap/Modal';

 const AppFooter = () => {
     return (
         <Modal.Footer>
         <div className="container">
             <div className="row">
                 <div className="col-sm-3">
                     <h5>About</h5>
                     <p>We pecialize in providing our customers with mainly 
                         Office Wear, Casual Wear, and All other Clothings! 
                    </p>
                 </div>

                 <div className="col-sm-3">
                     <h5>We are social</h5>
                     <ul>
                         <li><a href="#facebook">Facebook</a></li>
                         <li><a href="#twitter">Twitter</a></li>
                         <li><a href="#instagram">Instagram</a></li>
                     </ul>
                 </div>

                 <div className="col-sm-3">
                     <h5>Quick Links</h5>
                     <li><a href="#facebook">Tshirts</a></li>
                    <li><a href="#shorts">Shorts</a></li>
                    <li><a href="#dresses">Dresses</a></li>
                 </div>

                 <div className="col-sm-3">
                     <h5>Subscribe</h5>
                     <br />
                     <form className="form-group">
                        <input className="form-control" type="email" placeholder="Enter your Email Adress"/>
                     </form>
                     <br />
                     <button class="btn btn-primary">Subscribe</button>
                 </div>

             </div>

         </div>
        </Modal.Footer>
     )

 }

export default AppFooter;