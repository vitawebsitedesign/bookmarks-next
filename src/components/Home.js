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
                <span className="text-powder-blue">dream</span>
                <span className="text-powder-blue">ware.</span>  
              </div>
            </div>
            <div className="mt-5 mb-3 divider"></div>
            <div className="d-flex mb-5">
              <div className="text-bold wrapper-textual--headline">
                Perfect software is challenging, exhillerating, bloody hard!<br />
                And thats why I love it.
              </div>
            </div>
            <section className="mt-4 row wrapper-textual--article">
              <div className="col-12 col-md-6">
                <p className="text-bold">
                  Whats makes good software engineers?
                </p>
                <p>
                  Do we keep running the rat race, hoping to break a new velocity sprint record?
                </p>
                <p>
                  Do we chase high-impact company initiatives as Skunkworks projects?
                </p>
                <p>
                  Do we balance output with textbook quality osftware, without introducing schedule risk?
                </p>
                <p>
                  Do we offer multidisciplinary pragmatici nsights to guide technical decisions?
                </p>
                <p>
                  Do we manage short-term &amp; long-term tech debt to maximise a company's marketshare?
                </p>
                <p>
                  The reality is that &quot;perfect&quot; software is more difficult than most people think.
                </p>
              </div>
              <div className="col-12 col-md-6">
                <p className="text-bold">
                  Perfection in reality is different from ideals.
                </p>
                <p>
                  A good software engineer isn&lsquo;t just about writing pretty code, its about maximizing happiness of all direct &amp; indirect stakeholders in the business you work for.
                </p>
                <p>
                  Shareholders, management, tech, product, customer support, your team.
                </p>
                <p>
                  Schedule risk, operational risk, resource risk.
                </p>
                <p>
                  Its bloody hard, which means work is going towards something with an awesome reward!
                </p>
              </div>
            </section>
            <section className="my-4 row text-uppercase wrapper-textual--quote">
              <div className="col-12 col-md-6 border-right text-right">
                <div>its not where you are.</div>
                <div>its your improvement from yesterday.</div>
              </div>
              <div className="col-12 col-md-6 d-flex align-items-center text-bold">
                <Hyperlink href="https://www.linkedin.com/in/michael-nguyen57/" title="Opens michaels LinkedIn profile in a new tab">
                  michael nguyen
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
