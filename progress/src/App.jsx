import './App.css'
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';


import NavBar from './components/navbar'
function App() {
  const [value, onChange] = useState(new Date());

  useEffect(()=>{
    function addStreak(){
      const allDates= document.getElementsByClassName('react-calendar__month-view__days__day')
      const img = document.createElement('img');
      img.src= 'https://assets.quizlet.com/a/j/dist/app/i/achievements/streak-flame.90821ad6fa84e8e.svg'
      img.classList.add('streak')

      for(let i=0; i<allDates.length; i++){
        const date= allDates[i].firstChild.innerHTML
        if(date==15){ allDates[i].classList.add('streak') }
        else if(date==13){ allDates[i].classList.add('streak') }
        else if(date==14 ){allDates[i].classList.add('streak') }
        else if(date>=8 && date<22){ allDates[i].classList.add('orangeBg')}
      }
    }

    addStreak()
  },[])

  return (
    <>
      <NavBar />
      <div className='h-[100%] bg-bgWhite'>
        <div className='w-[80%] mx-auto'>
          <div className='py-[4rem]'>
            <h3 className='text-[1.25rem] font-bold mb-[1rem]'>Recent activity</h3>
            <div className='flex flex-cols justify-evenly items-center bg-white w-[100%] h-[60vh] rounded-[1rem] boxShadow'>

              <div className='text-center'>
                <h3 className='text-[1rem] font-bold mb-[0.5rem] '>Recent ranked</h3>
                <span className="text-[0.75rem] text-learnWhite font-medium mb-[1.5rem]">3-day streak</span>
                <div className='w-[9.25rem]'>
                  <div className='w-[100%] flex text-center items-center'>
                    <div className='w-[9.25rem] h-[9.25rem] m-auto relative'>
                      <img alt="3-day streak" src="https://quizlet.com/static/achievements/badge-Day.svg" className="w-[100%] h-[100%] " />
                      <span data-testid="goal-number" class="aup4qff text-spanBlue text-[1.5rem] font-bold absolute left-[45%] top-[38%]">3</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='w-[20rem] mb-[4rem]'>
                <div className='text-[.75rem] text-spanBlue font-medium '>
                  <Calendar onChange={onChange} value={value} />
                </div>
              </div>


              <div className='text-center'>
                <h3 className='text-spanBlue text-[1rem] font-bold text-center'>Current streak</h3>
                <div className='text-[.75rem] font-medium mt-[0.25rem] text-center'>
                  <div className="text-[.75rem text-spanBlue font-medium mt-[.25rem] text-center">3-day</div>
                  <ul className='mt-[1rem] relative list-none text-center'>
                    <li className='poyi4u6 flex justify-center'></li>
                    <li className='text-center'>
                      <img class="w-[2.25rem] mx-auto h-[2.25rem] mb-[0.8rem]" src="https://assets.quizlet.com/a/j/dist/app/i/achievements/streak-flame.90821ad6fa84e8e.svg" />
                    </li>
                    <li className='text-center'>
                      <img class="w-[2.25rem] mx-auto h-[2.25rem] mb-[0.8rem]" src="https://assets.quizlet.com/a/j/dist/app/i/achievements/streak-flame.90821ad6fa84e8e.svg" />
                    </li>
                    <li className='text-center'>
                      <img class="w-[2.25rem] mx-auto h-[2.25rem] " src="https://assets.quizlet.com/a/j/dist/app/i/achievements/streak-flame.90821ad6fa84e8e.svg" />
                    </li>
                  </ul>

                </div>
              </div>
            </div>
          </div>

          <div className='py-[4rem]'>
            <h3 className='text-[1.25rem] font-bold mb-[1rem]'>Study</h3>
            <div className='flex flex-cols justify-center items-center bg-white w-[100%] h-[70vh] rounded-[1rem] boxShadow'>
              <div className='w-[87%] mx-auto'>
                <div className=''>
                  <div className='achivement flex justify-evenly'>
                    <div className='w-[9.25rem]'>
                      <div className='flex center text-center w-[100%] flex-cols'>
                        <div className='relative h-[9.25rem] w-[10.25rem]'>
                          <img src="https://quizlet.com/static/achievements/badge-StudiedWithFlashcards.svg" className="h-[100%]" />
                          <h1>Flashcard whiz</h1>
                          <span className='text-[.875rem] font-light text-termWhite'>Earned 5/12/23</span>
                        </div>
                      </div>
                    </div>
                    <div className='w-[9.25rem]'>
                      <div className='flex center text-center w-[100%] flex-cols'>
                        <div className='relative h-[9.25rem] w-[10.25rem]'>
                          <img src="https://quizlet.com/static/achievements/badge-StudiedWithLearn.svg" className="h-[100%]" />
                          <h1>Active learner</h1>
                          <span className='text-[.875rem] font-light text-termWhite'>Earned 5/12/23</span>
                        </div>
                      </div>
                    </div>
                    <div className='w-[9.25rem]'>
                      <div className='flex center text-center w-[100%] flex-cols'>
                        <div className='relative h-[9.25rem] w-[10.25rem]'>
                          <img src="https://quizlet.com/static/achievements/locked-badge-ReachedEndOfLearn.svg" className="h-[100%]" />

                          <h1>Committed learner</h1>
                        </div>
                      </div>
                    </div>
                    <div className='w-[9.25rem]'>
                      <div className='flex center text-center w-[100%] flex-cols'>
                        <div className='relative h-[9.25rem] w-[10.25rem]'>
                          <img alt="Flashcard whiz" src="https://quizlet.com/static/achievements/locked-badge-StudiedWithMatch.svg" className="h-[100%]" />
                          <h1>Match whiz</h1>
                        </div>
                      </div>
                    </div>
                    <div className='w-[9.25rem]'>
                      <div className='flex center text-center w-[100%] flex-cols'>
                        <div className='relative h-[9.25rem] w-[10.25rem]'>
                          <img alt="Flashcard whiz" src="https://quizlet.com/static/achievements/badge-NightOwl.svg" className="h-[100%]" />
                          <h1>Night owl</h1>
                          <span className='text-[.875rem] font-light text-termWhite'>Earned 5/12/23</span>
                        </div>
                      </div>
                    </div>
                    <div className='w-[9.25rem]'>
                      <div className='flex center text-center w-[100%] flex-cols'>
                        <div className='relative h-[9.25rem] w-[10.25rem]'>
                          <img alt="Flashcard whiz" src="https://quizlet.com/static/achievements/badge-EarlyBird.svg" className="h-[100%]" />
                          <h1>Early bird</h1>
                          <span className='text-[.875rem] font-light text-termWhite'>Earned 5/12/23</span>
                        </div>
                      </div>
                    </div>

                    <div className='w-[9.25rem]'>
                      <div className='flex center text-center w-[100%] flex-cols'>
                        <div className='relative h-[9.25rem] w-[10.25rem]'>
                          <img alt="Flashcard whiz" src="https://quizlet.com/static/achievements/badge-StudiedWithTest.svg" className="h-[100%]" />
                          <h1>Test acer</h1>
                          <span className='text-[.875rem] font-light text-termWhite'>Earned 5/12/23</span>
                        </div>
                      </div>
                    </div>
                    <div className='w-[9.25rem]'>
                      <div className='flex center text-center w-[100%] flex-cols'>
                        <div className='relative h-[9.25rem] w-[10.25rem]'>
                          <img alt="Flashcard whiz" src="https://quizlet.com/static/achievements/locked-badge-CreatedFirstSet.svg" className="h-[100%]" />
                          <h1>Set builder</h1>
                          <span className='text-[.875rem] font-light text-termWhite'>Earned 5/12/23</span>
                        </div>
                      </div>
                    </div>
                    <div className='w-[9.25rem]'>
                      <div className='flex center text-center w-[100%] flex-cols'>
                        <div className='relative h-[9.25rem] w-[10.25rem]'>
                          <img alt="Flashcard whiz" src="https://quizlet.com/static/achievements/locked-badge-FirstHighscoreInMatch.svg" className="h-[100%]" />
                          <h1>Match maker</h1>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
