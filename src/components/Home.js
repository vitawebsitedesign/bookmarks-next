import {connect} from 'react-redux';
import GalleryTile from './GalleryTile';
import Hyperlink from './Hyperlink';
import Footer from './Footer';
import './Home.css';

const getLink = exhibit => {
  return <GalleryTile key={exhibit.id} exhibitId={exhibit.id} thumbnails={exhibit.preview.thumbnails} captionTitle={exhibit.title} className="ml-1 ml-xl-4 mb-1 mb-xl-4" />;
};

function Home(props) {
  const exhibits = props.exhibits.map(getLink);

  return (
    <div className="App container-fluid">
      <div className="row">
        <div className="col-12 page-edge-shadow"></div>
      </div>
      <div className="row App--row">
        <aside className="col-12 col-xxl-4 d-flex">
          <aside className="d-none d-xl-flex bookmark flex-column mr-5">
            <div>
              <div className="d-inline-block bookmark--pagenum">
                <i className="material-icons md-24">blur_on</i>
              </div>
            </div>
            <div className="bookmark--name d-flex align-items-center justify-content-center pt-5 text-nowrap text-uppercase">
              software engineer portfolio
            </div>
          </aside>
          <aside className="d-flex flex-column flex-grow-1 ml-4 text-left wrapper-textual">
            <div className="d-flex flex-column text-uppercase text-lighter wrapper-textual--title">
              <div className="mt-1 mb-3">
                <span className="text-powder-blue">portfolio.</span>
              </div>
            </div>
            <div className="mt-5 mb-3 divider"></div>
            <div className="d-flex mb-5">
              <div className="text-bold wrapper-textual--headline">
              List of open-source projects developed in personal time.
              </div>
            </div>
            <section className="row wrapper-textual--article">
              <div className="col-12 col-md-6">
                <p>
                  Click a project on the right to view more details.
                </p>
                <p>
                  This project list is non-exhaustive - these are just the ones that still have source code hosted on Github.
                </p>
                <p>
                This page doesn't include any code made before 18 years old, such as financial technical analysis indicators made in php that ran autonomously via a linux CLI-only OS.
                </p>
              </div>
            </section>
            <section className="my-4 row wrapper-textual--quote">
              <div className="col-12 col-md-6 pt-3 border-top">
                <div>By michael nguyen</div>
                <Hyperlink href="https://www.linkedin.com/in/michael-nguyen57/" title="Opens michaels LinkedIn profile in a new tab">
                  LinkedIn
                </Hyperlink>
              </div>
            </section>
          </aside>
        </aside>
        <main className="col-12 col-xxl-8 wrapper-gallery">
          <div className="row position-relative wrapper-gallery--row-1">
            <div className="col-12 d-flex flex-wrap justify-content-end">
              {exhibits}
            </div>
          </div>
        </main>
      </div>
      <Footer>
      </Footer>
    </div>
  );
}

const mapStateToprops = state => ({ exhibits: state });

export default connect(mapStateToprops)(Home);
