import axios from "axios";
import fileDownload from "js-file-download";
import { AiOutlineMail } from "react-icons/ai";

const Banner = () => {
  const handleDownload = (url, filename) => {
    axios
      .get(url, {
        responseType: "blob",
      })
      .then((res) => {
        console.log(res.data);
        fileDownload(res.data, filename);
      });
  };

  return (
    <div className=" bg-[#0f172a] min-h-[calc(100vh-85px)]">
      <div className=" max-w-screen-xl p-4 mx-auto">
        <p className=" text-teal-300 text-sm ">Hi, my name is</p>

        <h2 className=" my-7 capitalize text-5xl text-gray-100">
          Shajjad hossan.
        </h2>
        <h2 className=" text-5xl capitalize text-gray-300">
          I build things for web.
        </h2>
        <p className=" my-8 max-w-xl capitalize text-gray-400 text-sm">
          I&apos;m a junior front-end web developer.currently focused on
          building different application by using technologies
          <span className=" text-teal-300">
            &nbsp;(tailwind,react,express js,MongoDB)
          </span>{" "}
          what i have learned till now.I am enjoying exploring Tailwind CSS with
          React.
        </p>
        <button
          onClick={() =>
            handleDownload("https://i.ibb.co/VWD4k0T/images.jpg", "image.jpg")
          }
          className=" border border-teal-300 text-teal-300 rounded-md px-10 py-2"
        >
          See My CV
        </button>
      </div>
      <div className=" max-w-screen-xl p-4 mx-auto flex justify-between text-white flex-col md:flex-row">
        <div>
          <h2 className=" w-fit text-5xl my-6 border-b-2 border-b-white pb-4">
            Contact info
          </h2>
          <div className=" text-2xl">
            <p className=" flex items-center gap-5">
              <svg
                width="38px"
                height="38px"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                fill="#0F766E"
              >
                <path d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm116.886719 199.601562c.113281 2.519532.167969 5.050782.167969 7.59375 0 77.644532-59.101563 167.179688-167.183594 167.183594h.003906-.003906c-33.183594 0-64.0625-9.726562-90.066406-26.394531 4.597656.542969 9.277343.8125 14.015624.8125 27.53125 0 52.867188-9.390625 72.980469-25.152344-25.722656-.476562-47.410156-17.464843-54.894531-40.8125 3.582031.6875 7.265625 1.0625 11.042969 1.0625 5.363281 0 10.558593-.722656 15.496093-2.070312-26.886718-5.382813-47.140624-29.144531-47.140624-57.597657 0-.265624 0-.503906.007812-.75 7.917969 4.402344 16.972656 7.050782 26.613281 7.347657-15.777343-10.527344-26.148437-28.523438-26.148437-48.910157 0-10.765624 2.910156-20.851562 7.957031-29.535156 28.976563 35.554688 72.28125 58.9375 121.117187 61.394532-1.007812-4.304688-1.527343-8.789063-1.527343-13.398438 0-32.4375 26.316406-58.753906 58.765625-58.753906 16.902344 0 32.167968 7.144531 42.890625 18.566406 13.386719-2.640625 25.957031-7.53125 37.3125-14.261719-4.394531 13.714844-13.707031 25.222657-25.839844 32.5 11.886719-1.421875 23.214844-4.574219 33.742187-9.253906-7.863281 11.785156-17.835937 22.136719-29.308593 30.429687zm0 0"></path>
              </svg>
              Twitter
            </p>
            <p className="flex items-center gap-5  my-5">
              {" "}
              <svg
                width="38px"
                height="38px"
                viewBox="0 0 38 38"
                version="1.1"
                fill="#0F766E"
              >
                <g
                  id="Page-1"
                  stroke="none"
                >
                  <path
                    d="M31.6326887,31.6326887 C24.3962735,38.8691038 12.6637265,38.8691038 5.42731134,31.6326887 C-1.80910378,24.3962735 -1.80910378,12.6637265 5.42731134,5.42731134 C12.6637265,-1.80910378 24.3962735,-1.80910378 31.6326887,5.42731134 C38.8691038,12.6637265 38.8691038,24.3962735 31.6326887,31.6326887 Z M26,20.5833889 C26,17.6818264 24.5195284,16.3316675 22.5446658,16.3317015 C20.9506623,16.3317015 20.2385165,17.2498723 19.8397552,17.8926088 L19.8397552,17.9231293 L19.8200304,17.9231293 C19.825759,17.9134213 19.8336685,17.9026233 19.8397552,17.8926088 L19.8397552,16.5536226 L16.8383858,16.5536226 C16.878812,17.4404553 16.8383858,26 16.8383858,26 L19.8400482,26 L19.8400482,20.7245464 C19.8400482,20.4418908 19.860424,20.1608362 19.9395839,19.9589102 C20.156655,19.3940759 20.6500696,18.8101664 21.4791975,18.8101664 C22.5653345,18.8101664 22.9993467,19.6765952 22.9993467,20.9461608 L22.9993467,26 L26,26 L26,20.5833889 Z M13.6985192,12 C12.6716545,12 12,12.7048676 12,13.6317925 C12,14.5385181 12.6522225,15.2647773 13.6586789,15.2647773 L13.6787293,15.2647773 C14.7254817,15.2647773 15.3764673,14.5386543 15.3764673,13.6317925 C15.3567425,12.7048676 14.7254817,12 13.6985192,12 Z M12.1782724,26 L15.1787955,26 L15.1787955,16.5536226 L12.1782724,16.5536226 L12.1782724,26 Z"
                    id="Combined-Shape"
                  ></path>
                </g>
              </svg>
              LinkedIn
            </p>
            <p className=" flex items-center gap-5">
              <svg
                fill="#0F766E"
                width="38px"
                height="38px"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 156 156"
              >
                <defs></defs>
                <title>github</title>
                <path d="M133.15,133.15a77.64,77.64,0,0,1-33.08,19.68A3.92,3.92,0,0,1,99,150V129.35c0-7.06-2.52-11.73-5.17-14,16.77-1.89,34.56-8.33,34.56-37.34A28.84,28.84,0,0,0,120.6,57.7c.76-2,3.4-9.71-.76-20.06,0,0-6.31-2-20.81,7.7a72.32,72.32,0,0,0-37.85,0c-14.5-9.71-20.81-7.7-20.81-7.7-4.16,10.35-1.51,18-.76,20.06A29.42,29.42,0,0,0,31.79,78c0,29,17.66,35.45,34.57,37.34-2.27,1.89-4.17,5.3-4.92,10.09-4.29,2-15.27,5.3-22-6.18,0,0-4-7.32-11.61-7.82,0,0-7.44-.13-.5,4.54,0,0,4.92,2.4,8.32,11.1,0,0,4.42,13.5,25.48,9v14a3.59,3.59,0,0,1-2.31,3.59,78,78,0,1,1,74.28-20.48Z"></path>
              </svg>{" "}
              Github
            </p>
            <p className=" flex items-center gap-5 my-5">
              <div className=" text-[#0f172a] flex justify-center items-center bg-[#0F766E] w-9 h-9 rounded-full">
                <AiOutlineMail></AiOutlineMail>
              </div>
              Shajjadhossan98@gmail.com
            </p>
          </div>
        </div>
        <div className="">
          <h2 className="text-5xl w-fit my-6 border-b-2 border-b-white pb-4">
            Education
          </h2>
          <p className=" max-w-md text-2xl">
            Currently Studying Honours 4th Year at{" "}
            <span className=" text-teal-300">
              Bangladesh University of Textiles
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
