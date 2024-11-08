export default function Hero_Section(){
    return (
 <div className="flex flex-col md:flex-row">
  <div className="p-4 bg-blue-200 m-2 w-full md:w-1/2">
    <p>This is the first div.</p>
  </div>
  <div className="p-4 bg-green-200 m-2 w-full md:w-1/2">
  <div>
  <div className="flex">
  <div className="bg-red-600 w-1/4 p-4">
  <div className="bg-blue-500 text-white p-6 h-3/4">
    This div takes up 1/4 of the width and 100% of the height of its parent.
  </div>
  <div className="bg-green-500 text-white p-6 h-1/4">
    This div takes up 1/4 of the width and 100% of the height of its parent.
  </div>
</div>  
  <div className="bg-yellow-200 w-3/4 p-4">
      <p>This is the inner div taking up 3/4 of the width of the second div.</p>
  </div>
  </div>
  <div className="flex">
    <div className="bg-blue-600 w-1/4 p-4">
        this is
    </div>
    <div className="bg-blue-600 w-1/4 p-4">
        this is
    </div>
    <div className="bg-blue-600 w-1/4 p-4">
        this is
    </div>
    <div className="bg-blue-600 w-1/4 p-4">
        this is
    </div>
  </div>
  </div>
  </div>
</div>

    )
}