import Navbar from "../components/Navbar"

const SinglePage =()=>{
  return(
    <>
    <Navbar/>  
  <div className="bg-white py-8">
    <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center p-12">
      <div className="w-full md:w-3/4 px-4">
       <h1 className="text-4xl font-bold text-gray-800 mb-2">Book Title</h1>
        <img src="https://images.unsplash.com/photo-1506157786151-b8491531f063" alt="Blog Featured Image" className="mb-8 rounded-3xl" />
        <div className="prose max-w-none">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed sit amet feugiat
            eros, eget eleifend dolor. Proin maximus bibendum felis, id fermentum odio vestibulum id. Sed ac
            ligula eget dolor consequat tincidunt. Nullam fringilla ipsum et ex lacinia, at bibendum elit
            posuere. Aliquam eget leo nec nibh mollis consectetur.</p>
          <p>Suspendisse potenti. Mauris euismod, magna sit amet aliquam dapibus, ex sapien porta nisl, vel
            auctor orci velit in risus. Fusce gravida bibendum dui, id volutpat felis dignissim a. Duis
            sagittis, arcu ac convallis bibendum, neque dolor suscipit dolor, non malesuada magna orci a
            mauris. Proin sollicitudin diam eu enim tincidunt dapibus. Aliquam pharetra purus mauris, id
            lacinia mi malesuada ut. Integer dignissim, urna nec scelerisque feugiat, lacus sapien tincidunt
            sem, sed luctus enim libero vel nunc. Vivamus ornare, felis quis feugiat luctus, orci justo
            auctor urna, et elementum orci dolor ac ante. Ut varius sapien nec fringilla sodales.
            Suspendisse lacinia, metus eu suscipit lobortis, enim sapien commodo sapien, non facilisis urna
            elit eget elit.</p>
          <p>Nulla facilisi. Sed venenatis pretium ante, sed tempor turpis sagittis ac. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer vel diam arcu.
            Maecenas bibendum efficitur ex sit amet tristique. Nulla vel sapien euismod, bibendum velit id,
            facilisis magna. Sed vestibulum nisi vitae justo congue, eu bibendum augue interdum. Nam quis
            orci nec nulla posuere facilisis. Etiam feugiat ligula quis est auctor, et sagittis orci
            elementum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            Curae; Sed gravida neque vel tellus volutpat, vel laoreet lacus commodo. Vivamus quis enim leo.
          </p>
        </div>
      </div>
     </div>
  </div>



    </>
  )
}
export default SinglePage