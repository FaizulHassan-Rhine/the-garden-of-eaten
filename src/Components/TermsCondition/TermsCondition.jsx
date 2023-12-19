


import terms from "../../images/terms-banner.jpg";

function TermsCondition() {
  return (
    <div className="pb-10 container mx-auto text-black">
      <div className="row mt-5 mb-5">
        <img src={terms} width="100%" height="100%" alt="" />
        <h1 className="text-center text-4xl font-semibold mt-3">
          Terms & Conditions
        </h1>
        <br />
      </div>
      <div className="mx-10 flex flex-col text-lg gap-3">
        <p>
          Welcome to the Fry Frenzy website. These Terms and Conditions outline
          the rules and regulations for using our website. By accessing this
          website, we assume you accept these terms and conditions in full. Do
          not continue to use the Fry Frenzy website if you do not agree to all
          the terms and conditions stated below.
        </p>
        <p>
          <span className="font-bold">1.</span> {`The term 'Fry Frenzy' or 'us' or
          'we' refers to the owner of the website. The term 'you' refers to the
          user or viewer of our website.`}
        </p>
        <p>
          {" "}
          <span className="font-bold">2.</span> The content of this website is
          for your general information and use only. It is subject to change
          without notice.
        </p>
        <p>
          <span className="font-bold">3.</span> This website uses cookies to
          monitor browsing preferences. By using this website, you consent to
          our use of cookies in accordance with our Privacy Policy.
        </p>
        <p>
          <span className="font-bold">4.</span> Neither we nor any third parties
          provide any warranty or guarantee as to the accuracy, timeliness,
          performance, completeness, or suitability of the information and
          materials found or offered on this website for any particular purpose.
          You acknowledge that such information and materials may contain
          inaccuracies or errors, and we expressly exclude liability for any
          such inaccuracies or errors to the fullest extent permitted by law.{" "}
        </p>
        <p>
          <span className="font-bold">5.</span> Your use of any information or
          materials on this website is entirely at your own risk, for which we
          shall not be liable. It is your responsibility to ensure that any
          products, services, or information available through this website meet
          your specific requirements.{" "}
        </p>
        <p>
          <span className="font-bold">6.</span> This website contains material
          that is owned by or licensed to us. This material includes, but is not
          limited to, the design, layout, look, appearance, and graphics.
          Reproduction is prohibited unless prior written consent is obtained.{" "}
        </p>
        <p>
          {" "}
          <span className="font-bold">7.</span>All trademarks reproduced on this
          website, which are not the property of, or licensed to, the operator,
          are acknowledged on the website.
        </p>
        <p>
          <span className="font-bold">8.</span> Unauthorised use of this website
          may give rise to a claim for damages and/or be a criminal offense.
        </p>
        <p>
          <span className="font-bold">9.</span> From time to time, this website
          may also include links to other websites. These links are provided for
          your convenience to provide further information. They do not signify
          that we endorse the website(s). We have no responsibility for the
          content of the linked website(s).
        </p>
        <p>
          <span className="font-bold">10.</span> Your use of this website and
          any dispute arising out of such use of the website is subject to the
          laws of Bangladesh.
        </p>
      </div>
    </div>
  );
}

export default TermsCondition;
