import React from "react";
import Expenseitems from "../expenseitems/Expenseitems";
import './ExpenseList.css'

const ExpenseList =(props)=>{
    const {expenses={}}=props;

    if(expenses.length ===0){
        return(<h2>No expense found</h2>)
    }
    return(
   
        <div>
            {expenses.map((each_expenses)=>{
                return(<Expenseitems
                title={each_expenses.title}
                amount={each_expenses.amount}
                date={each_expenses.date}
                />
            )

            })}


        </div>
    )     
    
}
export default ExpenseList;