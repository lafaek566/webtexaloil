import React from "react";
import { Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import BlogList from "../components/UI/BlogList";
import YoutubeEmbed from "../components/UI/YoutubeEmbed";
import ScrollButton from "../components/UI/ScrollButton";


const Blog = () => {
  return (
    <Helmet title="Blogs">
      <CommonSection title="Our Best Deals " />
      
        <section>
          <Container>
            <Row>
              <BlogList />
            </Row>
            <Row>
              <h1>TEXAL VIDEO</h1>
              <YoutubeEmbed embedId="YY4_YeYfs6Q" />
            </Row>

            <section>
              <ScrollButton />
            </section>

            <Row>
              <h1>TEXAL VIDEO</h1>
              <YoutubeEmbed embedId="OtGZK5Gzr6E" />
            </Row>

            <Row>
              <h1>TEXAL VIDEO</h1>
              <YoutubeEmbed embedId="uM8Xh6HH8qk" />
            </Row>

            <Row>
              <h1>TEXAL VIDEO</h1>
              <YoutubeEmbed embedId="mkOs7LxKegU" />
            </Row>
            
          </Container>
        </section>
      </Helmet>
  );
};

export default Blog;