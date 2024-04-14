import {} from "react";

export const HealthStats = () => {
  return (
    <>
      <div className="bg-base-300 flex flex-wrap justify-center pt-5 gap-3 text-5xl pb-6 text-green-600 font-semibold">
        <h1>Popular Salad</h1>
      </div>
      <div className="bg-base-300 flex flex-wrap justify-center pt-5 gap-3">
        <div className="card w-80 bg-green-400 shadow-xl ">
          <div className="card-body">
            <h2 className="card-title">Vegetable Salad</h2>
            <p>
              A vegetable salad is a dish made primarily of raw vegetables,
              often mixed with other ingredients like fruits, nuts, seeds, or
              dressings. It is a popular and healthy option for a light meal or
              side dish.
            </p>
          </div>
          <figure className="h-64">
            <img
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZvb2R8ZW58MHx8MHx8fDA%3D"
              alt="bowl of vegitable salad"
            />
          </figure>
        </div>
        <div className="card w-80 bg-green-400 shadow-xl ">
          <div className="card-body">
            <h2 className="card-title">Salad with White Sauce</h2>
            <p>
              The creamy white sauce adds a tangy and savory flavor to the
              vegetable salad, making it a delicious and satisfying dish. Feel
              free to adjust the ingredients and seasonings according to your
              taste preferences.
            </p>
          </div>
          <figure className="h-64">
            <img
              src="https://images.unsplash.com/photo-1603903888012-5410a4bec63f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8"
              alt="bowl of vegitable salad"
            />
          </figure>
        </div>
        <div className="card w-80 bg-green-400 shadow-xl justify-center ">
          <div className="card-body">
            <h2 className="card-title">Purple Salad</h2>
            <p>
              A vegetable salad is a dish made primarily of raw vegetables,
              often mixed with other ingredients like fruits, nuts, seeds, or
              dressings. It is a popular and healthy option for a light meal or
              side dish.
            </p>
          </div>
          <figure className="h-64">
            <img
              src="https://images.unsplash.com/photo-1503146234394-631200675614?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8"
              alt="bowl of vegitable salad"
            />
          </figure>
        </div>
      </div>
    </>
  );
};
