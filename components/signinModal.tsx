import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export default function Signin({ openModal, setopenModal }: any) {
  const cancelButtonRef = useRef(null);
  const [modal, setModal] = useState(true);
  const [modalAccount, setModalAccount] = useState(false);

  return (
    <Transition.Root show={openModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setopenModal}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="flex">
                    <div
                      className={
                        modal
                          ? "p-1 px-4 text-white bg-orange-300  rounded-md cursor-pointer"
                          : "p-1 cursor-pointer"
                      }
                      onClick={() => {
                        setModal(true), setModalAccount(false);
                      }}
                    >
                      Log In
                    </div>
                    <div
                      onClick={() => {
                        setModal(false), setModalAccount(true);
                      }}
                      className={
                        modalAccount
                          ? "p-1 px-4 text-white bg-orange-300  rounded-md cursor-pointer"
                          : "p-1 cursor-pointer"
                      }
                    >
                      Create a account
                    </div>
                  </div>
                  <Transition.Root show={modal} as={Fragment}>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <div className="mt-2 w-full">
                        <div className="flex flex-wrap w-full">
                          <div className="w-full px-4">
                            <form className="w-full">
                              <div className="mb-6">
                                <input
                                  type="text"
                                  placeholder="Email"
                                  className="
                        w-full
                        rounded-md
                        border
                        bordder-[#E9EDF4]
                        py-3
                        px-5
                        bg-[#FCFDFE]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                                />
                              </div>
                              <div className="mb-6">
                                <input
                                  type="password"
                                  placeholder="Password"
                                  className="
                        w-full
                        rounded-md
                      
                        border
                        bordder-[#E9EDF4]
                        py-3
                        px-5
                        bg-[#FCFDFE]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                                />
                              </div>
                              <div className="mb-10">
                                <input
                                  type="submit"
                                  value="Sign In"
                                  className="
                        w-full
                        rounded-md
                        border
                        border-green-400
                        py-3
                        bg-primary
                        text-base text-green
                        cursor-pointer
                        hover:bg-green-600 hover:text-white
                        transition
                        "
                                />
                              </div>
                            </form>
                            <p className="text-base mb-6 text-[#adadad] text-center">
                              Connect With
                            </p>
                            <ul className="flex justify-between -mx-2 mb-12">
                              <li className="px-2 w-full">
                                <a
                                  href="javascript:void(0)"
                                  className="
                        flex
                        h-11
                        items-center
                        justify-center
                        rounded-md
                        bg-[#1C9CEA]
                        hover:bg-opacity-90
                        "
                                >
                                  <svg
                                    width="22"
                                    height="16"
                                    viewBox="0 0 22 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M19.5516 2.75538L20.9 1.25245C21.2903 0.845401 21.3968 0.53229 21.4323 0.375734C20.3677 0.939335 19.3742 1.1272 18.7355 1.1272H18.4871L18.3452 1.00196C17.4935 0.344423 16.429 0 15.2935 0C12.8097 0 10.8581 1.81605 10.8581 3.91389C10.8581 4.03914 10.8581 4.22701 10.8935 4.35225L11 4.97847L10.2548 4.94716C5.7129 4.82192 1.9871 1.37769 1.38387 0.782779C0.390323 2.34834 0.958064 3.85127 1.56129 4.79061L2.76774 6.54403L0.851613 5.6047C0.887097 6.91977 1.45484 7.95303 2.55484 8.7045L3.5129 9.33072L2.55484 9.67515C3.15806 11.272 4.50645 11.9296 5.5 12.18L6.8129 12.4932L5.57097 13.2446C3.58387 14.4971 1.1 14.4031 0 14.3092C2.23548 15.6869 4.89677 16 6.74194 16C8.12581 16 9.15484 15.8748 9.40322 15.7808C19.3387 13.7143 19.8 5.8865 19.8 4.32094V4.10176L20.0129 3.97652C21.2194 2.97456 21.7161 2.44227 22 2.12916C21.8935 2.16047 21.7516 2.22309 21.6097 2.2544L19.5516 2.75538Z"
                                      fill="white"
                                    />
                                  </svg>
                                </a>
                              </li>
                              <li className="px-2 w-full">
                                <a
                                  href="javascript:void(0)"
                                  className="
                        flex
                        h-11
                        items-center
                        justify-center
                        rounded-md
                        bg-[#D64937]
                        hover:bg-opacity-90
                        "
                                >
                                  <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M17.8477 8.17132H9.29628V10.643H15.4342C15.1065 14.0743 12.2461 15.5574 9.47506 15.5574C5.95916 15.5574 2.8306 12.8821 2.8306 9.01461C2.8306 5.29251 5.81018 2.47185 9.47506 2.47185C12.2759 2.47185 13.9742 4.24567 13.9742 4.24567L15.7024 2.47185C15.7024 2.47185 13.3783 0.000145544 9.35587 0.000145544C4.05223 -0.0289334 0 4.30383 0 8.98553C0 13.5218 3.81386 18 9.44526 18C14.4212 18 17.9967 14.7141 17.9967 9.79974C18.0264 8.78198 17.8477 8.17132 17.8477 8.17132Z"
                                      fill="white"
                                    />
                                  </svg>
                                </a>
                              </li>
                            </ul>
                            <div className="text-center">
                              <a
                                href="javascript:void(0)"
                                className="
                  text-base
                  inline-block
                  mb-2
                  text-center
                  text-[#adadad]
                  hover:underline hover:text-red-800
                  
                  "
                              >
                                Forget Password?
                              </a>
                              <p className="text-base text-[#adadad]">
                                Not a member yet?{" "}
                                <a
                                  href="javascript:void(0)"
                                  className="text-primary hover:underline hover:text-blue-800"
                                >
                                  Sign Up
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Transition.Root>
                  <Transition.Root show={modalAccount} as={Fragment}>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <div className="mt-2 w-full">
                        <div className="flex flex-wrap w-full">
                          <div className="w-full px-4">
                            <form className="w-full">
                              <div className="mb-6">
                                <input
                                  type="text"
                                  placeholder="bibash"
                                  className="
                        w-full
                        rounded-md
                        border
                        bordder-[#E9EDF4]
                        py-3
                        px-5
                        bg-[#FCFDFE]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                                />
                              </div>
                              <div className="mb-6">
                                <input
                                  type="password"
                                  placeholder="Password"
                                  className="
                        w-full
                        rounded-md
                      
                        border
                        bordder-[#E9EDF4]
                        py-3
                        px-5
                        bg-[#FCFDFE]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                                />
                              </div>
                              <div className="mb-10">
                                <input
                                  type="submit"
                                  value="Sign In"
                                  className="
                        w-full
                        rounded-md
                        border
                        border-green-400
                        py-3
                        bg-primary
                        text-base text-green
                        cursor-pointer
                        hover:bg-green-600 hover:text-white
                        transition
                        "
                                />
                              </div>
                            </form>
                            <p className="text-base mb-6 text-[#adadad] text-center">
                              Connect With
                            </p>
                            <ul className="flex justify-between -mx-2 mb-12">
                              <li className="px-2 w-full">
                                <a
                                  href="javascript:void(0)"
                                  className="
                        flex
                        h-11
                        items-center
                        justify-center
                        rounded-md
                        bg-[#1C9CEA]
                        hover:bg-opacity-90
                        "
                                >
                                  <svg
                                    width="22"
                                    height="16"
                                    viewBox="0 0 22 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M19.5516 2.75538L20.9 1.25245C21.2903 0.845401 21.3968 0.53229 21.4323 0.375734C20.3677 0.939335 19.3742 1.1272 18.7355 1.1272H18.4871L18.3452 1.00196C17.4935 0.344423 16.429 0 15.2935 0C12.8097 0 10.8581 1.81605 10.8581 3.91389C10.8581 4.03914 10.8581 4.22701 10.8935 4.35225L11 4.97847L10.2548 4.94716C5.7129 4.82192 1.9871 1.37769 1.38387 0.782779C0.390323 2.34834 0.958064 3.85127 1.56129 4.79061L2.76774 6.54403L0.851613 5.6047C0.887097 6.91977 1.45484 7.95303 2.55484 8.7045L3.5129 9.33072L2.55484 9.67515C3.15806 11.272 4.50645 11.9296 5.5 12.18L6.8129 12.4932L5.57097 13.2446C3.58387 14.4971 1.1 14.4031 0 14.3092C2.23548 15.6869 4.89677 16 6.74194 16C8.12581 16 9.15484 15.8748 9.40322 15.7808C19.3387 13.7143 19.8 5.8865 19.8 4.32094V4.10176L20.0129 3.97652C21.2194 2.97456 21.7161 2.44227 22 2.12916C21.8935 2.16047 21.7516 2.22309 21.6097 2.2544L19.5516 2.75538Z"
                                      fill="white"
                                    />
                                  </svg>
                                </a>
                              </li>
                              <li className="px-2 w-full">
                                <a
                                  href="javascript:void(0)"
                                  className="
                        flex
                        h-11
                        items-center
                        justify-center
                        rounded-md
                        bg-[#D64937]
                        hover:bg-opacity-90
                        "
                                >
                                  <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M17.8477 8.17132H9.29628V10.643H15.4342C15.1065 14.0743 12.2461 15.5574 9.47506 15.5574C5.95916 15.5574 2.8306 12.8821 2.8306 9.01461C2.8306 5.29251 5.81018 2.47185 9.47506 2.47185C12.2759 2.47185 13.9742 4.24567 13.9742 4.24567L15.7024 2.47185C15.7024 2.47185 13.3783 0.000145544 9.35587 0.000145544C4.05223 -0.0289334 0 4.30383 0 8.98553C0 13.5218 3.81386 18 9.44526 18C14.4212 18 17.9967 14.7141 17.9967 9.79974C18.0264 8.78198 17.8477 8.17132 17.8477 8.17132Z"
                                      fill="white"
                                    />
                                  </svg>
                                </a>
                              </li>
                            </ul>
                            <div className="text-center">
                              <a
                                href="javascript:void(0)"
                                className="
                  text-base
                  inline-block
                  mb-2
                  text-center
                  text-[#adadad]
                  hover:underline hover:text-red-800
                  
                  "
                              >
                                Forget Password?
                              </a>
                              <p className="text-base text-[#adadad]">
                                Not a member yet?{" "}
                                <a
                                  href="javascript:void(0)"
                                  className="text-primary hover:underline hover:text-blue-800"
                                >
                                  Sign Up
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Transition.Root>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
