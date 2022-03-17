export const Timer = ({timerRun,isCorrect,setTimeEndTrue,win}) =>{
    
    return(
        <div className={isCorrect === false || win ? "timer__stopped timer__container" : "timer__container"} >
            <div className="timer" timerrun={timerRun} onAnimationEnd={()=>setTimeEndTrue()}></div>
        </div>
    )
}