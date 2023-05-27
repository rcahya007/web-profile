import PageOne from "./pages/PageOne";
import PageThree from "./pages/PageThree";
import PageTwo from "./pages/PageTwo";

function App() {
  return (
    <div className="scrroll h-screen w-full snap-y snap-mandatory overflow-x-hidden scroll-smooth ">
      <PageOne />
      <PageTwo />
      <PageThree />
    </div>
  );
}

export default App;
