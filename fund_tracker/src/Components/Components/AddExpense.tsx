export default function AddExpense() {
    return(
        <div className="addExpence__container">
            <form className="addExpence__form">
                <input type="text" className="addExpence__form__reason" />
                <input type="number" min="0.00" step="0.01" className="addExpence__form__amount" placeholder="0.0" />
                <select className="addExpence__form__categories">
                    <option value="Category" disabled="true">Select a category</option>
                    <option value="Education">Education</option>
                    <option value="Food">Food</option>
                    <option value="Other">Other</option>
                </select>
                <button type="submit" className="addExpence__form__addbutton">Add</button>
            </form>
        </div>
    )
}