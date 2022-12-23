import Header from "./Header";
// import {withRouter} from "react-router-dom";
// import { withRouter } from "react-router";
function EditHoliday(props){
    console.warn("props:",props)
    return(
        <div>
            <Header />
            <h1>update holiday</h1>
        </div>
    )
}
// export default withRouter(EditHoliday)
export default (EditHoliday)