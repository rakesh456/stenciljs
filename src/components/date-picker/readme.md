# fintellix-choice



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description | Type  | Default     |
| ------------- | ------------- | ----------- | ----- | ----------- |
| `currentdate` | `currentdate` |             | `any` | `undefined` |
| `options`     | `options`     |             | `any` | `undefined` |


## Methods

### `getValue() => Promise<string>`



#### Returns

Type: `Promise<string>`



### `setValue(date: any) => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [calendar-display]()

### Graph
```mermaid
graph TD;
  date-picker --> calendar-display
  calendar-display --> calendar-month
  calendar-display --> calendar-week
  calendar-display --> calendar-days
  style date-picker fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
