export default function RationValidateForm(){

	return (

          <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <form action="" className="flex flex-col w-80">
              <div className="mt-10">
                <label
                  htmlFor="ration_card_number"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Enter your ration card number :
                </label>
                <input
                  type="text"
                  id="ration_card_number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>

              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Send
              </button>
            </form>
          </main>
	
	
	)


}

