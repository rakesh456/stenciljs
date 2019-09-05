import{r as t,h as e}from"./p-d1ee5c08.js";import{g as s}from"./p-b0ecb33c.js";import{i as a}from"./p-b141c863.js";const i={containerOuter:"VS-App",headerInner:"VS-App-header",datepickerContainer:"VS-DatepickerContainer",inputBorder:"VS-Input-Border"};class r{constructor(e){t(this,e),this.selectedDate="",this.shouldCalendarOpen=!1,this.displayFormat="",this.closeCalendar=t=>{(t.target&&t.target.classList&&(t.target.classList.contains("gr__localhost")||t.target.classList.contains("VS-App-header"))&&!t.target.classList.contains("VS-Calendar-Input")&&!t.target.classList.contains("VS-Day")&&!t.target.classList.contains("VS-CalDay")&&!t.target.classList.contains("VS-NextPrevDay")&&!t.target.classList.contains("VS-Icon")&&!0===this.shouldCalendarOpen||t.target.classList.length<=0)&&(this.shouldCalendarOpen=!1)},this.onSelectedDate=t=>{this.shouldCalendarOpen=!1,this.selectedDate=s(t,this.displayFormat)},this.datePickerOptions=JSON.parse(this.options),this.displayFormat=this.datePickerOptions?this.datePickerOptions.displayFormat:""}async getValue(){return this.selectedDate}async setValue(t){a(t)&&this.onSelectedDate(t)}componentWillLoad(){document.addEventListener("click",this.closeCalendar),this.selectedDate=s(new Date,this.displayFormat)}handleOnFocus(){this.shouldCalendarOpen=!0}getIconAlignClass(){const t=this.datePickerOptions?this.datePickerOptions:{};return t&&"Left"===t.iconAlignment?"VS-PullLeft VS-MrgT5":"VS-PullRight VS-MrgT5"}getDateAlignClass(){const t=this.datePickerOptions?this.datePickerOptions:{};return t&&"Right"===t.dateStringAlignment?"VS-PullRight VS-TextRight":"VS-PullLeft VS-TextLeft"}render(){return e("div",{class:i.containerOuter},e("header",{class:i.headerInner},e("div",{class:i.datepickerContainer},e("div",{class:i.inputBorder},e("span",{class:this.getIconAlignClass()},e("i",{class:"VS-Shape VS-TextDark VS-CalenderIcon fa fa-calendar"})),e("input",{type:"text",onFocus:()=>this.handleOnFocus(),value:this.selectedDate,class:`VS-Regular-UPPER-Case VS-Calendar-Input ${this.getDateAlignClass()}`,placeholder:"DD/MM/YYYY"})),this.shouldCalendarOpen?e("calendar-display",{options:this.datePickerOptions,selectedDate:this.selectedDate,shouldCalendarOpen:this.shouldCalendarOpen,changeSelectedDate:this.onSelectedDate}," "):"")))}static get style(){return"\@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\");:root{--primary-one-light:#e6f0f6;--primary-one-dark:#006ba6;--primary-one-bright:#1a7aaf;--primary-two-light:#eeeeef;--primary-two-bright:#76797b;--primary-two-dark:#54585a;--secondary-one-light:#f3f8e6;--secondary-one-bright:#9dca33;--secondary-one-dark:#84bd00;--secondary-two-bright:#335161;--secondary-two-light:#e6e9eb;--secondary-two-dark:#00263a;--complementary-one:#f8f8f9;--complementary-two:#e6edf3;--complementary-three:#ccdbe7;--text-black:#000;--complementary-four:#80a5c3;--text-white:#fff;--text-tertiary:#bbbcbd;--cg-aqua-10:#ecf9f7;--cg-aqua-30:#c6ece6;--cg-aqua-50:#a0e0d6;--cg-aqua-70:#79d4c5;--cg-aqua:#40c1ac;--cg-crimson-10:#fbeae8;--cg-crimson-30:#f4bfbb;--cg-crimson-60:#e97f77;--cg-crimson-80:#e15449;--cg-crimson-90:#de3e33;--cg-navy-10:#b3c9db;--cg-navy-80:#336f9f;--cg-navy-90:#1a5d93;--cg-navy:#004b87;--gui-slate:#78909c;--gui-green:#00b16a;--gui-mango:#ffb900;--gui-gold:#fff1d2;--gui-snow:#fafafa;--gui-blue:#069abc;--gui-white:#fffffe;--gui-no-data:#eee;--gui-error-red:#fd462a}.VS-Calendar-Input::-ms-clear{display:none}.VS-Input-Border{width:216px;height:40px;border-radius:2px;-webkit-box-shadow:inset 0 1px 3px 0 rgba(0,0,0,.1);box-shadow:inset 0 1px 3px 0 rgba(0,0,0,.1);border:1px solid #ececec;background-color:var(--text-white)}.VS-Input-Border.VS-Disabled{cursor:default;background-color:#ebebe4}.VS-Regular-UPPER-Case{width:149px;height:24px;font-family:Roboto;font-size:14px;font-weight:400;line-height:1.14;color:var(--text-tertiary)}.VS-Medium-UPPER-Case,.VS-Regular-UPPER-Case{font-style:normal;font-stretch:normal;letter-spacing:normal}.VS-Medium-UPPER-Case{width:136px;height:16px;font-size:12px;font-weight:500;line-height:1.33;text-align:center;color:var(--secondary-two-dark)}.VS-shape-rounded-fill{width:216px;height:216px;border-radius:1px}.VS-Grey{width:24px;height:24px}.VS-Shape{width:20px;height:20px;margin:5px 5px;font-size:20px}.VS-Day .VS-DayCurrent,.VS-NextPrevDay{color:#bbb}.VS-DisabledDay{color:#c00}.VS-Day span:hover{width:20px;height:20px;border:solid 2px var(--primary-one-dark);border-radius:15px;padding:4px 6px}.VS-Day .VS-PadExtra:hover,.VS-DaySelected.VS-PadExtra{padding:3px 7.5px}.VS-DaySelected{width:20px;height:20px;border:solid 2px var(--primary-one-dark);background-color:var(--primary-one-dark);border-radius:15px;padding:3px 4px;color:#fff}.VS-Hidden{display:none;visibility:hidden}.VS-Show{display:block}.VS-MrgT5{margin-top:5px}.VS-TextCenter{text-align:center}.VS-TextLeft{text-align:left}.VS-TextRight{text-align:right}.VS-PullRight{float:right}.VS-PullLeft{float:left}.VS-TextDark{color:#333}.VS-Text-Primary{width:16px;height:16px}.VS-DatepickerInput{width:216px;height:40px;padding:0 2px}input,input:focus{border:0;width:150px;vertical-align:middle;outline:transparent;margin:7px 10px 0}.VS-DatepickerContainer{background-color:#fff;width:216px}.VS-CalendarContainer{border:1px solid #ddd;background-color:#fff;color:navy;font-size:16px;font-weight:700;position:absolute}.VS-CalendarContainer .VS-CalendarMonth{display:inline-block;width:216px}.VS-CalendarContainer .VS-CalendarMonth .VS-MonthName{padding:7px 0;letter-spacing:2px}.VS-CalendarContainer .VS-CalendarMonth .VS-Icon{margin:2px 5px 0 5px;cursor:pointer}.VS-CalendarContainer .VS-CalendarWeek .VS-WeekName{cursor:pointer;display:inline-block;width:30px;height:16px;line-height:1.33;letter-spacing:normal;text-align:center}.VS-CalendarContainer .CalendarDay .VS-WeekDay{margin:0 9px}.VS-Day .VS-Today{color:#fff;background-color:navy;border:2px solid navy;padding:3px}.VS-Day .VS-SelectedDay{border:2px solid var(--secondary-two-dark);padding:3px}.VS-Day{cursor:pointer;-webkit-transition:all .4s ease-out;transition:all .4s ease-out;display:inline-block;width:30px;height:16px;text-align:center;margin:6px 0}.VS-DateRow{display:block}.VS-CalendarButtons{padding:5px;height:30px}.VS-CalendarButtons button{padding:8px 10px;text-transform:uppercase;border-radius:3px}.VS-CalendarButtons .VS-ClearButton{float:left;color:navy;background-color:#fff;border:1px solid navy}.VS-CalendarButtons .VS-SelectButton{float:right;color:#fff;background-color:navy;border:1px solid #fff}"}}export{r as date_picker};