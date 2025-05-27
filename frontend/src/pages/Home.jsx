import Navbar from "../components/Navbar";



function Home() {
    return ( 
    <div>
       
        
        {/* Hero */}
      <section className="pt-28 md:pt-32 bg-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Build your own <span className="text-indigo-600">Web3</span> startup today
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600">
            From idea to launch, we help you bring your vision to life.
          </p>
          <button className="mt-8 bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
  }
  export default Home;