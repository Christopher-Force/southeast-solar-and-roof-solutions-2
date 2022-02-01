import { Link } from "react-router-dom"

export default function FreeQuote () {
    return(
      <div className="flex justify-center mb-8 mx-auto px-3 max-w-[915px]">
      <div class="card lg:card-side border-2 w-full xl:w-full px-0.5 md:px-6 md:mx-6 lg:mx-0">
        <div class="card-body">
          <h2 class="card-title text-white">No Cost Inquiry!</h2> 
          <div className="grid lg:grid-cols-3">
            <p className="text-white lg:col-span-2">We observe four factors that may affect the pricing of your current solar maintenance needs. <br className=""/><br />Click <span className="lg:hidden">below</span> to get your free estimate for your system!</p>
            <Link to="/estimate">
              <div className="grid">
                <button class="btn btn-primary hidden lg:inline-flex">Get Free Quote</button>
              </div>
            </Link>
          </div>
          <Link to="/estimate">
            <div class="grid card-actions lg:hidden">
              <button class="btn btn-primary bg-green-700 border-green-800 hover:bg-green-400 hover:border-green-600">Get Free Quote</button>
            </div>
          </Link>
        </div>
      </div>
      </div>

    )
}