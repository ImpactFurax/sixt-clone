import { FaCarAlt, FaTruck, FaSearch, FaPlus } from "react-icons/fa";

const Form = () => {
  return (
    <div className="bg-white p-4 rounded-lg mt-4">
      <div className="flex items-center gap-4 mb-4">
        <button className="text-white bg-[#1a1a1a] rounded-full flex items-center gap-2 p-2 px-3">
          <FaCarAlt />
          <p>Véhicules</p>
        </button>
        <button className="text-[#1a1a1a] hover:bg-gray-200 rounded-full flex items-center gap-2 p-2 px-3">
          <FaTruck />
          <p>Utilitaires</p>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center">
        <div>
          <p className="mb-2 text-[11px] font-bold">
            Retrait et retour
          </p>
          <div className="flex items-center gap-8">
            <div className="w-full border border-gray-300 p-3 rounded-lg relative">
              <FaSearch className="absolute top-4 left-4" />
              <input
                type="text"
                placeholder="Aéroport, ville ou adresse"
                className="outline-none size-full pl-8"
              />
            </div>
            <div className="hidden md:flex items-center gap-3 text-gray-500">
              <FaPlus />
              <p className="text-[12px]">
                Lieux de retour différent
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <div className="hidden md:flex items-center">
              <div className="flex p-3 flex-col">
                <p className="mb-2 text-[11px] font-bold">
                  Date de départ
                </p>
                <input
                  type="date"
                  className="border border-gray-300 p-3 rounded-lg outline-none cursor-pointer"
                />
              </div>
              <div className="flex p-3 flex-col">
                <p className="mb-2 text-[11px] font-bold">
                  Date de retour
                </p>
                <input
                  type="date"
                  className="border border-gray-300 p-3 rounded-lg outline-none cursor-pointer"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <button className="block w-full bg-[#ff5f00] text-white py-4 px-2 rounded-md gont-bold mt-4">
                Voir mes véhicules
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form