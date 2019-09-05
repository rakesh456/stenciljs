import { Component, h, State, Prop } from '@stencil/core';
import { convertYYYYMMDD } from '../../utils/utils';

@Component({
  tag: 'calendar-display',
  styleUrl: 'date-picker.css',
})

export class CalendarDisplay {
    @Prop() options: any;
    @Prop() selectedDate: any;
    @Prop() shouldCalendarOpen: Boolean;
    @State() state;
    @Prop({ mutable: true }) changeSelectedDate: Function;

    constructor(props) {
        const selectedDate = (this.selectedDate) ? new Date(convertYYYYMMDD(this.selectedDate, this.options)) : new Date();
        this.state = { month: selectedDate.getMonth() + 1, year: selectedDate.getFullYear() };
    }

    componentDidUpdate(){
      
    }

    onSelectedDate = (_date) => {
      this.changeSelectedDate(_date);
    }

    goToPrevMonth = () => {
      if (this.state.month === 1) {
        this.state = { month: 12, year: (this.state.year - 1) };
      } else {
        this.state = { month: this.state.month - 1, year: this.state.year };
      }
    }

    goToNextMonth = () => {
      if (this.state.month === 12) {
        this.state = { month: 1, year: (this.state.year + 1) };
      } else {
        this.state = { month: this.state.month + 1, year: this.state.year };
      }
    }

    render() {
        const selectedDate = this.selectedDate;
        if (!this.shouldCalendarOpen) {
            return null;
        }
        
        return (
            <div class="VS-CalendarContainer VS-shape-rounded-fill VS-modal">
                <calendar-month month={this.state.month} year={this.state.year} goToPrevMonth={this.goToPrevMonth} goToNextMonth={this.goToNextMonth}></calendar-month>
                <calendar-week></calendar-week>
                <calendar-days options={this.options} selectedDate={selectedDate} month={this.state.month} year={this.state.year} changeSelectedDate={this.onSelectedDate}></calendar-days>
            </div>
        );
    }
}