export default function Newsletter() {
  return (
    <div id="mc_embed_shell">
      <div id="mc_embed_signup">
        <form
          action="https://miedoalexito.us21.list-manage.com/subscribe/post?u=f1a95c95b711f1d11725abcb2&amp;id=709027b6ce&amp;f_id=0099e7e6f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_self"
        >
          <div id="mc_embed_signup_scroll">
            <h2>Suscribite a nuestro newsletter</h2>
            <div className="indicates-required">
              <span className="asterisk">*</span> indicates required
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">
                Email Address <span className="asterisk">*</span>
              </label>
              <input
                type="email"
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
                required
              />
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-FNAME">First Name </label>
              <input
                type="text"
                name="FNAME"
                className=" text"
                id="mce-FNAME"
              />
            </div>
            <div id="mce-responses" className="clear foot">
              <div className="response hidden" id="mce-error-response"></div>
              <div className="response hidden" id="mce-success-response"></div>
            </div>
            <div aria-hidden="true" className={"left absolute"}>
              {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
              <input
                type="text"
                name="b_f1a95c95b711f1d11725abcb2_709027b6ce"
              />
            </div>
            <div className="optionalParent">
              <div className="clear foot">
                <input
                  type="submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button"
                  defaultValue="Subscribe"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
