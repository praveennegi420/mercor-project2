export default function NavBar() {
    return (
        <div>
            <div className="nav-bar sticky top-0 z-[1000]" id="TopNavigationReactTarget">
                <header className="TopNavigation" itemScope="" itemType="http://schema.org/WPHeader" role="banner">
                    <div className="flex w-[100%] justify-between">
                        <div className="flex ">

                            <div className="h-[100%] ml-[1rem] items-center flex">
                                <div className="h-[1.14rem] w-[7.9rem]"> <img src='/quizlet.PNG' className='w-[90%]' /> </div>
                            </div>

                            <div className="h-[100%] px-[1rem]">
                                <div className="h-[100%] items-center flex">
                                    <span className="hover:bg-Bule">
                                        <span className="text-spanBlue font-medium mx-[0.75rem] text-[.875rem] ">Home</span>
                                    </span>
                                    <div type="button" aria-expanded="false" className="hover:bg-Bule">
                                        <button>
                                            <span className="text-spanBlue font-600 ml-[0.75rem] mr-[0.2rem] text-[.875rem]">Your library</span>
                                            <img src='/drop.PNG' className='w-[15px] inline' />
                                        </button>
                                    </div>
                                    <a className="NavigationTab hover:bg-Bule">
                                        <span className="text-spanBlue font-medium mx-[0.75rem] text-[.875rem]">Expert solutions</span>
                                    </a>
                                </div>
                            </div>
                        </div>


                        <div className="flex items-center flex-1">
                            <div className="px-[1.5rem] w-[100%] flex h-[100%] items-center">
                                <div className='w-[100%]'>
                                    <form action="/search/" className="s19dmjr1" role="search">
                                        <div className="s2y71yx"><div className="sellgo5">
                                            <div className="absolute pt-[0.625rem] pr-[0.625] pl-[0.85rem]">
                                                <img src='/search.PNG' className="h-[1rem] inline" />
                                            </div>
                                        </div>
                                            <div>
                                                <div className="text-[0.875rem] w-[100%] ">
                                                    <div className='w-[100%]'>
                                                        <label className="AssemblyInput h-[2rem] w-[100%] ml-[2.2rem] mr-[.4rem] bg-bgWhite">
                                                            <input className="AssemblyInput-input text-[0.75rem] font-medium text-spanBlue w-[100%] min-h-[1.5rem] bg-bgWhite" placeholder="Study sets, textbooks, questions" type="text" /></label>
                                                        <div className=" newboxShadow">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>


                        <div className="flex items-center w-[15%]">
                            <div className=" w-[100%] items-center flex  px-[0.5rem]">
                                <div >
                                    <button type="button" className="" title="Create">
                                        <img src='/add.PNG' className='h-[2.6rem] w-[2.6rem] flex items-center' />
                                    </button>
                                </div>
                            </div>
                            <div className="w-[100%] items-center flex  px-[0.5rem]">
                                <div className="flex h-[100%] items-center">
                                    <div>
                                        <button className="SiteActivity-button" type="button">
                                            <img src='/notify.PNG' className='h-[2.5rem] w-[2.5rem]' />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="SiteAvatar  w-[100%] items-center flex px-[0.3rem]">
                                <div data-overlay-container="true">
                                    <div type="button" >
                                        <img alt="Profile Picture" className="AssemblyAvatar rounded-full h-[2.4rem]" src="https://assets.quizlet.com/a/j/dist/app/i/animals/116.cda755979f5721a.jpg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div>
                </div>
            </div>
        </div>
    )
}