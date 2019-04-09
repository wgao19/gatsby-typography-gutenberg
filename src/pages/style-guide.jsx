import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";

class StyleGuide extends Component {
  render() {
    return (
      <Layout>
        <article>
          <h2 className="alignCenter img-spacing">Gutenberg v1.2</h2>
          <p className="alignCenter">
            Gutenberg is an open source project licensed under
            {" "}
            <a
              href="https://creativecommons.org/licenses/by-sa/3.0/"
              target="_blank"
            >
              Creative Commons 3.0
            </a>
            . Feel free to use, adapt or contribute.
          </p>
          <div className="buttons alignCenter">
            <a
              href="https://github.com/matejlatin/Gutenberg"
              target="_blank"
              className="github"
              onClick="ga('send', 'event', 'Buttons', 'github');"
            >
              <div>Fork on Github</div>
            </a>
            {" "}
            <a
              className="tweet"
              href="javascript:void(0)"
              onClick="fbs_click(); ga('send', 'event', 'Buttons', 'twitter');"
            >
              <div className="twitter">Tweet this</div>
            </a>
          </div>
          <hr />
          <h3>What is Gutenberg?</h3>
          <p>
            Gutenberg is a flexible and simple-to-use web typography starter kit
            for web designers and developers. It’s a small step towards a better
            typography on the web. Beautiful typographic styles can be made by
            setting base type size, line-height (leading) and measure
            (max-width).
          </p>
          <blockquote>
            <p>
              The reader should be able to read the message of a text easily and
              comfortably. This depends to a not inconsiderable extent on the
              size of the type, the length of the lines and the leading.
            </p>
            <cite>—Josef Mueller–Brockmann</cite>
          </blockquote>
          <p>
            Gutenberg sets the baseline grid to establish a proper vertical
            rhythm and makes sure all elements fit into it. It sets up the macro
            typography so you can focus on the micro–typographic details.
          </p>

          <h3>Base type &amp; line-height</h3>
          <p>
            All calculations in Gutenberg depend on 
            {' '}
            <em>base type size</em>
            {' '}
and
            {" "}
            <em>line-height</em>
. Multiplication of these two results in
            {" "}
            <em>leading</em>
            {' '}
which is essential for setting a correct vertical
            rhythm and a baseline grid.
          </p>
          <pre>
            <code className="scss hljs">
              <span className="hljs-variable">$base-font-size</span>
:
              {" "}
              <span className="hljs-number">100</span>
;
              {" "}
              <span className="hljs-comment">// Converts to 16px</span>
              <span className="hljs-variable">$line-height</span>
:
              {" "}
              <span className="hljs-number">1.6</span>
;
              <span className="hljs-variable">$leading</span>
:
              {" "}
              <span className="hljs-variable">$base-font-size</span>
              {' '}
*
              {" "}
              <span className="hljs-variable">$line-height</span>
;
            </code>
          </pre>

          <h3>Vertical rhythm and baseline&nbsp;grid</h3>
          <p>
            By calculating the 
            {' '}
            <em>leading</em>
            {' '}
Gutenberg sets a vertical rhythm
            by resetting line-height and margins for all elements.
          </p>
          <pre>
            <code className="scss hljs">
              * 
              {' '}
              {`{`}
              <span className="hljs-attribute">line-height</span>
:
              {" "}
              <span className="hljs-variable">$leading</span>
;
              <span className="hljs-attribute">margin-bottom</span>
:
              {" "}
              <span className="hljs-variable">$leading</span>
;
              {`}`}
            </code>
          </pre>
          <p>
            Correct vertical rhythm results in consistent spacing between
            elements that helps clarifying the structure and order of the
            content and link it with other elements. Its ultimate goal is to
            {" "}
            <em>invite the reader into the text</em>
            {' '}
and
            {" "}
            <em>improve the readability</em>
.
          </p>
          <figure>
            <div className="example grid">
              <b>Johannes Gutenberg</b>
              <p>
                Johannes Gensfleisch zur Laden zum Gutenberg (c. 1398–1468) was
                a German blacksmith, goldsmith, printer, and publisher who
                introduced printing to Europe.
                <br />
                <br />
              </p>
            </div>
          </figure>

          <h3>Correct but flexible</h3>
          <p>
            To make Gutenberg more flexible but still correct,
            {" "}
            <em>half of leading</em>
            {' '}
sizes can be used. For example: heading 2
            has a default margin-top of 2.5 leading and a line-height of 1.5
            leading.
          </p>

          <pre>
            <code className="hljs scss">
              <span className="hljs-selector-tag">h2</span> 
              {' '}
              {`{`}
              <span className="hljs-attribute">margin-top</span>
: #
              {`{`}
              <span className="hljs-number">2.5</span>
              {' '}
*
              {" "}
              <span className="hljs-variable">$leading</span>
              {' '}
+
              {" "}
              <span className="hljs-string">'px'</span>
              {`}`}
;
              <span className="hljs-attribute">line-height</span>
: #
              {`{`}
              <span className="hljs-number">1.5</span>
              {' '}
*
              {" "}
              <span className="hljs-variable">$leading</span>
              {' '}
+
              {" "}
              <span className="hljs-string">'px'</span>
              {`}`}
;
              {`}`}
            </code>
          </pre>
          <div className="example heading2 grid-double">
            <h2>Heading 2</h2>
          </div>

          <h3>Modular scale</h3>
          <p>
            Typographers have been using scales for centuries. Gutenberg is
            based on Tim Brown’s
            {" "}
            <a href="http://modularscale.com" target="_blank">
              Modular Scale
            </a>
            {" "}
            to bring meaning and harmony to the typographic style.
          </p>
          <div className="example headings grid-double">
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6>
          </div>

          <h3>Themes &amp; customization</h3>
          <p>
            Gutenberg comes with two beautiful predefined themes based on two
            typefaces provided by Google Fonts: Merriweather and Open Sans.
          </p>
          <p>
            There is a 
            {' '}
            <em>custom</em>
            {' '}
option that allows loading custom
            typefaces for body text and headings.
          </p>
          <pre>
            <code className="hljs scss">
              <span className="hljs-variable">$theme</span>
: custom;
              {" "}
              <span className="hljs-comment">
                // [ Merriweather / OpenSans / custom ]
              </span>
              <span className="hljs-variable">$custom-font-body</span>
:
              Merriweather, serif;
              <span className="hljs-variable">$custom-font-headings</span>
:
              {" "}
              <span className="hljs-string">"Open Sans"</span>
, sans-serif;
            </code>
          </pre>
          <h4>The Birth of Movable Type</h4>
          <p>Default theme example </p>
          <p>
            <a
              className="exampleBtn"
              href="example"
              onClick="ga('send', 'event', 'Links', 'example - default');"
              target="_blank"
            >
              View Example
            </a>
          </p>
          <h4>Humane Typography in the Digital Age</h4>
          <p>Custom theme example</p>
          <p>
            <a
              className="exampleBtn"
              href="example2"
              onClick="ga('send', 'event', 'Links', 'example - custom');"
              target="_blank"
            >
              View Example
            </a>
          </p>
          <h3>Made with Sass</h3>
          <p>
            Sass makes it easy to understand and reuse most parts of the code.
            Line-heights, margins, paddings and font-sizes are all calculated
            based on 
            {' '}
            <em>base font-size</em>
            {' '}
and 
            {' '}
            <em>leading</em>
. So there’s a
            mixin for each that sets its value in both pixels (fallback) and
            REMs. Below is an example of a mixin that sets the bottom margin to
            x numbers of 
            {' '}
            <em>leading</em>
.
          </p>
          <pre>
            <code className="hljs scss">
              @
              <span className="hljs-keyword">mixin</span>
              {' '}
margin-bottom(
              <span className="hljs-variable">$number</span>
)
              {`{`}
              <span className="hljs-attribute">margin-bottom</span>
: #
              {`{`}
              <span className="hljs-variable">$number</span>
              {' '}
*
              {" "}
              <span className="hljs-variable">$leading</span>
              {' '}
+
              {" "}
              <span className="hljs-string">'px'</span>
              {`}`}
;
              <span className="hljs-attribute">margin-bottom</span>
: #
              {`{`}
              <span className="hljs-variable">$number</span>
              {' '}
*
              {" "}
              <span className="hljs-variable">$leading-rem</span>
              {' '}
+
              {" "}
              <span className="hljs-string">'rem'</span>
              {`}`}
;
              {`}`}
            </code>
          </pre>

          <h3>Correct image height</h3>
          <p>
            Images and figures are resized so they don’t break the baseline
            grid. This small and lightweight JavaScript function takes the
            original height of a figure and calculates a new height which is a
            multiplication of 
            {' '}
            <em>leading</em>
.
          </p>

          <figure>
            <img
              src="assets/images/grid-image.png"
              alt="Fix image height"
              style={{ height: "192px" }}
            />
            <figcaption>Resizing images so they fit in the grid.</figcaption>
          </figure>

          <h2>Why Gutenberg?</h2>
          <p>
            Johannes Gutenberg invented a printing press with movable type more
            than 500 years ago. His invention led to improved readability of
            books and enabled a distribution on a large scale. His invention
            improved a medium and took it to another level. This web typography
            starter kit aims to do exactly the same for another medium — the
            web.
          </p>
          <hr />
          <h2 className="alignCenter">Gutenberg v1.2</h2>
          <p className="alignCenter">
            Gutenberg is an open source project licensed under
            {" "}
            <a
              href="https://creativecommons.org/licenses/by-sa/3.0/"
              target="_blank"
            >
              Creative Commons 3.0
            </a>
            . Feel free to use, adapt or contribute.
          </p>
          <div className="buttons alignCenter">
            <a
              href="https://github.com/matejlatin/Gutenberg"
              target="_blank"
              className="github"
              onClick="ga('send', 'event', 'Buttons', 'github');"
            >
              <div>Fork on Github</div>
            </a>
            {" "}
            <a
              className="tweet"
              href="javascript:void(0)"
              onClick="fbs_click(); ga('send', 'event', 'Buttons', 'twitter');"
            >
              <div className="twitter">Tweet this</div>
            </a>
          </div>
          <h5 className="alignCenter">More coming soon</h5>
          <p className="alignCenter">
            New elements like tables and side comments will be added soon.
          </p>
          <hr />
          <a
            href="http://www.stickermule.com/marketplace/10459-gutenberg"
            onClick="ga('send', 'event', 'Links', 'sticker');"
            target="_blank"
          >
            <img
              src="sticker.jpg"
              alt="Gutenberg Sticker"
              className="sticker"
              style={{ height: "416px" }}
            />
          </a>
        </article>
      </Layout>
    );
  }
}

export default StyleGuide;
