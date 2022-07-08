import {useState} from "react"; 
export default function BestList(){
    const [timespan,setTimespan] = useState("This Month"); 
    const [holiday, setHolidays] = useState([
        "4th of July", 
        "martin Luter King jr.Day",
        "New Years Day",
    ]);
    return (
        <div>
            <div>HolidayList</div>
            <button onClick={()=> setTimespan("This Month")}>This Month</button>
            <button onClick={()=> setTimespan("This year")}>This Year</button>
            <div>{timespan} is selected</div>
            {holiday.length >0 ? (
                holiday.map((holiday) => (
                    <div>
                        <div>{holiday}</div>
                    </div>
                ))
            ) : (
                <div>No holiday Found.</div>
            )}
        </div>
    

    );
}