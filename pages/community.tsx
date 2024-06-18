import Link from "next/link";

import Header from "../components/Header";
import { Footer } from "../components/Footer";

import localFont from "next/font/local";
import AnimatedAccordion from "components/AnimatedAccordion";
import React, { useEffect } from "react";
import Events from "../public/json/event.json";
import News from "../public/json/news.json";
import { FaTwitter, FaGlobe,FaLink } from "react-icons/fa";
import { MdAccessTimeFilled,MdLocationOn } from "react-icons/md";

const sharpieFont = localFont({
  src: "../public/font/Sharpie-Variable.ttf",
  display: "swap",
});
const RanadeFont = localFont({
  src: "../public/font/Ranade-Variable.ttf",
  display: "swap",
});

const Community = () => {
  const [showNews, setShowNews] = React.useState(News);
  const [showEvents, setShowEvents] = React.useState(Events);
  return (
    <>
      <Header />
      <main className={"comm-main " + RanadeFont.className}>
        <div className="comm-block-1 main-snap" >
          <div className="block-main">
            <h2 className={sharpieFont.className}>
              One Community,
              <br />
              Infinite Possibilities
            </h2>
            <h4>
              Stay up-to-date with the latest news, participate in events, and
              connect with fellow CKB enthusiasts through our community.
            </h4>
          </div>
        </div>
        <div className="comm-block-2 main-snap"  id="news">
          <div className="block-main">
            <div className="comm-title">
              <h2 className={sharpieFont.className}>News</h2>
              <Link className="link_more" href={"https://substack.com/@ckbecofund"} target="_blank">
                View all news
              </Link>
            </div>
            <div className="news-list">
              {showNews.map((news, index) => {
                return (
                  <div className="news-item" key={index}>
                    <div className="news-head">
                      <img src={news.head} />
                    </div>
                    <div className="news-content">
                      <div className="news-time">
                        <span>{news.time}</span>
                        <span className="tag">{news.tag}</span>
                      </div>
                      <p>{news.title} </p>
                      <div className="more">
                        <Link href={news.link} target="_blank">
                          Read more
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="comm-block-3 main-snap"  id="event">
          <div className="block-main">
            <div className="comm-title">
              <h2 className={sharpieFont.className}>Events</h2>
              <Link className="link_more" href={"#"}>
                View all events
              </Link>
            </div>
            <div className="event-switch">
                <div className="switch-box">
                <span className="sel">Upcoming</span>
                <span>Past</span>
                </div>
            </div>
            <div className="event-list">
              {showEvents.map((event, index) => {
                return (
                  <div className="event-item" key={index}>
                    <div className="event-info">
                        <div><MdAccessTimeFilled size={18} /> <p>{event.timeStart}-{event.timeEnd}</p></div>
                        <Link href={event.locationLink}><MdLocationOn size={18} /> <p>{event.locationName}</p></Link>
                        <h5>{event.title}</h5>
                        <div><Link href={event.eventLink}><FaLink size={16} />Detail</Link></div>
                        <span className="tag">{event.type}</span>
                    </div>
                    <div className="event-head">
                      <img src={event.eventImg} width={150} height={150} />
                    </div>
                    
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="comm-block-4 main-snap" id="hub">
            <div className="bg"></div>
            <div className="block-main">
                <h2 className={sharpieFont.className}>Community Hub</h2>
                <h3>Community</h3>
                <div className="list">
                    <Link href={'https://t.me/ckb_community'} target="_blank">CKB Community</Link>
                    <Link href={'https://x.com/CKB_CN'} target="_blank">CKB CN</Link>
                    <Link href={'https://linktr.ee/ckbkorea'} target="_blank">CKB Korea</Link>
                    <Link href={'https://t.me/NervosNetwork'} target="_blank">Nervos Network</Link>
                    <Link href={'https://x.com/NervosNation'} target="_blank">Nervos Nation</Link>
                    <Link href={'https://x.com/rgbppfans'} target="_blank">RGB++ Fans</Link>
                    <Link href={'https://t.me/sealrgbpp'} target="_blank">Seal Community</Link>
                </div>
                <h3>Forum</h3>
                <div className="list">
                    <Link href={'https://www.reddit.com/r/NervosNetwork/'} target="_blank">CKB Community</Link>
                    <Link href={'https://talk.nervos.org/'} target="_blank">Nervos Talk</Link>
                    
                </div>
                <h3>Community-Contributed Resources</h3>
                <div className="list">
                    <Link href={'https://www.notion.so/CKB-6836c451287f44cfa7c4375102f8d778?pvs=4'} target="_blank">123 CKB</Link>
                    <Link href={'https://ckbdapps.com/'} target="_blank">CKBDapp</Link>
                    
                </div>
            </div>
            </div>
        <div className="footer-screen  main-snap">
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Community;