import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import ContactArea from "../components/contact/ContactArea";
import NewsLater from "/components/home/NewsLater";

const Contact = () => {
  return (
    <>
      <Header />
      {/* <div className="map-area mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="location-map mt-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1647631.9534293488!2d0.4267046465731676!3d50.74847355442899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dc24ce7a6c143b%3A0x40af13e8163cda0!2s62179%20Wissant%2C%20France!5e1!3m2!1sen!2sbd!4v1647867201053!5m2!1sen!2sbd"
                  style={{ border: 0 }}
                  aria-hidden="false"
                  tabIndex="0"
                  allowFullScreen=""
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <ContactArea />
      <NewsLater />
      <Footer />
    </>
  );
};
export default Contact;
