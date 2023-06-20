import Header from "../components/Header";

function Home() {
  //   const squareX = window.innerWidth / 12 - 1;
  //   const squareY = window.innerHeight / 12;
  //   const xOffsetAmount = 12;
  //   let xOffset = 0;
  //   let yOffset = 0;
  //   const squares = [];
  //   for (let i = 0; i < squareX * squareY; i++) {
  //     squares.push(
  //       <Square isLit={false} marginXOffset={xOffset} marginYOffset={yOffset} key={Math.random()} />
  //     );
  //     if (xOffset >= squareX * xOffsetAmount) {
  //       xOffset = 0;
  //       yOffset += xOffsetAmount;
  //     } else xOffset += xOffsetAmount;
  //   }

  return (
    <article
      className=" bg-cyan-700 flex flex-col items-center text-white h-screen content-center "
      style={{
        backgroundImage: "url('images/code2.jpg')",
        backgroundSize: "cover",
      }}
    >
      {/* {squares.map((square) => square)} */}
      <Header />

    </article>
  );
}

export default Home;
