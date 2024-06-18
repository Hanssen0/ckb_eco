import Link from "next/link";

import { Footer } from "../components/Footer";

import localFont from "next/font/local";
import AnimatedAccordion from "components/AnimatedAccordion";
import React, { useEffect } from "react";
import EcoList from "../public/json/eco.json";
import { FaTwitter, FaGlobe } from "react-icons/fa";
import dynamic from "next/dynamic";
import EcoBlock from "components/EcoBlock";

const Header = dynamic(() => import("../components/Header"), { ssr: false });
const sharpieFont = localFont({
  src: "../public/font/Sharpie-Variable.ttf",
  display: "swap",
});
const RanadeFont = localFont({
  src: "../public/font/Ranade-Variable.ttf",
  display: "swap",
});

const Eco = () => {
  const [showType, setShowType] = React.useState("");
  const [showList, setShowList] = React.useState(EcoList);
  const [typeList, setTypeList] = React.useState([""]);

  const toggleShow = (type: string) => {
    setShowType(type);
  };
  useEffect(() => {
    let tagList: [string] = [""];
    EcoList.map((item) => {
      item.tag.map((tagName) => {
        tagList.push(tagName);
      });
    });
    let showTypes = [...new Set(tagList)];
    console.log(showTypes);
    setTypeList(showTypes);
  }, [showType]);
  return (
    <>
      <Header />
      <main className={"eco-main " + RanadeFont.className}>
        <div className="eco-block-1">
          <div className="block-main">
            <h2 className={sharpieFont.className}>
              CKB Ecosystem: <br />A Nexus of Blockchain Evolution
            </h2>
            <h4>
              CKB Ecosystem is the core of cutting-edge innovation, uniting
              visionary thinkers and pioneers to propel the future of Nervos'
              blockchain technology with the power of UTXO Stack, RGB++ and
              Lightning Network.
            </h4>
            <div className="eco-links">
              <Link
                href="https://forms.gle/CVCgHXaeBZadRxa7A"
                target="_blank"
                className="button_link eco_link_1"
              >
                Submit Projects
              </Link>
            </div>
          </div>
        </div>
        <div className="eco-block-2">
          <div className="block-main">
            <input
              type="text"
              placeholder="CKB Eco Fund"
              className="eco-search"
            />

            <div className="tabs-title">
              {typeList &&
                typeList.map((tagName, index) => {
                  if (!tagName) return false;
                  return (
                    <span
                      key={index}
                      onClick={() => {
                        toggleShow(tagName);
                      }}
                      className={showType === tagName ? "sel" : ""}
                    >
                      {tagName}
                    </span>
                  );
                })}
            </div>
            <div className="eco-list">
              {showList.map((item, index) => {
                return <EcoBlock item={item} index={index} />;
              })}
            </div>
          </div>
        </div>
        <div className="footer-screen">
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Eco;
