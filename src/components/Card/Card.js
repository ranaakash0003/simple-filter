import React from "react";
import {
  MDBCardFooter,
  MDBBtn,
  MDBTooltip,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol
} from "mdbreact";
import "./card.css";
import Search from "../Search/Search";

const CardExample = () => {
  const select = term => {
    if (term != null) {
      term.forEach(element => console.log(element.value));
    }

    // console.log("termmmmmm", term);
  };
  return (
    <div className="card-container">
      <section className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Our bestsellers
        </h2>
        <p className="grey-text text-center w-responsive mx-auto mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
          amet numquam iure provident voluptate esse quasi, veritatis totam
          voluptas nostrum quisquam eum porro a pariatur veniam.
        </p>
        <div className="card-container">
          <Search select={select} />
        </div>

        <MDBRow>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBCard wide ecommerce>
              <MDBCardImage
                cascade
                src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (55).jpg"
                top
                alt="sample photo"
              />
              <MDBCardBody cascade className="text-center">
                <a href="#!" className="text-muted">
                  <h5>Badda</h5>
                </a>
                <MDBCardTitle>
                  <strong>
                    <a href="#!">GoPro</a>
                  </strong>
                </MDBCardTitle>
                <MDBCardText>
                  Lorem ipsum dolor sit amet, consectetur adipisicing minima
                  veniam elit.
                </MDBCardText>
                <hr />
                <span className="float-left font-weight-bold">
                  <strong>1439$</strong>
                </span>
                <span className="float-right">
                  <MDBBtn color="blue">Buy now</MDBBtn>
                </span>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBCard wide ecommerce>
              <MDBCardImage
                cascade
                src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (49).jpg"
                top
                alt="sample photo"
              />
              <MDBCardBody cascade className="text-center">
                <a href="#!" className="text-muted">
                  <h5>Mirpur</h5>
                </a>
                <MDBCardTitle>
                  <strong>
                    <a href="#!">Camera</a>
                  </strong>
                </MDBCardTitle>
                <MDBCardText>
                  Lorem ipsum dolor sit amet, consectetur adipisicing minima
                  veniam elit.
                </MDBCardText>
                <hr />
                <span className="float-left font-weight-bold">
                  <strong>1160$</strong>
                </span>
                <span className="float-right">
                  <MDBBtn color="blue">Buy now</MDBBtn>
                </span>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBCard wide ecommerce>
              <MDBCardImage
                cascade
                src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (56).jpg"
                top
                alt="sample photo"
              />
              <MDBCardBody cascade className="text-center">
                <a href="#!" className="text-muted">
                  <h5>Badda</h5>
                </a>
                <MDBCardTitle>
                  <strong>
                    <a href="#!">iPhone 6S</a>
                  </strong>
                </MDBCardTitle>
                <MDBCardText>
                  Lorem ipsum dolor sit amet, consectetur adipisicing minima
                  veniam elit.
                </MDBCardText>
                <hr />
                <span className="float-left font-weight-bold">
                  <strong>2160$</strong>
                </span>
                <span className="float-right">
                  <MDBBtn color="blue">Buy now</MDBBtn>
                </span>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </section>
    </div>
  );
};

export default CardExample;
