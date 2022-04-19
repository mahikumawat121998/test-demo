import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "../Technology/portfolio.scss";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";
import { AcUnit } from "@mui/icons-material/AcUnit";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  var timestamp = new Date().getUTCMilliseconds() +Math.random();
  var mahilex12 = Date.now() + Math.random();
  console.log("mahilex", data);

  const list = [
    {
      index: 1,
      id: "mobile",
      title: "Mobile",
    },
    {
      index: 2,
      id: "frontend",
      title: "Front End",
    },
    { index: 3, id: "database", title: "Data base" },
    {
      index: 4,
      id: "backend",
      title: "Backend",
    },
    {
      index: 5,
      id: "cms",
      title: "CMS",
    },
    {
      index: 6,
      id: "infra",
      title: "Infra And DeveOps",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "mobile":
        setData(featuredPortfolio);
        break;
      case "frontend":
        setData(webPortfolio);
        break;
      case "database":
        setData(mobilePortfolio);
        break;
      case "backend":
        setData(designPortfolio);
        break;
      case "cms":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div
      style={{ marginTop: "120px", height: "240px" }}
      className="portfolio"
      id="portfolio"
    >
      <h2>Technologies We Work With</h2>
      <ul>
        {list.map((item) => (
          <PortfolioList
          key={item.index}
            index={item.index}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item" key={data.id}>
            <span style={{ color: "black", fontSize: "17px" }}>{d.img}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
