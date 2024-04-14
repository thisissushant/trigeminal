import {} from "react";

const PayUs = () => {
  return (
    <div className="flex justify-center bg-base-300 p-2">
      <div className="card w-96  shadow-xl">
        <figure>
          <img
            src="https://cdn.pixabay.com/photo/2021/12/12/16/10/qr-6865526_640.png"
            alt="Shoes"
          />
        </figure>
        <div className="flex justify-center">
          <p>Scan the QR code to pay</p>
        </div>
      </div>
    </div>
  );
};

export default PayUs;
