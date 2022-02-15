import { Navigation } from "../../components/navigation";

import './experience.css'






export function Experiencias() {

	

  return (
    <div>

      <Navigation />
     
      <div class="section over-hide">
		<div class="container">
			<div class="row full-height justify-content-center">
				<div class="col-12 text-center align-self-center py-5">
					<div class="section text-center py-5 py-md-0">
			          	<input class="pricing" type="checkbox" id="pricing" name="pricing"/>
			          	<label for="pricing"><span class="block-diff">kayaking<span class="float-right">camping</span></span></label>
						<div class="card-3d-wrap mx-auto">
							<div class="card-3d-wrapper">
								<div class="card-front">
									<div class="pricing-wrap">
										<h4 class="mb-5">Kayaking</h4>
										<h2 class="mb-2"><sup>$</sup>39 / 4<sup>hrs</sup></h2>
										<p class="mb-4">per person</p>
										<p class="mb-1"><i class="uil uil-location-pin-alt size-22"></i></p>
										<p class="mb-4">Drina, Serbia</p>
										<a href="#0" class="link">Choose Date</a>
										<div class="img-wrap img-2">
											<img src="https://assets.codepen.io/1462889/sea.png" alt=""/>
										</div>
										<div class="img-wrap img-1">
											<img src="https://assets.codepen.io/1462889/kayak.png" alt=""/>
										</div>
										<div class="img-wrap img-3">
											<img src="https://assets.codepen.io/1462889/water.png" alt=""/>
										</div>
										<div class="img-wrap img-6">
											<img src="https://assets.codepen.io/1462889/Stone.png" alt=""/>
										</div>
			      					</div>
			      				</div>
								<div class="card-back">
									<div class="pricing-wrap">
										<h4 class="mb-5">Camping</h4>
										<h2 class="mb-2"><sup>$</sup>29 / 8<sup>hrs</sup></h2>
										<p class="mb-4">per person</p>
										<p class="mb-1"><i class="uil uil-location-pin-alt size-22"></i></p>
										<p class="mb-4">Tara, Serbia</p>
										<a href="#0" class="link">Choose Date</a>
										<div class="img-wrap img-2">
											<img src="https://assets.codepen.io/1462889/grass.png" alt=""/>
										</div>
										<div class="img-wrap img-4">
											<img src="https://assets.codepen.io/1462889/camp.png" alt=""/>
										</div>
										<div class="img-wrap img-5">
											<img src="https://assets.codepen.io/1462889/Ivy.png" alt=""/>
										</div>
										<div class="img-wrap img-7">
											<img src="https://assets.codepen.io/1462889/IvyRock.png" alt=""/>
										</div>
			      					</div>
			      				</div>
			      			</div>
			      		</div>
			      	</div>
		      	</div>
	      	</div>
	    </div>
	</div>
      

    </div>
  );
}