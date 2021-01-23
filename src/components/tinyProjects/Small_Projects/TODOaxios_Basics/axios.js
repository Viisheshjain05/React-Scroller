// ? We Can create A instances or copy of axios for using manually in files needed

import Axios from "axios";
// ? Just like defaults parameter we can add here another url and use it in files we want like this we can create multiple instances or configuratunes for individual files needed

const instance = Axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  //   headers: { ["AUTHORIZATION"]: "auth - token" },
});
// We Can Do In Both ways as Axios.create just create a copy of axios
// instance.defaults.baseURL = "https://jsonplaceholder.typicode.com";
instance.defaults.headers.common["AUTHORIZATION"] = "auth Token From instance";

// We can also add interceptors inside instences if needed 
// Axios.interceptors.request.use(
//   (req) => {
//     console.log(req);
//     //! Edit req before sending
//     return req;
//   },


export default instance;
