import { Component, h, Prop, Method, State } from '@stencil/core';
import { getDateMMDDYYYY, getDateByFormatDDMMYYYY } from '../../utils/utils';
import { isValidDate } from '../../utils/datepicker-utils';

const DEFAULT_CLASSNAMES = {
  containerOuter: 'VS-App',
  headerInner: 'VS-App-header',
  datepickerContainer: 'VS-DatepickerContainer',
  inputBorder: 'VS-Input-Border'
};

@Component({
  tag: 'date-picker',
  styleUrl: 'date-picker.css'
})

export class DatePicker {
  @State() selectedDate: string = '';
  @State() shouldCalendarOpen: Boolean = false;
  @Prop() options: any;
  @Prop() currentdate: any;
  displayFormat = '';
  datePickerOptions: any;

  constructor() {
    this.datePickerOptions = JSON.parse(this.options);
    this.displayFormat = (this.datePickerOptions)? this.datePickerOptions.displayFormat : '';
  }

  @Method()
  async getValue() {
    return this.selectedDate;
  }
  
  @Method()
  async setValue(date) {
    if(isValidDate(date)){
      this.onSelectedDate(date);
    }
  }

  componentWillLoad() {
    document.addEventListener('click', this.closeCalendar);
    this.selectedDate = getDateByFormatDDMMYYYY(new Date(), this.displayFormat);
  }
  
  closeCalendar = (e) => {
    if ((e.target && e.target.classList && (e.target.classList.contains("gr__localhost") || e.target.classList.contains("VS-App-header")) && !e.target.classList.contains("VS-Calendar-Input") && !e.target.classList.contains("VS-Day") && !e.target.classList.contains("VS-CalDay") && !e.target.classList.contains("VS-NextPrevDay") && !e.target.classList.contains("VS-Icon") && this.shouldCalendarOpen === true) || e.target.classList.length <= 0) {
      this.shouldCalendarOpen = false
    }
  }

  handleOnFocus(){
    this.shouldCalendarOpen = true;
  }

  onSelectedDate = (_date) => {
    this.shouldCalendarOpen = false;
    this.selectedDate = getDateByFormatDDMMYYYY(_date, this.displayFormat);
  }

  getIconAlignClass() {
    const options = (this.datePickerOptions)? this.datePickerOptions : {};
    return (options && options.iconAlignment === 'Left') ? 'VS-PullLeft VS-MrgT5' : 'VS-PullRight VS-MrgT5';
  }

  getDateAlignClass() {
    const options = (this.datePickerOptions)? this.datePickerOptions : {};
    return (options && options.dateStringAlignment === 'Right') ? 'VS-PullRight VS-TextRight' : 'VS-PullLeft VS-TextLeft';
  }

  render() {
    return (
      <div class={DEFAULT_CLASSNAMES.containerOuter}>
        <header class={DEFAULT_CLASSNAMES.headerInner}>
          <div class={DEFAULT_CLASSNAMES.datepickerContainer}>
            <div class={DEFAULT_CLASSNAMES.inputBorder}>
              <span class={this.getIconAlignClass()}>
                <i class="VS-Shape VS-TextDark VS-CalenderIcon fa fa-calendar"></i>
              </span>
              <input type="text" onFocus={() => this.handleOnFocus()} value={this.selectedDate} class={`VS-Regular-UPPER-Case VS-Calendar-Input ${this.getDateAlignClass()}`} placeholder="DD/MM/YYYY"/>
            </div>
            {
              (this.shouldCalendarOpen)? 
                <calendar-display options={this.datePickerOptions} selectedDate={this.selectedDate} shouldCalendarOpen={this.shouldCalendarOpen} changeSelectedDate={this.onSelectedDate}> </calendar-display>
              : ''
            }
          </div>
        </header>
      </div>
      );
  }
}
