import { Component, h, State, Prop } from '@stencil/core';
import { getMonthNameByIndex } from '../../utils/utils';

@Component({
  tag: 'calendar-month',
  styleUrl: 'date-picker.css',
})

export class CalendarMonth {
    @Prop() month: any;
    @Prop() year: any;
    @Prop({ mutable: true }) goToPrevMonth: Function;
    @Prop({ mutable: true }) goToNextMonth: Function;

    constructor(props) {
    }

    componentDidUpdate(){
    }

    render() {
        
        return (
            <div class="VS-CalendarMonth VS-TextCenter">
                <i class="VS-PullLeft VS-Icon fa fa-caret-left" onClick={() => this.goToPrevMonth()}></i>
                    <span class="VS-Medium-UPPER-Case VS-MonthName">{getMonthNameByIndex(this.month - 1)} {this.year}</span>
                <i class="VS-PullRight VS-Icon fa fa-caret-right" onClick={() => this.goToNextMonth()}></i>
            </div>
        );
    }
}