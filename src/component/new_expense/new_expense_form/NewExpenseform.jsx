import React from "react";
import './NewExpenseform.css'

const NewExpenseform =()=>{
    const onTitleChange = (event)=>{
        console.log(event.target.value)
    } 
    const onAmountChange = (event)=>{
        console.log(event.target.value)
    } 
    const onDateChange = (event)=>{
        console.log(event.target.value)
    } 

    const onSubmitHandler =(event)=>{

    }
    return(
        <div>
            <form action="" onSubmit={onSubmitHandler}>
                <div className="new-expense__controls">

                <div className="new-expense__control">
                <label htmlFor="tut">Title</label>
                <input type="text" id="tut" name="tut" onChange={onTitleChange}/>
                </div>


                <div className="new-expense__control">
                     <label htmlFor="amt">Amount</label>
                <input type="number" id="amt" name="amt" min="0" max="1000" onChange={onAmountChange}/>
                </div>


                <div className="new-expense__control"> 
                    <label htmlFor="dt">Date</label>
                 <input type="date" id="dt" name="dt"  onChange={onDateChange}/>
                 </div>


                 
                </div>
                <div className="new-expense__actions"> 
                 <button>Cancel</button>
                <button>AddExpense</button>
                </div>
            </form>

        </div>
    )
}
export default NewExpenseform;