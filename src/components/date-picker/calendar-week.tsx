import { Component, h, State, Prop } from '@stencil/core';
import { WEEK_SHORT_NAMES } from '../../utils/utils';

@Component({
  tag: 'calendar-week',
  styleUrl: 'date-picker.css',
})

export class CalendarWeek {
    constructor(props) {
    }

    componentDidUpdate(){
    }

    render() {
        const weekItems = WEEK_SHORT_NAMES.map((number, index) =>
            <span class="VS-Day VS-Medium-UPPER-Case" key={index}>{number}</span>
        );

        return (
            <div class="VS-CalendarWeek">
                {weekItems}
            </div>
        );
    }
}