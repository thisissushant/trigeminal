import {} from "react";

export const Landing = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://plus.unsplash.com/premium_photo-1711477326347-721652a2a763?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDg2fHhqUFI0aGxrQkdBfHxlbnwwfHx8fHw%3D"
            className=" w-80 rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold text-green-600 ">
              100% Fat Free
            </h1>
            <p className="py-6">
              Healthy foods are rich in essential nutrients like vitamins,
              minerals, fiber, and antioxidants, which are vital for overall
              health and well-being. Eating a balanced diet that includes plenty
              of fruits, vegetables, whole grains, and lean proteins can help
              you maintain a healthy weight or even lose weight if needed.
            </p>
            <button className="btn text-white bg-teal-600 hover:bg-teal-500">
              Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
