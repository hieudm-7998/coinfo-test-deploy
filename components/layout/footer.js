import Link from "next/link";
import FooterConstant from "../../constant/FooterConstant/FooterConstant";
// import twitterIcon from "/assets/images/twitter-icon.png"

const Footer = () => {
  return (
    <div className="footer-area hrrd-footer-area positioning py-5">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-sm-12 col-12">
            <div className="footer-wrap mb-5">
              <div className="row justify-content-between">
                <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
                  <div className="single-widget">
                    <div className="footer-logo">
                      <Link href="/">
                        <a>
                          <img
                            src={FooterConstant.Logo}
                            width={115}
                            height={28}
                            alt=""
                          />
                        </a>
                      </Link>
                      <p>{FooterConstant.subTitle}</p>
                      <div
                        className="footer-social wow animate flipInX mb-5"
                        data-wow-delay="200ms"
                        data-wow-duration="1500ms"
                      >
                        <ul>
                          <li>
                            <Link href={FooterConstant.GoogleLink}>
                              <a>
                                <img
                                  src="/assets/images/twitter-icon.png"
                                  alt=""
                                />
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href={FooterConstant.LinkedinLink}>
                              <a>
                                <img
                                  src="/assets/images/telegram-icon.png"
                                  alt=""
                                />
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href={FooterConstant.TwitterLink}>
                              <a>
                                <img
                                  src="/assets/images/tiktok-icon.png"
                                  alt=""
                                />
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href={FooterConstant.InstagramLink}>
                              <a>
                                <img
                                  src="/assets/images/youtube-icon.png"
                                  alt=""
                                />
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <p>Copyright©coinfo. All right reserved</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6">
                  <div className="single-widget">
                    <div className="footer-title">
                      <h3>Product</h3>
                    </div>
                    <div className="footer-link">
                      <ul>
                        <li>
                          <Link href="/">
                            <a>Download</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <a>News</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <a>Trading Signal</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <a>Learn 2 Earn</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <a>Roadmap</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6">
                  <div className="single-widget">
                    <div className="footer-title">
                      <h3>About COINFO</h3>
                    </div>
                    <div className="footer-link">
                      <ul>
                        <li>
                          <Link href="/">
                            <a>About us</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <a>Careers</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <a>Terms</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <a>Privacy policy</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-6 col-md-6 col-sm-6 col-6">
                  <div className="single-widget">
                    <div className="footer-title">
                      <h3>Support</h3>
                    </div>
                    <div className="footer-link">
                      <ul>
                        <li>
                          <Link href="/">
                            <a>FAQs</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <a>Help</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <a>Contact us</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-6 col-md-6 col-sm-6 col-6">
                  <div className="single-widget">
                    <div className="footer-title">
                      <h3>Contact</h3>
                    </div>
                    <div className="contact-info">
                      <ul>
                        <li>
                          Call : <span>{FooterConstant.phone}</span>
                        </li>
                        <li>
                          Email : <span>{FooterConstant.email}</span>
                        </li>
                        <li>
                          Address : <span>{FooterConstant.address[0]}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="copy-right-area">
              <p className="copy-text">{FooterConstant.copyrightText}</p>
            </div>
          </div>
        </div> */}
        <div className="risk-warning">
          <div className="risk-warning-heading mb-3 d-flex justify-content-between align-items-center">
            <div className="risk-warning-headingg align-items-center">
              <img
                className="me-2"
                src="/assets/images/warning-icon.png"
                alt=""
              />
              <h1>Risk Warning</h1>
            </div>
            <div className="footer-straight-line">
              <hr />
            </div>
          </div>
          <div className="risk-warning-content">
            <p>
              Cryptocurrencies and their derivatives are innovative financial
              products with significant volatility and high investment risks.
            </p>
            <p>
              Although COINFO has been committed to providing users with
              easy-to-use trading services, trading itself is still technically
              sophisticated. Trading digital assets and their derivatives are
              highly leveraged and risky and may result in partial or total loss
              of account funds. You shall carefully consider and exercise clear
              judgment to evaluate your financial situation and the risks above
              to make any decision on using COINFO Services, and you shall be
              responsible for all losses arising therefrom. Please consult
              relevant professionals to make informed decisions on whether and
              how to complete investment before you invest if necessary. By
              accessing, downloading, using, or clicking on “I agree” to accept
              any of our Services provided by COINFO, you agree that you have
              read, understood, and accepted all of the terms and conditions
              stipulated in COINFO&apos;s Terms of Use as well as our Privacy
              Policy.
            </p>
            <p>
              Trading by referring to our signal or other traders involves a
              high level of risk, even when our trading signal system is
              top-performing. Cryptocurrencies always contain financial risks.
              Trading is a highly risky activity that can lead to major losses,
              please therefore consult your financial advisor before making any
              decision. Cryptocurrency investment activities are yet to be
              recognized and protected by the laws in some countries. Please do
              your own research (DYOR), review, analyse and verify our content
              before relying on them and performing any activities
            </p>
          </div>
        </div>
      </div>
      {/* <img
        className="shape hrrd-footer-shape"
        src="/assets/images/shape/hrrd-footer.png"
        alt=""
      /> */}
    </div>
  );
};
export default Footer;
