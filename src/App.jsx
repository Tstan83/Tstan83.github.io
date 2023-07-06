import Navbar from "./components/navbar";
import Bio from "./components/bio";
import Portfolio from "./components/portfolio";
// import Booking from "./components/booking";
// import Booking from "./components/booking2";
import FAQ from "./components/FAQ"

const App = () => {
  return (
    <main>
      <Navbar />
      <Bio />
      <Portfolio />
      <FAQ />
      <section id="booking">
        
        </section>
      {/* <Booking /> */}
    </main>
  );
};

export default App;