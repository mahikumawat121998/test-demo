import "./portfolioList.scss";

export default function PortfolioList({ id, title, active, setSelected, index }) {
  // const mahilex = new Date().getSeconds()
  // console.log("mahilex",index);
  var timestamp = new Date().getUTCMilliseconds();
  // console.log(index)

  return (
    <li key={index}
      className={active ? "portfolioList active" : "portfolioList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
