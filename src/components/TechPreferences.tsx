import Dots from "./Dots";

const TechPreferences = () => {
  return (
    <div className="w-full mt-16">
      <h1 className="text-lg md:text-xl font-bold lg:hidden capitalize">
        Tech preferences
      </h1>
      <div className="w-full flex flex-col">
        <div className="-my-2 overflow-x-auto ">
          <div className="w-full py-2 align-middle">
            <div className="overflow-hidden shadow-md rounded-lg">
              <table className="w-full">
                <thead className="bg-[#F5F5F5] dark:bg-slate-800 dark:text-slate-200 uppercase text-base leading-tight hidden lg:block">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-lg font-medium text-gray-500 dark:text-slate-200  uppercase tracking-wider"
                    >
                      Tech preferences
                    </th>
                  </tr>
                </thead>
                <tbody className="min-w-full font-medium text-sm leading-5 text-gray-900">
                  <tr>
                    <td className="border-0 py-3.5 pl-4 pr-3 text-left text-sm font-medium text-gray-500">
                      <span> 🖥</span>
                      <span className="ml-4">Operating System</span>
                    </td>
                    <td className="border-0 py-3.5 pl-4 pr-3 text-left text-sm font-medium text-gray-500">
                      Windows
                    </td>
                  </tr>
                  <tr>
                    <td className="border-0 py-3.5 pl-4 pr-3 text-left text-sm font-medium text-gray-500">
                      <span>📺</span>
                      <span className="ml-4">Terminal</span>
                    </td>
                    <td className="border-0 py-3.5 pl-4 pr-3 text-left text-sm font-medium text-gray-500">
                      <a href="https://github.com/PowerShell">PowerShell</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-0 py-3.5 pl-4 pr-3 text-left text-sm font-medium text-gray-500">
                      📝
                      <span className="ml-4">Editor</span>
                    </td>
                    <td className="border-0 py-3.5 pl-4 pr-3 text-left text-sm font-medium text-gray-500">
                      <a href="https://github.com/Microsoft/vscode">
                        Visual Studio Code
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Dots />
    </div>
  );
};

export default TechPreferences;
