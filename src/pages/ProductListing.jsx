import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import ProductItem from "../components/UI/ProductItem";
import productData from "../assets/data/productData";

const ProductListing = () => {
  return (
    <Helmet title="Cars">
      <CommonSection title="Produtos em Destaque" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <span className=" d-flex align-items-center gap-2">
                  <i className="ri-sort-asc"></i> Filtrar por
                </span>

                <select>
                  <option>Selecione</option>
                  <option value="low">Menor para maior</option>
                  <option value="high">Maior para menor</option>
                </select>
              </div>
            </Col>

            {productData.map((item) => (
              <ProductItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductListing;
