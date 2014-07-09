<a href="http://gruntjs.com" target="_blank"><img src="https://cdn.gruntjs.com/builtwith.png" alt="Built with Grunt"></a> 
# Gridlock 

A responsive CSS grid system. Part of the Formstone Library. 

- [Demo](http://formstone.it/components/Gridlock/demo/index.html) 
- [Documentation](http://formstone.it/gridlock/) 

#### Bower Support 
`bower install Gridlock` 

---

## Usage

Gridlock works by nesting 'cells' within 'rows'. Cells are defined by classes that define widths at specific breakpoints that correspond to general screen sizes. By default, Gridlock renders 3 columns on mobile, 6 columns on tablet and 12 columns on mobile.

### Markup

A basic example may look something like:

```
<body class="gridlock">
	<div class="row">
		<div class="mobile-3 tablet-2 desktop-4">...</div>
		<div class="mobile-3 tablet-2 desktop-4">...</div>
		<div class="mobile-3 tablet-2 desktop-4">...</div>
	</div>
</body>
```

This will create 3 cells that span 3 columns on mobile, 2 columns on desktop and 4 columns on desktop. You can think of the nested structure like a directory tree:

```
gridlock
├─ row
|  ├─ cell
|  |─ cell
|  |  └─ row
|  |     ├─ cell
|  |     └─ cell
|  └─ cell
└─ row
   ├─ cell
   └─ cell
```

### Box-Sizing

Gridlock relies on border-box and includes a global box-sizing reset:

```
*, *:before, *:after {
	-webkit-box-sizing: border-box;
	   -moz-box-sizing: border-box;
	        box-sizing: border-box;
}
```

This will effect every element on the page. It can have unexpected results but will help speed development by modifying how padding and borders effect. Learn more.

### Helper Classes

Helper classes can be added to cells to modify their default behavior in predictable ways.

| Class | Description |
| --- | --- | --- |
| `padded` | Swaps cell margin for padding. Allows backgrounds to touch while maintaining gutters. |
| `contained` | Removes cell margin. Allows backgrounds to touch by removing gutters. |
| `centered` | Centers cell. Useful for centering odd column counts cells. |

### Configuration

Gridlock can also be configured and rebuilt using Grunt. Simply edit the variables found in `/src/fs.gridlock-config.less` before running the default `grunt` process.

| Variable | Default | Description |
| --- | --- | --- |
| **Structure** | | |
| `@class-container` | `gridlock` | Container class |
| `@class-row` | `row` | Row class |
| `@class-contained` | `contained` | Contained helper class |
| `@class-padded` | `padded` | Padded helper class |
| `@class-centered` | `centered` | Centered helper class |
| **Cells** | | |
| `@class-all` | `all` | All cell class |
| `@class-min` | `min` | Min cell class |
| `@class-mobile` | `mobile` | Mobile cell class |
| `@class-tablet` | `tablet` | Tablet cell class |
| `@class-desktop` | `desktop` | Desktop cell class |
| `@class-max` | `max` | Max cell class |
| **Columns** | | |
| `@columns-mobile` | `3` | Mobile column count |
| `@columns-tablet` | `6` | Tablet column count |
| `@columns-desktop` | `12` | Desktop column count |
| **Widths** | | |
| `@width-min` | `300px` | Min row width |
| `@width-mobile` | `480px` | Mobile row width |
| `@width-tablet` | `720px` | Tablet row width |
| `@width-desktop` | `960px` | Desktop row width |
| `@width-max` | `1200px` | Max row width |
| **Breakpoints** | | |
| `@width-break-min` | `320px` | Min break width |
| `@width-break-mobile` | `500px` | Mobile break width |
| `@width-break-tablet` | `740px` | Tablet break width |
| `@width-break-desktop` | `980px` | Desktop break width |
| `@width-break-max` | `1220px` | Max break width |
| **Gutters** | | |
| `@gutter` | `1.0416666666666667%;` | Gutter width |