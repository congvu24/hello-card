import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="w-full">
        <div className="w-full h-48 flex items-center justify-center overflow-hidden">
          <img
            className="min-w-full min-h-full flex-shrink-0 "
            src="https://images.unsplash.com/photo-1617858795762-b801516329f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          />
        </div>
        <div className="ring ring-white w-40 h-40 rounded-full bg-white mx-auto transform -translate-y-1/2 overflow-hidden flex items-center justify-center">
          {/* avatar */}
          <img
            className="min-w-full min-h-full flex-shrink-0 "
            src="https://images.unsplash.com/photo-1617824365810-4233cad1b26b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          />
        </div>
        <div className="transform -translate-y-2/3 px-4">
          <h2 className="text-center font-semibold text-2xl mb-2">
            Dương Công Vũ
          </h2>
          <p className="text-center mx-auto max-w-md w-full">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem cumque voluptas expedita laudantium.
          </p>
        </div>
      </div>
      <div className="w-full transform -translate-y-16">
        <ul className="p-4 ">
          <li className="px-2 py-2">
            <div className="w-full  bg-transparent rounded-full text-xl text-center border-2 border-brand-facebook flex items-between justify-center overflow-hidden">
              <div className="w-12 bg-brand-facebook py-2 text-white">
                <i className="fab fa-facebook-f"></i>
              </div>
              <span className="text-brand-facebook flex-auto text-center py-2 font-bold">
                @duongcongvu93
              </span>
            </div>
          </li>
          <li className="px-2 py-2">
            <div className="w-full  bg-transparent rounded-full text-xl text-center border-2 border-brand-google flex items-between justify-center overflow-hidden">
              <div className="w-12 bg-brand-google py-2 text-white">
                <i class="fab fa-google"></i>
              </div>
              <span className="text-brand-google flex-auto text-center py-2 font-bold">
                duongcongvu@gmail.com
              </span>
            </div>
          </li>
          <li className="px-2 py-2">
            <div className="w-full  bg-transparent rounded-full text-xl text-center border-2 border-brand-tiktok flex items-between justify-center overflow-hidden">
              <div className="w-12 bg-brand-tiktok py-2 text-white">
                <i class="fab fa-tiktok"></i>
              </div>
              <span className="text-brand-tiktok flex-auto text-center py-2 font-bold">
                @vu_duong
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
