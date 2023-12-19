

import privacy from "../../images/cookie.png";

function CookiePolicy() {
    return (
        <div className="container mx-auto text-black">
            <div className="privacy">
                <div className="container">
                    <div className="row mt-5">
                        <img src={privacy} width="100%" height="20%" alt="" />

                        <h1 className="text-center mt-5 text-4xl font-semibold">
                            Cookie Policy
                        </h1>
                        <div>
                            <b style={{ fontSize: "20px", marginTop: "3%" }}>
                                {" "}
                                Brief Introduction{" "}
                            </b>
                            <p>
                                This Cookie Policy explains how we uses cookies and similar technologies on our website [www.fryfrenzy.com]. This policy is intended to inform you about the types of cookies we use, the purposes for which we use them, and how you can manage your cookie preferences.
                            </p>

                            <p>By accessing or using our Website, you consent to the use of cookies in accordance with this Cookie Policy. If you do not agree to the use of cookies, please disable them or refrain from using our Website.</p>
                        </div>

                        <div className="mt-5">
                            <b style={{ fontSize: "20px" }}>
                                {" "}
                                What are Cookies?
                            </b>
                            <br />

                            <p>Cookies are small text files that are placed on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently, enhance user experience, and provide information to website owners.</p>
                        </div>

                        <div className="mt-6 flex flex-col gap-3">
                            <b style={{ fontSize: "20px" }}>
                                Types of Cookies We Use
                            </b>

                            <p>a. Essential Cookies: These cookies are necessary for the functioning of our Website and enable you to navigate and use its features. They are usually set in response to your actions, such as accessing secure areas of the Website or filling out forms. Without these cookies, some parts of our Website may not function properly.</p>
                            <p>b. Performance and Analytics Cookies: These cookies collect information about how visitors use our Website, such as which pages are visited most often or if they receive error messages. We use this data to improve the performance and functionality of our Website and to understand how visitors interact with it. These cookies do not collect personally identifiable information.</p>
                            <p>c. Functionality Cookies: These cookies allow our Website to remember choices you make (such as your language preference or the region you are in) and provide enhanced features. They may also be used to provide services you have requested, such as remembering your login details or preferences.</p>
                            <p>d. Advertising Cookies: We may use advertising cookies to deliver personalized advertisements based on your interests and online activities. These cookies track your browsing habits across different websites and may be used to build a profile of your interests. They are also used to limit the number of times you see an advertisement and measure the effectiveness of advertising campaigns.</p>


                        </div>

                        <div className="mt-6">
                            <b style={{ fontSize: "20px" }}>
                                Third-Party Cookies
                            </b>
                            <br />

                            <p>
                                We may allow third-party service providers to set cookies on our Website to assist with various aspects of our operations. These providers may include analytics and advertising companies. Third-party cookies are subject to the respective privacy policies of these providers.
                            </p>
                        </div>

                        <div className="mt-5">
                            <b style={{ fontSize: "20px" }}>
                                Managing Your Cookie Preferences
                            </b>
                            <br />

                            <p>
                                You can control and manage cookies in your browser settings. Most web browsers allow you to delete cookies, block them entirely, or configure your preferences for specific websites. Please note that if you disable or block cookies, some features of our Website may not function properly.
                            </p>
                        </div>
                        <div className="mt-5">
                            <b style={{ fontSize: "20px" }}>
                                Updates to this Cookie Policy
                            </b>
                            <br />

                            <p>
                                {`We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this policy periodically for any updates. The updated version will be indicated by an updated "Effective Date" at the top of this policy.`}
                            </p>
                        </div>
                        <div className="mt-5">
                            <b style={{ fontSize: "20px" }}>
                                Contact Us
                            </b>
                            <br />

                            <p>
                                If you have any questions or concerns about our use of cookies or this Cookie Policy, please contact us at [eat@fryfrenzy.com].
                            </p>
                        </div>
                    </div>
                    <br />
                </div>
            </div>
        </div>
    );
}

export default CookiePolicy;