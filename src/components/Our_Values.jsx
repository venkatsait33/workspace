import { BsFillPeopleFill } from "react-icons/bs";
import { FaLeaf } from "react-icons/fa";
import { IoBulbOutline, IoResizeOutline } from "react-icons/io5";

const values = [
  {
    title: 'Community Building',
    description: 'Building a space where everyone feels welcome and connected within the group',
    icon: <BsFillPeopleFill />
  }, {
    title: "Sustainable Actions",
    description: "Committed to eco-friendly practices by reducing our energy usage for the future",
    icon: <FaLeaf />
  }, {
    title: "Incubating Innovations",
    description: "Fostering an environment that encourages new ideas and growth for our users.",
    icon: <IoBulbOutline />

  }, {
    title: "Room for Flexibility",
    description: "Offering various workspaces to suit your unique needs.Be flexible as you need",
    icon: <IoResizeOutline />
  }
]

const Our_Values = () => {
  return (
    <div className="container mx-auto p-4 rounded-lg">
      <div className="bg-[#f4f1e8] p-8 rounded-lg">

        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black">Our Values</h1>
          <p>see More</p>
        </div>
        <div className="grid max-md:grid-cols-2 lg:grid-cols-4 gap-2 p-2">
          {
            values.map((value, index) => {
              return (
                <div key={index} className="  hover:bg-[#717166] hover:text-white rounded-lg p-6 shadow-md transition-all duration-300 border ease-in-out">
                  <div className=" flex flex-col gap-3">
                    <p className="text-xl text-black">
                      {value.icon}
                    </p>
                    <h1 className="text-xl text-black font-bold">{value.title}</h1>
                    <p className="text-xl text-black ">{value.description}</p>
                  </div>

                </div>
              )
            })
          }

        </div>
      </div>
    </div>
  )
}

export default Our_Values