


import purchase from "../../images/purchase.jpg";

function PurchasePolicy() {
    return (
        <div className="container mx-auto text-black">
            <div className="privacy">
                <div className="container">
                    <div className="mx-10 mt-5">
                        <img className="border-8 border-black" src={purchase} width="100%" height="100%" alt="" />

                        <h1 className="text-center mt-5 mb-5 text-4xl font-semibold">
                            Purchase and Sales Policy
                        </h1>
                        <div>
                            <p className="pb-5">
                                This Purchase and Sales Policy governs the terms and conditions under which a customer purchase and we deliver products from Fry Frenzy. By placing an order with us, a customer agrees to be bound by this Policy.
                            </p>
                            <b style={{ fontSize: "20px", marginTop: "3%" }}>
                                {" "}
                                1. Ordering Process
                            </b>
                            <p>
                                <span className="font-bold">1.1</span> Orders can be placed via our hotline number, Facebook, Instagram and WhatsApp. After selecting your desired product, you may proceed to checkout and provide the necessary information for processing and delivering your order.
                            </p>

                        </div>

                        <div className="mt-6">
                            <b style={{ fontSize: "20px" }}> 2.	Pricing and Payments </b>
                            <br />

                            <p>
                                <span className="font-bold">2.1</span> All prices displayed on our website are inclusive of VAT & Taxes unless stated otherwise.
                            </p>
                            <p>
                                <span className="font-bold">2.2</span> Payments are made after you receive your order. Our delivery personnel will collect the payment in cash upon delivery or you can opt to pay using mobile payment solutions where available.
                            </p>
                        </div>

                        <div className="mt-6">
                            <b style={{ fontSize: "20px" }}>3. Delivery </b>
                            <br />

                            <p>
                                <span className="font-bold">3.1</span> We endeavor to deliver all orders as soon as possible. The delivery timeframe will depend on the delivery location and the time of order.
                            </p>

                            <p>
                                <span className="font-bold">3.2</span> We are not responsible for any delay caused by circumstances beyond our control.
                            </p>
                        </div>

                        <div className="mt-6">
                            <b style={{ fontSize: "20px" }}>4. Order Cancellation </b>
                            <br />

                            <p>
                                <span className="font-bold">4.1</span>Orders once placed and confirmed may not be cancelled or changed. In the event of exceptional circumstances, please contact us at eat@fryfrenzy.com as soon as possible.
                            </p>
                        </div>

                        <div className="mt-5">
                            <b style={{ fontSize: "20px" }}>5. Product Quality </b>
                            <br />

                            <p>
                                <span className="font-bold">5.1</span> We are committed to delivering quality products. If you are not satisfied with the product received, please notify us within 1 hours of receiving your order. We will do our best to address your concerns.
                            </p>
                        </div>
                        <div className="mt-5">
                            <b style={{ fontSize: "20px" }}>
                                6. Refunds and Exchanges
                            </b>
                            <br />

                            <p>
                                <span className="font-bold">6.1</span> Due to the perishable nature of our products, we are unable to offer returns or exchanges. Refunds will only be issued in the event of non-delivery of your order, provided the cause of non-delivery is within our control.
                            </p>
                        </div>
                        <div className="mt-5">
                            <b style={{ fontSize: "20px" }}>
                                7. Limitation of Liability
                            </b>
                            <br />

                            <p>
                                <span className="font-bold">7.1</span> Our liability for any claim relating to our products and services shall not exceed the purchase price of the products in question. We will not be liable for indirect, special, or consequential damages.
                            </p>
                        </div>
                        <div className="mt-5">
                            <b style={{ fontSize: "20px" }}>8. Changes to this Policy </b>
                            <br />

                            <p>
                                <span className="font-bold">8.1</span> We reserve the right to modify this Purchase and Sales Policy at any time. Changes will be posted on our social media and website and are effective immediately upon posting.
                            </p>
                        </div>
                        <div className="mt-5">
                            <b style={{ fontSize: "20px" }}>9. Contact Us  </b>
                            <br />

                            <p>
                                <span className="font-bold">9.1</span> If you have any questions or concerns regarding this Purchase and Sales Policy, please contact us at eat@fryfrenzy.com
                            </p>
                        </div>
                        <div className="mt-5">
                            <p>
                                Your acceptance of these terms will be deemed to occur upon your placing an order with Fry Frenzy. If a customer does not agree to these terms, a customer is encouraged to not place an order.
                            </p>
                        </div>
                    </div>
                    <br />
                </div>
            </div>
        </div>
    );
}

export default PurchasePolicy;
