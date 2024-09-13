import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import { useState } from "react";

function Cinemas() {
  const [location, setLocation] = useState("Select City");
  const [nameCinema, setNameCinema] = useState("");
  console.log(nameCinema);
  const dataCinemas = [
    { image: "/images/cdc.svg", name: "cdc" },
    { image: "/images/midtown.svg", name: "midtown" },
    { image: "/images/qfx.svg", name: "qfx" },
  ];
  const data = [
    // kathmandu
    {
      name: "Kathmandu CDC Cinemas",
      cinema: "cdc",
      city: "kathmandu",
      phone: "01-5348403",
    },
    {
      name: "QFX Cinemas Kathmandu",
      cinema: "qfx",
      city: "kathmandu",
      phone: "01-4011643",
    },
    
    // pokhara
    {
      name: "Pokhara Midtown Cinemas",
      cinema: "midtown",
      city: "pokhara",
      phone: "061-580781",
    },
    {
      name: "Pokhara Cineplex",
      cinema: "qfx",
      city: "pokhara",
      phone: "061-572630",  
    },
    
    // chitwan
    {
      name:  "Chitwan Indradev Cinema",
      cinema:  "cdc",
      city: "chitwan",
      phone: "982-9490700",
    },
    {
      name:  "QFX Cinema",
      cinema: "qfx",
      city: "chitwan",
      phone: "056-512079",
    },
    // butwal
    {
      name: "QFX Butwal",
      cinema: "qfx",
      city: "butwal",
      phone: " 071-531506",
    },
    {
      name: "View Cinemas",
      cinema: "cdc",
      city: "butwal",
      phone: "071-536015",
    },
    
  ];
  const filteredData = data.filter((item) => item.city === location);
  const filteredCinema = data.filter((item) => item.cinema === nameCinema);
  return (
    <Layout title={"Cinemas"}>
      <Header />
      <main className="global-px py-[3.75rem] mt-16 select-none bg-slate-300/20">
        <section>
          <div className="flex mb-10 gap-4">
            <div className="w-fit flex flex-col gap-5">
              <div className="dropdown z-10">
                <label
                  tabIndex={0}
                  className="btn bg-black text-white  w-[10rem] rounded"
                >
                  {location}
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu menu-compact p-2 shadow bg-base-100 rounded-lg w-full"
                >
                  <li
                    onClick={() => {
                      setLocation("Select City"), setNameCinema("");
                    }}
                  >
                    <a></a>
                  </li>
                  <li
                    onClick={() => {
                      setLocation("kathmandu"), setNameCinema("");
                    }}
                  >
                    <a>Kathmandu</a>
                  </li>
                  <li
                    onClick={() => {
                      setLocation("pokhara"), setNameCinema("");
                    }}
                  >
                    <a>Pokhara</a>
                  </li>
                  <li
                    onClick={() => {
                      setLocation("chitwan"), setNameCinema("");
                    }}
                  >
                    <a>Chitwan</a>
                  </li>
                  <li
                    onClick={() => {
                      setLocation("butwal"), setNameCinema("");
                    }}
                  >
                    <a>Butwal</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center bg-primary px-4 md:px-10 lg:px-40 py-5 rounded shadow-md">
            {dataCinemas.map((data, idx) => (
              <div key={idx} className="cursor-pointer">
                <Image
                  src={data.image}
                  alt="cinemas"
                  width={100}
                  height={100}
                  className="drop-shadow-[0px_1px_2px_rgba(255,255,255,1)]"
                  onClick={() => {
                    setNameCinema(data.name), setLocation("Select City");
                  }}
                />
              </div>
            ))}
          </div>
          <div className="max-h-96 overflow-y-auto">
            {/* {location === "Select City"
              ? data.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between hover:bg-secondary border-b mb-1 py-2 md:px-10  drop-shadow cursor-pointer"
                  >
                    <p>{item.name}</p>
                    <p>{item.phone}</p>
                  </div>
                ))
              : filteredData.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between hover:bg-secondary border-b mb-1 py-2 md:px-10 drop-shadow cursor-pointer"
                  >
                    <p>{item.name}</p>
                    <p>{item.phone}</p>
                  </div>
                ))} */}

            {location === "Select City" && nameCinema === ""
              ? data.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between hover:bg-secondary border-b mb-1 py-2 md:px-10  drop-shadow cursor-pointer"
                  >
                    <p>{item.name}</p>
                    <p>{item.phone}</p>
                  </div>
                ))
              : location === "Select City" && nameCinema !== ""
              ? filteredCinema.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between hover:bg-secondary border-b mb-1 py-2 md:px-10 drop-shadow cursor-pointer"
                  >
                    <p>{item.name}</p>
                    <p>{item.phone}</p>
                  </div>
                ))
              : location !== "Select City" && nameCinema === ""
              ? filteredData.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between hover:bg-secondary border-b mb-1 py-2 md:px-10 drop-shadow cursor-pointer"
                  >
                    <p>{item.name}</p>
                    <p>{item.phone}</p>
                  </div>
                ))
              : filteredCinema.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between hover:bg-secondary border-b mb-1 py-2 md:px-10 drop-shadow cursor-pointer"
                  >
                    <p>{item.name}</p>
                    <p>{item.phone}</p>
                  </div>
                ))}
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}

export default Cinemas;
