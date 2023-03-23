import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Highlight from "./ui/Highlight";

const Highlights = () => {
  return (
    <div>
      <section id="highlights">
        <div className="container">
          <div className="row">
            <h2 className="section__title">
              Why Choose <span className="purple">Library</span>
            </h2>
            <div className="highlight__wrapper">
              <Highlight
                icon={<FontAwesomeIcon icon="bolt" />}
                title="Easy and Quick"
                para="Get access to the books you purchased instantly."
              />
              <Highlight
                icon={<FontAwesomeIcon icon="book-open" />}
                title="10,000+ Books"
                para="Library has books from all your favorite categories."
              />
              <Highlight
                icon={<FontAwesomeIcon icon="tags" />}
                title="Affordable"
                para="Get access to popular books starting at $10."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Highlights;
