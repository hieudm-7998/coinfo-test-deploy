import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
} from "@chakra-ui/react";

export default function ContactArea() {
  return (
    <div>
      <div className="contact-area">
        <div className="container">
          <div className="contact-title mb-5">
            <h1>
              Contact <span className="contact-title-underscore">Us</span>
            </h1>
          </div>
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <form
                id="contact-form"
                action="mail.php"
                method="POST"
                className="contact-input"
              >
                <div className="py-5 px-4 contact-area-bg">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-sm-12 col-12">
                      <label className="contact-area-label mb-1">Name:</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        className="contact-area-input"
                      />
                    </div>
                    <div className="col-xl-6 col-lg-6 col-sm-12 col-12">
                      <label className="contact-area-label mb-1">Email:</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        className="contact-area-input"
                      />
                    </div>
                    <div className="col-xl-12 col-lg-12 col-sm-12 col-12">
                      <label className="contact-area-label mb-1">
                        Message:
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="4"
                        placeholder="Write your message..."
                        className="contact-area-input"
                      ></textarea>
                    </div>
                    {/* <div className="col-xl-12 col-lg-12 col-sm-12 col-12">
                    <label className="shop-check">
                      Save my name, email, and website in this browser for the
                      next time.
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </div> */}
                    <div className="contact-btn-wrap d-flex justify-content-end pt-5">
                      <button type="submit" className="common-btn btn-hrrd-1">
                        Send →
                      </button>
                    </div>
                    <p className="form-message"></p>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mobt-50">
              <div className="cart-wrap">
                <div className="single-cart">
                  <div className="cart-title">
                    <h2>Contact Information</h2>
                  </div>
                  <div className="contact-details">
                    {/* <div className="contact-details-title">
                      <h3>Contact Info</h3>
                    </div> */}
                    <div className="contact-details-info">
                      <ul>
                        <li>
                          <i className="bi bi-telephone"></i>{" "}
                          <a href="tel:01761111456">Phone :</a>
                        </li>
                        <li>
                          <i className="bi bi-envelope"></i>{" "}
                          <a href="mailto:Support@saasland.com">Email :</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* <div className="contact-details">
                    <div className="contact-details-title">
                      <h3>Office Address</h3>
                    </div>
                    <div className="contact-details-info">
                      <ul>
                        <li>
                          <i className="bi bi-geo-alt-fill"></i> 100 Banbridge
                          Road, London, United Kingdom
                        </li>
                      </ul>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="contact-title my-5">
            <h1>
              FA<span className="contact-title-underscore">Qs</span>
            </h1>
          </div>
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="contact-accordion">
                <Accordion defaultIndex={[0]} allowMultiple>
                  <AccordionItem className="rounded">
                    <h2>
                      <AccordionButton className="contact-no-border">
                        <Box flex="1" textAlign="left" as="b">
                          <Text fontSize="1rem">
                            Ornare laoreet mi tempus neque
                          </Text>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel p={7}>
                      Timperdiet gravida scelerisque odio nunc. Eget felis, odio
                      bibendum quis eget sit lorem donec diam. Volutpat sed orci
                      turpis sit dolor est a pretium eget. Vitae turpis orci vel
                      tellus cursus lorem vestibulum quis eu. Ut commodo, eget
                      lorem venenatis urna.
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem className="rounded">
                    <h2>
                      <AccordionButton className="contact-no-border">
                        <Box flex="1" textAlign="left" as="b">
                          <Text fontSize="1rem">
                            Rhoncus nullam aliquam nam proin
                          </Text>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel p={7}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem className="rounded">
                    <h2>
                      <AccordionButton className="contact-no-border">
                        <Box flex="1" textAlign="left" as="b">
                          <Text fontSize="1rem">
                            Duis enim bibendum dui ut fringilla suspendisse vel
                            sed ultricies
                          </Text>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel p={7}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem className="rounded">
                    <h2>
                      <AccordionButton className="contact-no-border">
                        <Box flex="1" textAlign="left" as="b">
                          <Text fontSize="1rem">
                            Lectus fringilla volutpat egestas nisi, viverra
                            mauris
                          </Text>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel p={7}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem className="rounded">
                    <h2>
                      <AccordionButton className="contact-no-border">
                        <Box flex="1" textAlign="left" as="b">
                          <Text fontSize="1rem">
                            Vitae sollicitudin vitae libero tincidunt
                          </Text>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel p={7}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem className="rounded">
                    <h2>
                      <AccordionButton className="contact-no-border">
                        <Box flex="1" textAlign="left" as="b">
                          <Text fontSize="1rem">
                            Tellus velit vitae arcu lacinia pharetra, ut lectus
                            pulvinar facilisis
                          </Text>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel p={7}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
