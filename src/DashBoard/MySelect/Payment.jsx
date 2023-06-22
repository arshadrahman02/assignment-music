// import React from "react";
// import CheckOutForm from "./CheckOutForm";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import UseSelect from "../../Hooks/UseSelect/UseSelect";
// const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
// const Payment = () => {
//   const [select] = UseSelect();
//   const total = select.price;
//   const price = parseFloat(total.toFixed(2));
//   return (
//     <div>
//       <h1 className="text-3xl text-center font-bold mb-8">
//         This is the Payment Route
//       </h1>
//       <Elements stripe={stripePromise}>
//         <CheckOutForm price={price}></CheckOutForm>
//       </Elements>
//     </div>
//   );
// };

// export default Payment;
