import { Component, h, State, Prop } from '@stencil/core';
import calendar, { isSameMonth, isSameDay, isValidDate, checkDateInBetween } from '../../utils/datepicker-utils';
import { guid, splitArray, convertYYYYMMDD, Fragment, isUndefinedOrNull } from '../../utils/utils';

@Component({
  tag: 'calendar-days',
  styleUrl: 'date-picker.css',
})

export class CalendarDays {
    @Prop() month: any;
    @Prop() year: any;
    @Prop() selectedDate: any;
    @Prop() options: any;
    @State() state;
    @Prop({ mutable: true }) changeSelectedDate: Function;

    constructor(props) {
        const selectedDate = (this.selectedDate) ? new Date(convertYYYYMMDD(this.selectedDate, this.options)) : new Date();
        this.state = { month: selectedDate.getMonth() + 1, year: selectedDate.getFullYear(), lowerDateLimit: new Date() };
    }

    componentWillRender() {
        const options = this.options;
        var _lowerdate = (!isUndefinedOrNull(options) && options.lowerDateLimit && isValidDate(options.lowerDateLimit))? options.lowerDateLimit : new Date();

        if(_lowerdate){
            _lowerdate = new Date(_lowerdate);
            _lowerdate.setDate(_lowerdate.getDate() - 1);
        }

        this.state.lowerDateLimit = (!isUndefinedOrNull(_lowerdate))? _lowerdate : new Date();
    }

    componentDidUpdate(){
    }

    getCalendarDates = () => {
        const current = this.selectedDate;
        const calendarMonth = this.month || +current.getMonth() + 1;
        const calendarYear = this.year || current.getFullYear();
        return splitArray(calendar(calendarMonth, calendarYear), 7);
    };

    selectDate = (_date) => {
        this.changeSelectedDate(_date);
    }

    renderCalendarDate = function (date, index) {
        const current = this.selectedDate;
        const options = this.options;
        const today = this.selectedDate;
        const _date = new Date(date[0], (date[1] - 1), date[2]);
        const props = { index, title: _date.toDateString() };
        
        const inMonth = this.month && this.year && isSameMonth(_date, this.month, this.year);
        
        const isToday = isSameDay(_date, today);
        const isCurrent = current && isSameDay(_date, new Date(convertYYYYMMDD(current, options)));
        
        const upperDateLimit = (!isUndefinedOrNull(options) && options.upperDateLimit)? (!isUndefinedOrNull(options) && (isValidDate(options.upperDateLimit))? options.upperDateLimit : null) : null;
        
        const isEnabled = (isToday || checkDateInBetween(_date, this.state.lowerDateLimit, upperDateLimit))
        
        const dayClassName = (isCurrent) ? 'VS-DaySelected' : ((isToday) ? 'VS-DayCurrent' : 'VS-NormalDay');
        const padClassName = (_date.getDate() <= 9)? 'VS-PadExtra' : '';


        return (  
            <Fragment key={guid()}>   
                {
                    (isEnabled)?
                        <div {...props} class={this.getClassName(props.index)} onClick={() => this.selectDate(_date)}>
                            {
                                (inMonth) ?
                                    <span class={`VS-CalDay ${dayClassName} ${padClassName}`}>{_date.getDate()}</span>
                                    :
                                    <span class={`VS-NextPrevDay ${padClassName}`}>{_date.getDate()}</span>
                            }                
                        </div> 
                        :
                        <div {...props} class={this.getClassName(props.index)}>
                            <span class='VS-DisabledDay'>{_date.getDate()}</span>
                        </div>
                } 
            </Fragment>
        );
    }

    renderCalendarRow = (dates, index) => {
        const rows = JSON.parse(JSON.stringify(dates)).map((date, index1) => {
            return this.renderCalendarDate(date, index1)
        });
        
        return (
            <div class="VS-DateRow" key={guid()}>{rows}</div>
        )
    }

    getClassName = (index) => {
        return (index % 6 === 0) ? 'VS-Day VS-Medium-UPPER-Case VS-DayStart' : 'VS-Day VS-Medium-UPPER-Case';
    }

    render() {
        return (
            <div class="VS-CalendarDay">
                {this.getCalendarDates().map((row, index) => this.renderCalendarRow(row, index))}
            </div>
        );
    }
}