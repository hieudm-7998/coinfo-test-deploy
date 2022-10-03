import Link from "next/link";
import FooterConstant from "../../constant/FooterConstant/FooterConstant";
// import twitterIcon from "/assets/images/twitter-icon.png"

const Footer = () => {
  return (
    <div className="footer-area hrrd-footer-area positioning pb-100">
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
                          <img src={FooterConstant.Logo} alt="" />
                        </a>
                      </Link>
                      <p>{FooterConstant.subTitle}</p>
                      <div
                        className="footer-social wow animate flipInX"
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
                <h1>Risk Warning</h1>
        </div>
      </div>
      <img
        className="shape hrrd-footer-shape"
        src="/assets/images/shape/hrrd-footer.png"
        alt=""
      />
    </div>
  );
};
export default Footer;
