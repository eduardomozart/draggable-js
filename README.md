# draggable-js

Reorder by moving the items as you hover over them. It works WITHOUT libraries and WITHOUT SortableJS.

## How to use

You can apply it for existing elements:

```js
const list = document.getElementById("lista-tarefas");
document.addEventListener("DOMContentLoaded", () => {
    list.querySelectorAll("li").forEach(li => tornarArrastavel(li));
});
```

Or for items created on-the-fly:

```js
const item = document.createElement("li");
makeDraggable(item);
```

You can also associate functions that are run when the drag ends:

```
item.addEventListener("dragend", () => {
    ...
});
```

## Customization (CSS)

You can apply CSS to customize the drag'n'drop operation:

```css
/* Feedback visual das operações de arrastar e soltar (Drag & Drop) de tarefas */
.dragging {
    opacity: 0.5;
    background: #e9ecef;
}w
```

## Example

[ToDo](https://github.com/eduardomozart/ToDo)