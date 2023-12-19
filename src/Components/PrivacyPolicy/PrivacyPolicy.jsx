


import privacy from "../../images/privacy.jpg";

function PrivacyPolicy() {
  return (
    <div className="container mx-auto text-black">
      <div className="privacy">
        <div className="container">
          <div className="mx-10 mt-5">
            <img src={privacy} width="100%" height="100%" alt="" />

            <h1 className="text-center mt-5 mb-5 text-4xl font-semibold">
              Privacy policy
            </h1>
            <div>
              <p className="pb-5">
                At Fry Frenzy, we are committed to protecting your privacy. This
                Privacy Policy outlines how we collect, use, and safeguard your
                personal information when you visit our website. By using our
                website, you consent to the practices described in this policy.
              </p>
              <b style={{ fontSize: "20px", marginTop: "3%" }}>
                {" "}
                1 Information We Collect
              </b>
              <p>
                1.1 Personal Information: We may collect personal information
                such as your name, email address, phone number, and delivery
                address when you voluntarily provide it to us through our
                website.
                <br />
                1.2 Usage Information: We may collect non-personal information
                about your interactions with our website, including your IP
                address, browser type, operating system, and referring website.
              </p>
            </div>

            <div className="mt-6">
              <b style={{ fontSize: "20px" }}> 2 Use of Information</b>
              <br />

              <p>
                2.1 Personal Information: We may use your personal information
                to process and fulfill your orders, communicate with you
                regarding your orders or inquiries, and provide customer
                support.
              </p>
              <p>
                {`2.2 Usage Information: We may use non-personal information to
                analyze trends, administer the website, track users' movements,
                and gather demographic information for aggregate use. This
                information helps us improve our website and tailor it to our
                users' needs.`}
              </p>
            </div>

            <div className="mt-6">
              <b style={{ fontSize: "20px" }}>3 Security</b>
              <br />

              <p>
                We are committed to ensuring the security of your personal
                information. We implement reasonable security measures to
                protect against unauthorized access, alteration, disclosure, or
                destruction of your personal information.
              </p>
            </div>

            <div className="mt-6">
              <b style={{ fontSize: "20px" }}>4 Third-Party Disclosure</b>
              <br />

              <p>
                We do not sell, trade, or transfer your personal information to
                outside parties unless we provide you with advance notice.
                However, this does not include trusted third parties who assist
                us in operating our website, conducting our business, or serving
                you, as long as those parties agree to keep your information
                confidential.
              </p>
            </div>

            <div className="mt-5">
              <b style={{ fontSize: "20px" }}> 5 Cookies</b>
              <br />

              <p>
                Our website may use cookies to enhance your browsing experience.
                Cookies are small text files stored on your device that allow
                the website to remember your preferences and improve
                performance. You can choose to accept or decline cookies. Please
                refer to our Cookie Policy for more details.
              </p>
            </div>
            <div className="mt-5">
              <b style={{ fontSize: "20px" }}>
                6 Links to Third-Party Websites
              </b>
              <br />

              <p>
                Our website may contain links to third-party websites. We are
                not responsible for the privacy practices or content of such
                websites. We encourage you to review the privacy policies of
                those websites before providing any personal information.
              </p>
            </div>
            <div className="mt-5">
              <b style={{ fontSize: "20px" }}>
                7 Changes to this Privacy Policy
              </b>
              <br />

              <p>
                We reserve the right to modify this Privacy Policy at any time.
                Any changes will be posted on this page, and the updated policy
                will be effective immediately upon posting.
              </p>
            </div>
            <div className="mt-5">
              <b style={{ fontSize: "20px" }}>8 Contact Us</b>
              <br />

              <p>
                If you have any questions or concerns regarding this Privacy
                Policy, please contact us at eat@fryfrenzy.com
              </p>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
